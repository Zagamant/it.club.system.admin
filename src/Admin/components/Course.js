import React from 'react';
import {
    Create,
    Datagrid,
    DateField,
    DeleteButton,
    Edit,
    EditButton,
    FormTab,
    List,
    ReferenceManyField,
    Show,
    SimpleForm,
    Tab,
    TabbedForm,
    TabbedShowLayout,
    TextField,
    TextInput,
    UrlField,
} from 'react-admin';

export const CourseList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="about" />
            <TextField source="manualLink"/>
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
                <UrlField source="manualLink"/>
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
