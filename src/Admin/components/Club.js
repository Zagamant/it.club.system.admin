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
    Tab,
    TabbedShowLayout,
    TextField,
    TextInput,
    ArrayField,
    TabbedForm,
    NumberInput,
    FormTab,
    ReferenceManyField,
    SingleFieldList
} from 'react-admin';

export const ClubList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="status" />
            <ReferenceManyField label="Rooms" reference="rooms" target="id">
                <SingleFieldList>
                    <ChipField source="RoomNumber" />
                </SingleFieldList>
            </ReferenceManyField>
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
                        <TextField source="Status" />
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
            {/*<FormTab  label="permissions">*/}
            {/*    <ArrayInput*/}
            {/*        source="permissions"*/}
            {/*    >*/}
            {/*        <SimpleFormIterator>*/}
            {/*            <TextField source="id" />*/}
            {/*            <TextField source="name" />*/}
            {/*        </SimpleFormIterator>*/}
            {/*    </ArrayInput>*/}
            {/*</FormTab>*/}
            <FormTab label="rooms">
                <ArrayField
                    source="rooms"
                >
                    <Datagrid>
                        <TextInput source="id" />
                        <NumberInput source="capacity" />
                        <TextInput source="RoomNumber" />
                        <TextInput source="About" />

                        <SelectInput
                            source="Status"
                            choices={[
                                { id: 'pendingStart', name: 'Pending start' },
                                { id: 'open', name: 'Open' },
                                { id: 'closed', name: 'Closed' },
                            ]}
                        />
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
