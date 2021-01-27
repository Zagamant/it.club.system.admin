import React from 'react';
import {
    ArrayField,
    ChipField,
    Create,
    Datagrid,
    DeleteButton,
    Edit,
    EditButton,
    FormTab,
    List,
    NumberField,
    SelectInput,
    Show,
    SimpleForm,
    SingleFieldList,
    Tab,
    TabbedForm,
    TabbedShowLayout,
    TextField,
    TextInput,
} from 'react-admin';

const ClubStatuses = [
    { id: 'PendingStart', name: 'Pending start' },
    { id: 'Open', name: 'Open' },
    { id: 'Closed', name: 'Closed' },
];

export const ClubList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="status" />
            <ArrayField source="rooms">
                <SingleFieldList>
                    <ChipField source="roomNumber" />
                </SingleFieldList>
            </ArrayField>
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
                <ArrayField source="permissions">
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="name" />
                    </Datagrid>
                </ArrayField>
            </Tab>
            <Tab label="rooms">
                <ArrayField source="rooms">
                    <Datagrid>
                        <TextField source="id" />
                        <NumberField source="capacity" />
                        <TextField source="roomNumber" />
                        <TextField source="about" />
                        <TextField source="status" />
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
            <FormTab label="Summary">
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput source="city" />
                <TextInput source="country" />
                <TextInput source="addressLine" />

                <SelectInput
                    source="status"
                    choices={ClubStatuses}
                    optionText={(choice) => `${choice.name}`}
                />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const ClubCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="title" />
            <TextInput source="city" />
            <TextInput source="country" />
            <TextInput source="addressLine" />
            <SelectInput
                source="status"
                choices={ClubStatuses}
                optionText={(choice) => `${choice.name}`}
                defaultValue={ClubStatuses[0].id}
            />

        </SimpleForm>
    </Create>
);
