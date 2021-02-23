import React from 'react';
import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    FormDataConsumer,
    FormTab,
    FunctionField,
    List,
    ReferenceArrayField,
    ReferenceArrayInput,
    ReferenceField,
    ReferenceInput,
    SelectArrayInput,
    SelectInput,
    Show,
    SimpleForm,
    Tab,
    TabbedForm,
    TabbedShowLayout,
    TextField,
    TextInput,
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
            <TextField source="title" />
            <ReferenceField reference="courses" source="courseId">
                <TextField source="title" label="Course" />
            </ReferenceField>
            {/*<TextField source="course.id" />*/}
            <ReferenceField label="Club" reference="rooms" source="roomId">
                <ReferenceField reference="clubs" source="clubId">
                    <TextField source="title" />
                </ReferenceField>
            </ReferenceField>

            <ReferenceField reference="rooms" source="roomId">
                <TextField source="number" label="Room Number" />
            </ReferenceField>

            {/*<TextField source="room.number" />*/}
            <TextField source="lessonsPerWeek" />
            <TextField source="onlineConversationLink" />
            <TextField source="messenger" />
            <DateField source="startDate" />
            <DateField source="endDate" />
            <TextField source="capacity" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

export const GroupShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id" />
                <TextField source="title" />
                <ReferenceField reference="courses" source="courseId">
                    <TextField source="title" label="Course" />
                </ReferenceField>
                <ReferenceField reference="rooms" source="roomId">
                    <TextField source="number" label="Room Number" />
                </ReferenceField>
                <TextField source="lessonsPerWeek" />
                <TextField source="onlineConversationLink" />
                <TextField source="messenger" />
                <DateField source="startDate" />
                <DateField source="endDate" />
                <TextField source="capacity" />
            </Tab>
            <Tab label="Users">
                <ReferenceArrayField reference="users" source="usersIds">
                    <Datagrid>
                        {/*<TextField source="Name"/>*/}
                        <FunctionField
                            label="Name"
                            render={(record) =>
                                `${record.name ?? ''} ${
                                    record.middleName ?? ''
                                } ${record.surname ?? ''}`
                            }
                        />
                        <TextField source="about"/>
                    </Datagrid>
                </ReferenceArrayField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export const GroupEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Summary">
                <TextInput disabled source="id" />
                <TextInput source="title" />

                <FormDataConsumer>
                    {({ formData, ...rest }) =>
                        formData.roomId && (
                            <ReferenceInput
                                label="Club"
                                source="clubId"
                                reference="clubs"
                            >
                                <SelectInput optionText="title" />
                            </ReferenceInput>
                        )
                    }
                </FormDataConsumer>

                <FormDataConsumer>
                    {({ formData, ...rest }) =>
                        formData.clubId && (
                            <ReferenceInput
                                filter={{ clubId: formData.clubId }}
                                label="Room"
                                source="roomId"
                                reference="rooms"
                            >
                                <SelectInput
                                    optionText={(record) => `${record.number}`}
                                />
                            </ReferenceInput>
                        )
                    }
                </FormDataConsumer>

                <ReferenceInput
                    label="Course"
                    source="courseId"
                    reference="courses"
                >
                    <SelectInput optionText="title" />
                </ReferenceInput>

                <TextInput source="lessonsPerWeek" />
                <TextInput source="onlineConversationLink" />
                <TextInput source="messenger" />
                <DateInput source="startDate" />
                <DateInput source="endDate" />
                <TextInput source="capacity" />
                <SelectInput
                    source="status"
                    choices={GroupStatuses}
                    optionText={(choice) => `${choice.name}`}
                />
            </FormTab>
            <FormTab label="Users">
                <ReferenceArrayInput source="usersIds" reference="users">
                    <SelectArrayInput
                        label="Name"
                        optionText={(record) =>
                            `${record.name ?? ''} ${record.middleName ?? ''} ${
                                record.surname ?? ''
                            }`
                        }
                    />
                </ReferenceArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const GroupCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="title" />
            <ReferenceInput
                label="Course"
                source="courseId"
                reference="courses"
            >
                <SelectInput optionText="title" />
            </ReferenceInput>

            <ReferenceInput label="Club" source="clubId" reference="clubs">
                <SelectInput optionText="title" />
            </ReferenceInput>

            <FormDataConsumer>
                {({ formData, ...rest }) =>
                    formData.clubId && (
                        <ReferenceInput
                            filter={{ clubId: formData.clubId }}
                            label="Room"
                            source="roomId"
                            reference="rooms"
                        >
                            <SelectInput
                                optionText={(record) => `${record.number}`}
                            />
                        </ReferenceInput>
                    )
                }
            </FormDataConsumer>

            <TextInput source="lessonsPerWeek" />
            <TextInput source="onlineConversationLink" />
            <TextInput source="messenger" />
            <DateInput source="startDate" />
            <DateInput source="endDate" />
            <TextInput source="capacity" />
            <SelectInput
                source="status"
                choices={GroupStatuses}
                optionText={(choice) => `${choice.name}`}
            />
        </SimpleForm>
    </Create>
);
