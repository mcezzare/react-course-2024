import axios from 'axios';
import { useEffect } from 'react';
import { ReqResUsersListResponse } from '../interfaces';

const loadUsers = async () => {
  try {
    const { data } = await axios.get<ReqResUsersListResponse>('https://reqres.in/api/users?page=1')
    return data.data
   }
   catch (error) {
    console.log(error);
    return [];
   }
}

export const UsersPage = () => {
  useEffect(()=> {
    // Simple fetch
    // fetch('https://reqres.in/api/users?page=1')
    // .then (resp => resp.json())
    // .then( data => console.log(data) )
    loadUsers().then( users => console.log(users))

   
  },[])

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
          <tr>
            <td>avatar</td>
            <td>nome</td>
            <td>email</td>
          </tr>
        </tbody>

        <tfoot></tfoot>
      </table>
    </>

  );
};

export default UsersPage;