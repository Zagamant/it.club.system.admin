import React from 'react';
import {
    Create,
    Datagrid,
    DeleteButton,
    Edit,
    EditButton,
    List,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
    SelectInput,
    ReferenceField,
    ReferenceInput,
    FunctionField
} from 'react-admin';

export const PaymentList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <FunctionField render={record => `${record.name} ${record.middleName} ${record.surname}`} />
            </ReferenceField>
            <TextField source="september" />
            <TextField source="october" />
            <TextField source="november" />
            <TextField source="december" />
            <TextField source="january" />
            <TextField source="february" />
            <TextField source="march" />
            <TextField source="march" />
            <TextField source="april" />
            <TextField source="may" />
            <TextField source="june" />
            <TextField source="july" />
            <TextField source="august" />

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const PaymentShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />

            <ReferenceField label="User" source="userId" reference="users">
                <FunctionField render={record => `${record.name} ${record.middleName} ${record.surname}`} />
            </ReferenceField>

            <TextField source="september" />
            <TextField source="october" />
            <TextField source="november" />
            <TextField source="december" />
            <TextField source="january" />
            <TextField source="february" />
            <TextField source="march" />
            <TextField source="march" />
            <TextField source="april" />
            <TextField source="may" />
            <TextField source="june" />
            <TextField source="july" />
            <TextField source="august" />
            <EditButton/>
        </SimpleShowLayout>
    </Show>
);

export const PaymentEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText={record => `${record.name} ${record.surname}`} />
            </ReferenceInput>
            <TextInput source="september" />
            <TextInput source="october" />
            <TextInput source="november" />
            <TextInput source="december" />
            <TextInput source="january" />
            <TextInput source="february" />
            <TextInput source="march" />
            <TextInput source="march" />
            <TextInput source="april" />
            <TextInput source="may" />
            <TextInput source="june" />
            <TextInput source="july" />
            <TextInput source="august" />
        </SimpleForm>
    </Edit>
);

export const PaymentCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText={record => `${record.name} ${record.middleName} ${record.surname}`} />
            </ReferenceInput>
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
