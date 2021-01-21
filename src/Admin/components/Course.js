import React from 'react';
import {
    Create,
    Datagrid,
    DeleteButton,
    Edit,
    EditButton,
    FormTab,
    TabbedShowLayout,
    List,
    Tab,
    NumberInput,
    ReferenceManyField,
    SelectInput,
    Show,
    SimpleForm,
    TabbedForm,
    TextField,
    TextInput,
    UrlField, DateField, SelectField,
} from 'react-admin';

export const CourseList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="about" />
            <UrlField source="manualLink" optionText="Link" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CourseShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="about" />
                <UrlField source="manualLink" optionText="Link" />
            </Tab>
            <Tab label="Groups">
                <ReferenceManyField source="groups" target="courseId">
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="title" />
                        <TextField source="lessonsPerWeek" />
                        <UrlField source="onlineConversationLink" />
                        <TextField source="messenger" />
                        <DateField source="startDate" />
                        <DateField source="endDate" />
                        <DateField source="capacity" />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const CourseEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Summary">
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput source="about" />
                <TextInput source="manualLink" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CourseCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="title" />
            <TextInput source="about" />
            <TextInput source="manualLink" />
        </SimpleForm>
    </Create>
);
