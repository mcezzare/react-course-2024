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
              <tr key={user.id}>
              <td><img style={{ width:'50px'}} src={user.avatar} alt="user avatar"/></td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
            </tr>

            )

            )
          }
        </tbody>

        <tfoot></tfoot>
      </table>
    </>

  );
};






export default UsersPage;