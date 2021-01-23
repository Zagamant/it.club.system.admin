import React from 'react';
import {Admin, Resource} from 'react-admin';
import {UserCreate, UserEdit, UserList, UserShow} from './components/User';
import CustomDataProvider from "./components/CustomDataProvider";
import CustomAuthProvider from "./components/CustomAuthProvider";
import {ClubCreate, ClubEdit, ClubList, ClubShow} from "./components/Club";
import {RoomCreate, RoomEdit, RoomList, RoomShow} from "./components/Room";
import {GroupCreate, GroupEdit, GroupList, GroupShow} from "./components/Group";
import {CourseCreate, CourseEdit, CourseList, CourseShow} from "./components/Course";
import {CostsCreate, CostsEdit, CostsList, CostsShow} from "./components/Costs";
import {EventCreate, EventEdit, EventList, EventShow} from "./components/Event";
import { PaymentCreate, PaymentEdit, PaymentList, PaymentShow } from './components/Payment';

const dataProvider = CustomDataProvider(process.env.REACT_APP_API_URL);

function AdminPage() {
    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={CustomAuthProvider}
            title="Admin Page"
        >
            <Resource
                name="users"
                list={UserList}
                show={UserShow}
                edit={UserEdit}
                create={UserCreate}
            />
            <Resource
                name="clubs"
                list={ClubList}
                edit={ClubEdit}
                create={ClubCreate}
                show={ClubShow}
            />
            <Resource
                name="rooms"
                list={RoomList}
                edit={RoomEdit}
                create={RoomCreate}
                show={RoomShow}
            />
            <Resource
                name="groups"
                list={GroupList}
                edit={GroupEdit}
                create={GroupCreate}
                show={GroupShow}
            />
            <Resource
                name="courses"
                list={CourseList}
                edit={CourseEdit}
                create={CourseCreate}
                show={CourseShow}
            />
            <Resource
                name="costs"
                list={CostsList}
                edit={CostsEdit}
                create={CostsCreate}
                show={CostsShow}
            />
            <Resource
                name="event"
                list={EventList}
                edit={EventEdit}
                create={EventCreate}
                show={EventShow}
            />

            <Resource
                name="payment"
                list={PaymentList}
                edit={PaymentEdit}
                create={PaymentCreate}
                show={PaymentShow}
            />

        </Admin>
    );
}

export default AdminPage;
