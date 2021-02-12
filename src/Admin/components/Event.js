import React from 'react';
import {
    Create,
    Datagrid,
    DateField,
    DeleteButton,
    Edit,
    EditButton,
    List,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
    DateTimeInput, FunctionField, ReferenceField, SelectInput, ReferenceInput,
} from 'react-admin';

export const EventList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField label="Club" source="clubId" reference="clubs">
                <FunctionField render={record => `${record.title}`} />
            </ReferenceField>
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
            <ReferenceField label="Club" source="clubId" reference="clubs">
                <FunctionField render={record => `${record.title}`} />
            </ReferenceField>
            <TextField source="about" />
            <DateField source="dateTime" showTime/>
        </SimpleShowLayout>
    </Show>
);

export const EventEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="Club" source="clubId" reference="clubs">
                <SelectInput optionText="title"/>
            </ReferenceInput>
            <TextInput source="about" />
            <DateTimeInput source="dateTime" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <ReferenceInput label="Club" source="clubId" reference="clubs">
                <SelectInput optionText="title"/>
            </ReferenceInput>
            <TextInput source="about" />
            <DateTimeInput source="dateTime" />
        </SimpleForm>
    </Create>
);
