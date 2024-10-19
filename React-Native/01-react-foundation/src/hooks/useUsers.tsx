import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import type { ReqResUsersListResponse, User } from '../interfaces';

const loadUsers = async (pageNumber: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUsersListResponse>( 'https://reqres.in/api/users', {
      params: {
        page: pageNumber
      }
    } );
    return data.data;
  }
  catch ( error ) {
    console.log( error );
    return [];
  }
};

export const useUsers = (() => {
  const [ users, setUsers ] = useState<User[]>( [] );
  const currentPageRef = useRef(1);
  useEffect( () => {
    // quick and dirty
    // loadUsers().then( setUsers );   
    loadUsers(currentPageRef.current)
    .then( users => setUsers( users ) );

  }, [] );

  const nextPage = async() => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current)
    if (users.length > 0 ){
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  }

  const previousPage = async() => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsers(users);
  }

  return {
    // Properties
    users,

    // Methods
    nextPage,
    previousPage
}
})


