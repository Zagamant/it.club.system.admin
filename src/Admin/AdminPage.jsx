import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserCreate, UserEdit, UserList } from './components/User';
import CustomDataProvider from './components/CustomDataProvider';
import CustomAuthProvider from './components/CustomAuthProvider';
import { ClubCreate, ClubEdit, ClubList, ClubShow } from './components/Club';

const dataProvider = CustomDataProvider(process.env.REACT_APP_API_URL);

function AdminPage() {
    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={CustomAuthProvider}
            title='Admin Page'
        >
            <Resource
                name='users'
                list={UserList}
                edit={UserEdit}
                create={UserCreate}
            />
            <Resource
                name='clubs'
                list={ClubList}
                edit={ClubEdit}
                create={ClubCreate}
                show={ClubShow}
            />

            {/*<Resource*/}
            {/*    name='rooms'*/}

            {/*/>*/}
        </Admin>
    );
}

export default AdminPage;
