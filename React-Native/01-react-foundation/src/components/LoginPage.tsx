import { useEffect } from "react";
import { AuthUserState, useAuthStore } from "../store/auth.store";

const LoginPage = () => {

  const authStatus = useAuthStore( state => state.status );
  const user = useAuthStore( state => state.user );

  const login = useAuthStore( state => state.login );
  const logout = useAuthStore( state => state.logout );

  useEffect( () => {
    setTimeout( () => {
      logout();
    }, 1500 );
  }, [] );


  if ( authStatus === AuthUserState.checking ) {
    return <h3>Loading....</h3>;
  }


  return (

    <>
      <h3>Login Page</h3>
      {/*  Check if authenticated block */ }
      {
        ( authStatus === AuthUserState.authenticated )
          ? <div> Autenticado como { JSON.stringify( user, null, 2 ) }</div>
          : <div> Não Autenticado </div>
      }
      {/*  Login/Logout  block */ }
      {
        ( authStatus === AuthUserState.authenticated )
          ? (
            <button onClick={ logout }>Logout</button>
          )
          : (
            <button onClick={ () => login( 'mcezzare@gmail.com', 'ABC123' ) }>Login</button>
          )
      }

    </>

  );
};

export default LoginPage;