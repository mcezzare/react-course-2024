import { useUsers } from '../hooks/useUsers';
import UserRow from './UserRow';


export const UsersPage = () => {
  const {users , nextPage, previousPage} = useUsers()

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
            ) )
          }
        </tbody>

        <tfoot>
          {/* preparar uma barra de status de paginação Pagina xPosition de xTotal  */}
        </tfoot>
      </table>
      <div>
        <button onClick={() => previousPage() }>Prev</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => nextPage() }>Next</button>
      </div>
    </>

  );
};

export default UsersPage;
