import React from 'react';
import {
    BooleanField,
    BooleanInput,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    EmailField,
    FunctionField,
    ImageField,
    ImageInput,
    List,
    PasswordInput,
    SimpleForm,
    TextField,
    TextInput,
} from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <FunctionField
                render={(record) =>
                    `${record.name} ${record.middleName} ${record.surname}`
                }
            />
            <DateField
                source="birthDay"
                options={{ year: 'numeric', month: 'long', day: 'numeric' }}
            />
            <TextField source="address" />
            <TextField source="additionalInfo" />
            <TextField source="userName" />
            <EmailField source="email" />
            <TextField source="phoneNumber" />
            <BooleanField source="lockoutEnabled" />
            <ImageField source="photos" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="middleName" />
            <TextInput source="surname" />
            <PasswordInput source="password" />
            <DateInput
                source="birthDay"
                options={{ year: 'numeric', month: 'long', day: 'numeric' }}
            />
            <TextInput source="address" />
            <TextInput source="additionalInfo" />
            <TextInput source="userName" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
            <BooleanInput source="lockoutEnabled" />
            <ImageInput source="photos" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="middleName" />
            <TextInput source="surname" />
            <TextInput source="password" />
            <DateField source="birthDay" />
            <TextInput source="userName" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
        </SimpleForm>
    </Create>
);
