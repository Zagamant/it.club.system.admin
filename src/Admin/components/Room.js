import React from 'react';
import {
    ArrayField,
    Create,
    Datagrid,
    Edit,
    EditButton,
    FormTab,
    List,
    NumberField,
    NumberInput,
    ReferenceArrayInput,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    Show,
    SimpleForm,
    Tab,
    TabbedForm,
    TabbedShowLayout,
    TextField,
    TextInput,
} from 'react-admin';

export const RoomList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="club" reference="clubs">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="roomNumber" />
            <NumberField source="capacity" />
            <TextField source="about" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

export const RoomShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id" />
                <TextField source="RoomNumber" />
                <TextField source="status" />
            </Tab>
            <Tab label="About">
                <TextField source="About" />
            </Tab>
            <Tab label="Groups">
                <ArrayField source="Groups">
                    <Datagrid></Datagrid>
                </ArrayField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const RoomEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Summary">
                <TextInput disabled source="id" />
                <TextInput source="roomNumber" />
                <NumberInput source="capacity" />
                <TextInput source="about" />
                <TextInput source="status" />
            </FormTab>
            <FormTab label="Groups">
                <ReferenceArrayInput
                    label="Club"
                    source="Groups"
                    reference="Groups"
                >
                    <SelectInput optionText="title" />
                </ReferenceArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const RoomCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="RoomNumber" />
            <NumberInput source="Capacity" />
            <TextInput source="About" />
            <ReferenceInput label="Club" source="ClubId" reference="clubs">
                <SelectInput optionText="Title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
