import React from 'react';
import {
    List,
    Show,
    Edit,
    Create,
    EditButton,
    TabbedShowLayout,
    FormTab,
    SimpleForm,
    TabbedForm,
    Tab,
    Datagrid,
    ArrayField,
    BooleanField,
    DateField,
    EmailField,
    ImageField,
    RichTextField,
    SelectField,
    TextField,
    UrlField,
    NumberInput,
    ReferenceArrayInput,
    ReferenceInput,
    SelectInput,
    TextInput
} from 'react-admin';

const GroupStatuses = [
    { id: 'Recruitment', name: 'Recruitment' },
    { id: 'PendingStart', name: 'Pending start' },
    { id: 'InProgress', name: 'In progress' },
    { id: 'Canceled', name: 'Canceled' },
];

export const GroupList = (props) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="lessonsPerWeek" />
            <UrlField source="onlineConversationLink" />
            <TextField source="messenger" />
            <DateField source="startDate" />
            <DateField source="endDate" />
            <DateField source="capacity" />
            <SelectField source="status" choices={GroupStatuses} />
            <EditButton />
        </Datagrid>
    </List>
);

export const GroupShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id" />
                <TextField source="lessonsPerWeek" />
                <UrlField source="onlineConversationLink" />
                <TextField source="messenger" />
                <DateField source="startDate" />
                <DateField source="endDate" />
                <DateField source="capacity" />
            </Tab>
            <Tab label="Users">
                <ArrayField source="users">
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="middleName" />
                        <TextField source="surname" />
                        <DateField
                            source="birthDay"
                            options={{
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }}
                        />
                        <TextField source="address" />
                        <RichTextField  source="additionalInfo" />
                        <TextField source="userName" />
                        <EmailField source="email" />
                        <TextField source="phoneNumber" />
                        <BooleanField source="lockoutEnabled" />
                        <ImageField source="photos" />
                        <EditButton />
                    </Datagrid>
                </ArrayField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const GroupEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Summary">
                <TextInput disabled source="id" />
                <TextInput source="roomNumber" />
                <NumberInput source="capacity" />
                <TextInput source="about" />
                <SelectInput
                    source="status"
                    choices={GroupStatuses}
                    optionText={(choice) => `${choice.name}`}
                />
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

export const GroupCreate = (props) => (
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
                choices={GroupStatuses}
                optionText={(choice) => `${choice.name}`}
                defaultValue={GroupStatuses[0].id}
            />
        </SimpleForm>
    </Create>
);
