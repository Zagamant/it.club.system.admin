import React from 'react';
import {
    ArrayField,
    AutocompleteInput,
    Create,
    Datagrid,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    NumberField,
    NumberInput,
    ReferenceField,
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

const RoomFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Room number" source="number" />
        <ReferenceInput
            label="Club"
            source="clubId"
            reference="clubs"
        >
            <AutocompleteInput optionText="title" />
        </ReferenceInput>
    </Filter>
);

export const RoomList = (props) => (
    <List {...props} filters={<RoomFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField reference="clubs" source="clubId">
                <TextField source="title" label="Club" />
            </ReferenceField>
            <TextField source="number" />
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
                <ReferenceField reference="clubs" source="clubId">
                    <TextField source="title" label="Club" />
                </ReferenceField>
                <TextField source="number" />
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
                <TextInput source="number" />
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
            <ReferenceInput label="Club" source="clubId" reference="clubs">
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
