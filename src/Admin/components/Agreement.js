import React from 'react';
import {
    Create,
    Datagrid,
    DateInput,
    DeleteButton,
    Edit,
    EditButton,
    FunctionField,
    List,
    ReferenceField, ReferenceInput, SelectInput,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
} from 'react-admin';

export const AgreementList = (props) => (
    <List {...props}>
        <Datagrid rowClick='show'>
            <TextField source='id' />
            <ReferenceField reference='users' source='userId'>
                <FunctionField
                    label='Name'
                    render={(record) =>
                        `${record.name} ${record.middleName} ${record.surname}`
                    }
                />
            </ReferenceField>
            <ReferenceField reference='courses' source='courseId'>
                <TextField source='title' label='Course' />
            </ReferenceField>
            <TextField source="payment"/>

            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const AgreementShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <ReferenceField reference='users' source='userId'>
                <FunctionField
                    label='Name'
                    render={(record) =>
                        `${record.name} ${record.middleName} ${record.surname}`
                    }
                />
            </ReferenceField>
            <ReferenceField reference='courses' source='courseId'>
                <TextField source='title' label='Club' />
            </ReferenceField>
            <TextField source="payment"/>
        </SimpleShowLayout>
    </Show>
);

export const AgreementEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />

            <ReferenceInput label="Club" source="clubId" reference="clubs">
                <SelectInput optionText="title" />
            </ReferenceInput>

            <ReferenceInput label="Course" source="courseId" reference="courses">
                <SelectInput optionText="title" />
            </ReferenceInput>

            <TextInput source='payment' />
        </SimpleForm>
    </Edit>
);

export const AgreementCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect='list'>
            <ReferenceInput label="user" source="userId" reference="users">
                <SelectInput optionText={record => `${record.name} ${record.middleName} ${record.surname}`} />
            </ReferenceInput>

            <ReferenceInput label="Course" source="courseId" reference="courses">
                <SelectInput optionText="title" />
            </ReferenceInput>

            <TextInput source='payment' />
        </SimpleForm>
    </Create>
);
