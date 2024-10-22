import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import type { ReqResUsersListResponse, User } from '../interfaces';

const loadUsers = async ( pageNumber: number = 1 ): Promise<ReqResUsersListResponse> => {
  try {
    const { data } = await axios.get<ReqResUsersListResponse>( 'https://reqres.in/api/users', {
      params: {
        page: pageNumber
      }
    } );

    return data;
  }
  catch ( error ) {
    console.log( error );
    throw error; 
  }
};

export const useUsers = ( () => {
  // const [ users, setUsers ] = useState<User[]>( [] );
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const currentPageRef = useRef( 1 );
  useEffect( () => {
    // quick and dirty
    // loadUsers().then( setUsers );   
    loadUsers( currentPageRef.current )
      // .then( users => setUsers( users ) );
    .then( (data) => {
      setUsers(data.data);
      setTotalPages(data.total_pages)
    }

    )
  }, [] );

  const nextPage = async () => {
    console.log(currentPageRef.current, totalPages);
    if (currentPageRef.current <= totalPages) {
      currentPageRef.current++;
      const {data} = await loadUsers( currentPageRef.current );
      if (data.length > 0 ) {
        setUsers(data)
      } else  {
        currentPageRef.current--
      }

    }
  };

  const previousPage = async () => {
    if ( currentPageRef.current < 1 ) return;
    currentPageRef.current--;
    const {data} = await loadUsers( currentPageRef.current );
    setUsers( data );
  };

  const isDisabledPrev = currentPageRef.current === 1;
  const isDisabledNext = currentPageRef.current === totalPages;

  
  return {
    // Properties
    users,
    isDisabledPrev,
    isDisabledNext,
    currentPageRef,
    totalPages,
    // Methods
    nextPage,
    previousPage
  };
} )
