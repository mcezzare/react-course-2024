import axios from 'axios';
import { useEffect } from 'react';


export const UsersPage = () => {
  useEffect(()=> {
    // Simple fetch
    // fetch('https://reqres.in/api/users?page=1')
    // .then (resp => resp.json())
    // .then( data => console.log(data) )


    axios.get('https://reqres.in/api/users?page=1')
    .then(resp => console.log(resp.data))
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