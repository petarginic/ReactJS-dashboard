import React from 'react'
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import UsersContent from '../components/Professors/UsersContent'
import UsersHeader from '../components/Professors/UsersHeader';
import { users } from '../data/dummy';

const Users = () => {

  return (
    <>
        <PageHeader> 
            <UsersHeader lengthOfUsers={users.length}/> 
        </PageHeader>

        <PageContent>
            <UsersContent data={users}/>
        </PageContent>     
    </>
  )
}

export default Users