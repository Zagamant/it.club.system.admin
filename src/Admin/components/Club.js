import React from 'react';
import {
    ChipField,
    Create,
    Datagrid,
    DeleteButton,
    Edit,
    EditButton,
    List,
    NumberField,
    SelectInput,
    Show,
    SimpleForm,
    SingleFieldList,
    Tab,
    TabbedShowLayout,
    TextField,
    TextInput,
    ArrayField,
    TabbedForm,
    NumberInput,
    FormTab
} from 'react-admin';

export const ClubList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="status" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ClubShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="status" />
            </Tab>
            <Tab label="permissions">
                <ArrayField
                    source="permissions"
                >
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="name" />
                    </Datagrid>
                </ArrayField>
            </Tab>
            <Tab label="rooms">
                <ArrayField
                    source="rooms"
                >
                    <Datagrid>
                        <TextField source="id" />
                        <NumberField source="capacity" />
                        <TextField source="RoomNumber" />
                        <TextField source="About" />
                        <SelectInput
                            source="Status"
                            choices={[
                                { id: 'pendingStart', name: 'Pending start' },
                                { id: 'open', name: 'Open' },
                                { id: 'closed', name: 'Closed' },
                            ]}
                        />
                        <EditButton />
                    </Datagrid>
                </ArrayField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const ClubEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab  label="Summary">
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput source="status" />
            </FormTab >
            <FormTab  label="permissions">
                <ArrayField
                    source="permissions"
                >
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="name" />
                    </Datagrid>
                </ArrayField>
            </FormTab>
            <FormTab label="rooms">
                <ArrayField
                    source="rooms"
                >
                    <Datagrid>
                        <TextInput source="id" />
                        <NumberInput source="capacity" />
                        <TextInput source="RoomNumber" />
                        <TextInput source="About" />
                        <TextInput source="Status" />
                    </Datagrid>
                </ArrayField>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const ClubCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <SelectInput
                source="Status"
                choices={[
                    { id: 'pendingStart', name: 'Pending start' },
                    { id: 'open', name: 'Open' },
                    { id: 'closed', name: 'Closed' },
                ]}
            />
        </SimpleForm>
    </Create>
);
