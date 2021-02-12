import React from 'react';
import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    DeleteButton,
    Edit,
    EditButton, FunctionField,
    List, ReferenceField, ReferenceInput, SelectInput,
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
            <ReferenceField label="Club" source="clubId" reference="clubs">
                <FunctionField render={record => `${record.title}`} />
            </ReferenceField>
            <TextField source="about" />
            <DateField source="date" />
            <TextField source="cost" options={{
                style: 'currency',
                currency: 'EUR',
            }} />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CostsShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField label="Club" source="clubId" reference="clubs">
                <FunctionField render={record => `${record.title}`} />
            </ReferenceField>
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
            <ReferenceInput label="Club" source="clubId" reference="clubs">
                <SelectInput optionText="title"/>
            </ReferenceInput>

            <TextInput source="about" />
            <DateInput source="date" />
            <TextInput source="cost" />
        </SimpleForm>
    </Edit>
);

export const CostsCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <ReferenceInput label="Club" source="clubId" reference="clubs">
                <SelectInput optionText="title"/>
            </ReferenceInput>
            <TextInput source="about" />
            <DateInput source="date" />
            <TextInput source="cost" />
        </SimpleForm>
    </Create>
);
