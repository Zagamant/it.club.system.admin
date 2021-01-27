import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    EditButton,
    TabbedShowLayout,
    FormTab,
    SimpleForm,
    TabbedForm,
    Tab,
    Datagrid,
    DateField,
    TextField,
    UrlField,
    SelectInput,
    TextInput,
    DateInput
} from 'react-admin';

const GroupStatuses = [
    { id: 'Recruitment', name: 'Recruitment' },
    { id: 'PendingStart', name: 'Pending start' },
    { id: 'InProgress', name: 'In progress' },
    { id: 'Canceled', name: 'Canceled' },
];

export const GroupList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="room.number" />
            <TextField source="lessonsPerWeek" />
            <TextField source="onlineConversationLink" />
            <TextField source="messenger" />
            <DateField source="startDate" />
            <DateField source="endDate" />
            <TextField source="capacity" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

export const GroupShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="lessonsPerWeek" />
                <TextField source="onlineConversationLink" />
                <TextField source="messenger" />
                <DateField source="startDate" />
                <DateField source="endDate" />
                <TextField source="capacity" />

            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const GroupEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Summary">
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput source="lessonsPerWeek" />
                <TextInput source="onlineConversationLink" />
                <TextInput source="messenger" />
                <DateInput source="startDate" />
                <DateInput source="endDate" />
                <TextInput source="capacity" />
                <SelectInput
                    source="status"
                    choices={GroupStatuses}
                    optionText={(choice) => `${choice.name}`}
                />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const GroupCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="title" />
            <TextInput source="lessonsPerWeek" />
            <TextInput source="onlineConversationLink" />
            <TextInput source="messenger" />
            <DateInput source="startDate" />
            <DateInput source="endDate" />
            <TextInput source="capacity" />
            <SelectInput
                source="status"
                choices={GroupStatuses}
                optionText={(choice) => `${choice.name}`}
            />
        </SimpleForm>
    </Create>
);
