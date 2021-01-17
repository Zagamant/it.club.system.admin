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
    NumberInput, ReferenceArrayInput,
    SelectInput,
    Show,
    SimpleForm,
    SingleFieldList,
    Tab,
    TabbedForm,
    TabbedShowLayout,
    TextField,
    TextInput,
    UrlField,
    SelectArrayInput
} from 'react-admin';

const ClubStatuses = [
    { id: 'pendingStart', name: 'Pending start' },
    { id: 'open', name: 'Open' },
    { id: 'closed', name: 'Closed' },
];

export const CourseList = (props) => (
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

export const CourseShow = (props) => (
    <Show {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="about"/>
            <UrlField source="manualLink"/>
        </Datagrid>
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
            <FormTab label="Groups">
                <ReferenceArrayInput source="groups">
                    <Datagrid>
                        <TextInput source="id" />
                        <NumberInput source="LessonsPerWeek" />
                        <TextInput source="RoomNumber" />
                        <TextInput source="About" />
                        <SelectInput
                            source="status"
                            choices={ClubStatuses}
                            optionText={(choice) => `${choice.name}`}
                        />
                    </Datagrid>
                </ReferenceArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CourseCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="title" />
            <SelectInput
                source="status"
                choices={ClubStatuses}
                optionText={(choice) => `${choice.name}`}
                defaultValue={ClubStatuses[0].id}
            />

        </SimpleForm>
    </Create>
);
