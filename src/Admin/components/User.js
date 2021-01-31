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
    FormTab,
    FunctionField,
    ImageField,
    ImageInput,
    List,
    PasswordInput,
    RichTextField,
    Show,
    Tab,
    TabbedForm,
    TabbedShowLayout,
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
            <FunctionField
                render={(render) =>
                    render === null
                        ? `not defined`
                        : `${render.country},\n\r ${render.city},\n\r ${render.addressLine}`
                }
            />
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
        <TabbedShowLayout rowClick="edit">
            <Tab label="Summary">
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

                <RichTextField source="additionalInfo" />
                <TextField source="userName" />
                <EmailField source="email" />
                <TextField source="phoneNumber" />
                <BooleanField source="lockoutEnabled" />
                <ImageField source="photos" />
                <EditButton />
            </Tab>
            <Tab label="Address">
                <TextField source="country" />
                <TextField source="city" />
                <TextField source="addressLine" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <TabbedForm redirect="list">
            <FormTab label="Summary">
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="newPassword" />
                <TextInput source="middleName" />
                <TextInput source="surname" />
                <PasswordInput source="password" />
                <DateInput source="birthDay" label="Birth Day" />
                <TextInput source="additionalInfo" />
                <TextInput source="userName" />
                <TextInput source="email" />
                <TextInput source="phoneNumber" />
                <BooleanInput source="lockoutEnabled" />
                <ImageInput source="photos" />
            </FormTab>

            <FormTab label="Address">
                <TextInput source="country" />
                <TextInput source="city" />
                <TextInput source="addressLine" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <TabbedForm redirect="list">
            <FormTab label="Summary">
                <TextInput source="userName" />
                <TextInput source="newPassword" />
                <TextInput source="name" />
                <TextInput source="middleName" />
                <TextInput source="surname" />
                <TextInput source="password" />
                <DateInput source="birthDay" />
                <TextInput source="email" />
                <TextInput source="phoneNumber" />
            </FormTab>
            <FormTab label="Address">
                <TextInput source="country" />
                <TextInput source="city" />
                <TextInput source="addressLine" />
            </FormTab>
        </TabbedForm>
    </Create>
);
