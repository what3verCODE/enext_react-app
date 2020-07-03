import React, {useState} from 'react';
import * as a from 'antd';
import {Dispatch} from 'redux';
import {connect} from "react-redux";
import {CreateCourseCommand} from "../../../../core/domain/commands/CourseCommands";
import {CoursesActions} from "../../../../core/redux/actions/courses-actions";
import {IRootState} from "../../../../core/redux/reducers";

interface IProps {
    visible: boolean;
    onCancel(): void;
    createCourse(command: CreateCourseCommand): void;
}

function CreateCourseModal(props: IProps) {
    const [createCourseForm] = a.Form.useForm();
    const [loading, setLoading] = useState(false);

    function onOk() {
        createCourseForm
            .validateFields()
            .then((values) => {
                setLoading(true);
                props.createCourse(values as CreateCourseCommand);
            })
            .catch(info => {
                console.log('Validation error: ', info)
            })
    }

    function onCancel() {
        props.onCancel();
    }

    return <a.Modal
        title="Создать курс"
        centered
        visible={props.visible}
        onOk={() => onOk()}
        onCancel={() => props.onCancel()}
        footer={[
            <a.Button key="cancel" danger onClick={() => onCancel()}>
                Отмена
            </a.Button>,

            <a.Button loading={loading} key="submit" type="primary" onClick={() => onOk()}>
                Создать
            </a.Button>
        ]}
    >
        <a.Form
            form={createCourseForm}
            layout="vertical"
            name="create_course_form"
            size="large"
        >
            <a.Form.Item name="title"
                         label="Название курса"
                         rules={[{required: true, message: 'Название курса не может быть пустым'}]}
            >
                <a.Input />
            </a.Form.Item>
        </a.Form>
    </a.Modal>
}

const mapStateToProps = (state: IRootState) => ({
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    createCourse: (command: CreateCourseCommand) =>
        dispatch(CoursesActions.createCourse(command))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseModal)
