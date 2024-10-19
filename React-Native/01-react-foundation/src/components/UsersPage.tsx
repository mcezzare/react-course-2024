import axios from 'axios';
import { useEffect, useState } from 'react';
import type { ReqResUsersListResponse, User } from '../interfaces';

const loadUsers = async (): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUsersListResponse>( 'https://reqres.in/api/users?page=1' );
    return data.data;
  }
  catch ( error ) {
    console.log( error );
    return [];
  }
};

export const UsersPage = () => {
  const [ users, setusers ] = useState<User[]>( [] );

  useEffect( () => {
    // Simple fetch
    // fetch('https://reqres.in/api/users?page=1')
    // .then (resp => resp.json())
    // .then( data => console.log(data) )

    // quick and dirty
    // loadUsers().then( setusers );   
    loadUsers().then( users => setusers( users ) );


  }, [] );

  return (

    <>
      <h3>Users Page</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( user => (
              <UserRow key={ user.id } user={ user } />
            ))
          }
        </tbody>

        <tfoot></tfoot>
      </table>
    </>

  );
};


interface Props {
  user: User;
}

const UserRow = ( { user }: Props ) => {
  const { avatar, first_name, last_name, email } = user;
  return (
    <tr>
      <td><img style={ { width: '50px' } } src={ avatar } alt="user avatar" /></td>
      <td>{ first_name } { last_name }</td>
      <td>{ email }</td>
    </tr>
  );
};


export default UsersPage;