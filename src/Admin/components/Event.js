import React from 'react';
import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    DeleteButton,
    Edit,
    EditButton,
    List,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
} from 'react-admin';

export const EventList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="about" />
            <DateField source="dateTime" showTime/>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const EventShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="about" />
            <DateField source="dateTime" showTime/>
        </SimpleShowLayout>
    </Show>
);

export const EventEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="about" />
            <DateInput source="dateTime" showTime/>
        </SimpleForm>
    </Edit>
);

export const EventCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="about" />
            <TextInput source="about" />
            <DateInput source="dateTime" showTime/>
        </SimpleForm>
    </Create>
);