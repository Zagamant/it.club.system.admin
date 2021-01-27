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
    ReferenceInput,
    SelectField,
    SelectInput,
    Show,
    SimpleForm,
    Tab,
    TabbedForm,
    TabbedShowLayout,
    TextField,
    TextInput,
} from 'react-admin';

const RoomStatuses = [
    { id: 'PendingStart', name: 'Pending start' },
    { id: 'Open', name: 'Open' },
    { id: 'Closed', name: 'Closed' },
];

export const RoomList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="club.title" label="Club" />
            <TextField source="roomNumber" />
            <NumberField source="capacity" />
            <TextField source="about" />
            <SelectField source="status" choices={RoomStatuses} />
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
                <SelectInput
                    source="status"
                    choices={RoomStatuses}
                    optionText={(choice) => `${choice.name}`}
                />
            </FormTab>
            {/*<FormTab label="Groups">*/}
            {/*    <ReferenceArrayInput*/}
            {/*        label="Groups"*/}
            {/*        source="groups"*/}
            {/*        reference="groups"*/}
            {/*    >*/}
            {/*        <SelectInput optionText="id" />*/}
            {/*    </ReferenceArrayInput>*/}
            {/*</FormTab>*/}
        </TabbedForm>
    </Edit>
);

export const RoomCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="RoomNumber" />
            <NumberInput source="Capacity" />
            <TextInput source="About" />
            <ReferenceInput label="Club" source="ClubId" reference="clubs">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <SelectInput
                source="status"
                choices={RoomStatuses}
                optionText={(choice) => `${choice.name}`}
                defaultValue={RoomStatuses[0].id}
            />
        </SimpleForm>
    </Create>
);
