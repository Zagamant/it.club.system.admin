import React from 'react';
import { Admin, Resource } from 'react-admin';

import CustomAuthProvider from './components/CustomAuthProvider';

import CustomDataProvider from './components/CustomDataProvider';

import { UserCreate, UserEdit, UserList, UserShow } from './components/User';
import { ClubCreate, ClubEdit, ClubList, ClubShow } from './components/Club';
import { RoomCreate, RoomEdit, RoomList, RoomShow } from './components/Room';
import { GroupCreate, GroupEdit, GroupList, GroupShow } from './components/Group';
import { CourseCreate, CourseEdit, CourseList, CourseShow } from './components/Course';
import { CostsCreate, CostsEdit, CostsList, CostsShow } from './components/Costs';
import { EventCreate, EventEdit, EventList, EventShow } from './components/Event';
import { PaymentCreate, PaymentEdit, PaymentList, PaymentShow } from './components/Payment';
import { AgreementCreate, AgreementEdit, AgreementList, AgreementShow } from './components/Agreement';
import { RoleCreate, RoleEdit, RoleList } from './components/Roles';

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
                show={UserShow}
                edit={UserEdit}
                create={UserCreate}
            />
            <Resource
                name='roles'
                list={RoleList}
                edit={RoleEdit}
                create={RoleCreate}
            />
            <Resource
                name='clubs'
                list={ClubList}
                edit={ClubEdit}
                create={ClubCreate}
                show={ClubShow}
            />
            <Resource
                name='rooms'
                list={RoomList}
                edit={RoomEdit}
                create={RoomCreate}
                show={RoomShow}
            />
            <Resource
                name='groups'
                list={GroupList}
                edit={GroupEdit}
                create={GroupCreate}
                show={GroupShow}
            />
            <Resource
                name='courses'
                list={CourseList}
                edit={CourseEdit}
                create={CourseCreate}
                show={CourseShow}
            />
            <Resource
                name='costs'
                list={CostsList}
                edit={CostsEdit}
                create={CostsCreate}
                show={CostsShow}
            />
            <Resource
                name='events'
                list={EventList}
                edit={EventEdit}
                create={EventCreate}
                show={EventShow}
            />

            <Resource
                name='payment'
                list={PaymentList}
                edit={PaymentEdit}
                create={PaymentCreate}
                show={PaymentShow}
            />

            <Resource
                name='agreements'
                list={AgreementList}
                edit={AgreementEdit}
                create={AgreementCreate}
                show={AgreementShow}
            />

        </Admin>
    );
}

export default AdminPage;
