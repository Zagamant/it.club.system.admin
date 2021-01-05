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
    ReferenceManyField,
    SelectInput,
    Show,
    SimpleForm,
    SingleFieldList,
    Tab,
    TabbedShowLayout,
    TextField,
    TextInput,
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
                <ReferenceManyField
                    reference="permissions"
                    target="clubId"
                    addLabel={false}
                >
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceManyField>
            </Tab>
            <Tab label="rooms">
                <ReferenceManyField
                    reference="rooms"
                    target="clubId"
                    addLabel={false}
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
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const ClubEdit = (props) => (
    <Edit {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextInput disabled source="id" />
                <TextField source="title" />
                <TextField source="status" />
            </Tab>
            <Tab label="permissions">
                <ReferenceManyField
                    reference="permissions"
                    target="clubId"
                    addLabel={false}
                >
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceManyField>
            </Tab>
            <Tab label="rooms">
                <ReferenceManyField
                    reference="rooms"
                    target="clubId"
                    addLabel={false}
                >
                    <Datagrid>
                        <TextField source="id" />
                        <NumberField source="capacity" />
                        <TextField source="RoomNumber" />
                        <TextField source="About" />
                        <TextField source="Status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
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
