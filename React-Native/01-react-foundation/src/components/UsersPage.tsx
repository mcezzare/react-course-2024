import { useUsers } from '../hooks/useUsers';
import UserRow from './UserRow';


export const UsersPage = () => {
  const { users, nextPage, previousPage, isDisabledNext, isDisabledPrev, currentPageRef, totalPages } = useUsers();

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
          <tr>
            <td colSpan={ 3 }>
              Page {currentPageRef.current} of {totalPages} 
            </td>
          </tr>
        </tfoot>
      </table>
      <div>
        <button onClick={ () => previousPage() } disabled={ isDisabledPrev }>Prev</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={ () => nextPage() } disabled={ isDisabledNext }>Next</button>
      </div>
    </>

  );
};

export default UsersPage;
