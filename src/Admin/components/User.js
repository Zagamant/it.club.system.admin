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
    RichTextField,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
} from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <FunctionField
                label="Name"
                render={(record) =>
                    `${record.name} ${record.middleName} ${record.surname}`
                }
            />
            <DateField
                source="birthDay"
                options={{ year: 'numeric', month: 'long', day: 'numeric' }}
            />
            <TextField source="address" />
            <RichTextField source="additionalInfo" />
            <TextField source="userName" />
            <EmailField source="email" />
            <TextField source="phoneNumber" />
            <DateField source="birthDay" />
            <ImageField source="photos" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout rowClick="edit">
            <TextField source="id" />
            <FunctionField
                label="Name"
                render={(record) =>
                    `${record.name} ${record.middleName} ${record.surname}`
                }
            />
            <DateField
                source="birthDay"
                options={{ year: 'numeric', month: 'long', day: 'numeric' }}
            />
            <TextField source="address" />
            <RichTextField source="additionalInfo" />
            <TextField source="userName" />
            <EmailField source="email" />
            <TextField source="phoneNumber" />
            <BooleanField source="lockoutEnabled" />
            <ImageField source="photos" />
            <EditButton />
        </SimpleShowLayout>
    </Show>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="middleName" />
            <TextInput source="surname" />
            <PasswordInput source="password" />
            <DateInput source="birthDay" label="Birth Day"/>
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
        <SimpleForm redirect="list">
            <TextInput source="name" />
            <TextInput source="middleName" />
            <TextInput source="surname" />
            <TextInput source="password" />
            <DateInput source="birthDay" />
            <TextInput source="userName" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
        </SimpleForm>
    </Create>
);
