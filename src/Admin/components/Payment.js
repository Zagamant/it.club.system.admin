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
    TextInput
} from 'react-admin';

export const PaymentList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="user.username" />
            <TextField source="September" />
            <TextField source="October" />
            <TextField source="November" />
            <TextField source="December" />
            <TextField source="January" />
            <TextField source="February" />
            <TextField source="March" />
            <TextField source="March" />
            <TextField source="April" />
            <TextField source="May" />
            <TextField source="June" />
            <TextField source="July" />
            <TextField source="August" />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const PaymentShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="user.username" />
            <TextField source="September" />
            <TextField source="October" />
            <TextField source="November" />
            <TextField source="December" />
            <TextField source="January" />
            <TextField source="February" />
            <TextField source="March" />
            <TextField source="March" />
            <TextField source="April" />
            <TextField source="May" />
            <TextField source="June" />
            <TextField source="July" />
            <TextField source="August" />
        </SimpleShowLayout>
    </Show>
);

export const PaymentEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            //TODO <TextInput source="user.username" />
            <TextInput source="September" />
            <TextInput source="October" />
            <TextInput source="November" />
            <TextInput source="December" />
            <TextInput source="January" />
            <TextInput source="February" />
            <TextInput source="March" />
            <TextInput source="March" />
            <TextInput source="April" />
            <TextInput source="May" />
            <TextInput source="June" />
            <TextInput source="July" />
            <TextInput source="August" />
        </SimpleForm>
    </Edit>
);

export const PaymentCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            //TODO <TextInput source="user.username" />
            <TextInput source="September" />
            <TextInput source="October" />
            <TextInput source="November" />
            <TextInput source="December" />
            <TextInput source="January" />
            <TextInput source="February" />
            <TextInput source="March" />
            <TextInput source="March" />
            <TextInput source="April" />
            <TextInput source="May" />
            <TextInput source="June" />
            <TextInput source="July" />
            <TextInput source="August" />
        </SimpleForm>
    </Create>
);
