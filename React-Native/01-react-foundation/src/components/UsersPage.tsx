import { useUsers } from '../hooks/useUsers';
import UserRow from './UserRow';

// const loadUsers = async (pageNumber: number = 1): Promise<User[]> => {
//   try {
//     const { data } = await axios.get<ReqResUsersListResponse>( 'https://reqres.in/api/users', {
//       params: {
//         page: pageNumber
//       }
//     } );
//     return data.data;
//   }
//   catch ( error ) {
//     console.log( error );
//     return [];
//   }
// };

export const UsersPage = () => {
  const {users , nextPage, previousPage} = useUsers()
  // const [ users, setUsers ] = useState<User[]>( [] );
  // const currentPageRef = useRef(1);
  // useEffect( () => {
  //   // quick and dirty
  //   // loadUsers().then( setUsers );   
  //   loadUsers(currentPageRef.current)
  //   .then( users => setUsers( users ) );

  // }, [] );

  // const nextPage = async() => {
  //   currentPageRef.current++;
  //   const users = await loadUsers(currentPageRef.current)
  //   if (users.length > 0 ){
  //     setUsers(users);
  //   } else {
  //     currentPageRef.current--;
  //   }
  // }

  // const previousPage = async() => {
  //   if (currentPageRef.current < 1) return;
  //   currentPageRef.current--;
  //   const users = await loadUsers(currentPageRef.current);
  //   setUsers(users);
  // }

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