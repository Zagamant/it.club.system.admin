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

export const CostsList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="about" />
            <DateField source="date" />
            <TextField source="cost" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CostsShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="about" />
            <DateField source="date" />
            <TextField source="cost" />
        </SimpleShowLayout>
    </Show>
);

export const CostsEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="about" />
            <DateInput source="date" />
            <TextInput source="cost" />
        </SimpleForm>
    </Edit>
);

export const CostsCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="about" />
            <DateInput source="date" />
            <TextInput source="cost" />
        </SimpleForm>
    </Create>
);
