import React, {useEffect, useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import TLayout from "../_layout/Layout";
import './styles.scss';
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {useParams, useHistory} from 'react-router-dom';
import Loader from "../../../components/loader";
import {CourseEntity} from "../../../core/domain/entities/CourseEntity";
import {GetCourseByAuthorQuery} from "../../../core/domain/queries/CourseQueries";
import {CoursesActions} from "../../../core/redux/actions/courses-actions";
import {UpdateCourseInfoCommand} from "../../../core/domain/commands/CourseCommands";
import {IRootState} from "../../../core/redux/reducers";

function CourseEditInfoPage(props: IProps) {
    const {id} = useParams();
    const history = useHistory();
    const [course, setCourse] = useState<CourseEntity>();

    useEffect(() => {
        if(props.course == null) return;
        setCourse(props.course);

    }, [props.course])
    useEffect(() => {
        if(id == null) history.push(`/teach/courses`);
        if(course === undefined || course === null) {
            props.getSingleCourse({courseId: Number.parseInt(id)})
        }
    }, [])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const validateMessages = {
        required: '${label} не может быть пустым'
    };

    function onFinish() {
        console.log(course as UpdateCourseInfoCommand);
        props.updateCourseInfo(course as UpdateCourseInfoCommand);
    }

    if(course == null) return <Loader />
    return <TLayout>
        <a.PageHeader
            title={props.course.title + ' (Режим редактирования)'}
            style={{padding: 0}}
            onBack={() => history.push(`/teach/course/${props.course.id}`)}
        />

        <a.Form onFinish={() => onFinish()}
                name="course-edit-info"
                size="large"
                {...layout}
                labelAlign="left"
                validateMessages={validateMessages}
        >
            <a.Form.Item label="Фотография"
            >
                <a.Avatar shape="square" size={128} src="https://via.placeholder.com/250x250"/>
                <a.Button type="primary">Изменить</a.Button>
            </a.Form.Item>

            <a.Form.Item initialValue={course.title}
                         name="title"
                         label="Название курса"
                         rules={[{ required: true }]}
            >
                <a.Input onChange={(e) =>
                    setCourse({...course, title: e.target.value})} />
            </a.Form.Item>

            <a.Form.Item initialValue={course.description}
                         name="description"
                         label="Описание курса"
            >
                <a.Input.TextArea rows={6} onChange={(e) =>
                    setCourse({...course, description: e.target.value})}/>
            </a.Form.Item>

            <a.Form.Item initialValue={course.shortDescription}
                         name="descriptionShort"
                         label="Краткое о курсе"
            >
                <a.Input.TextArea rows={5} onChange={(e) =>
                    setCourse({...course, shortDescription: e.target.value})}/>
            </a.Form.Item>

            <a.Form.Item initialValue={course.targetAudience}
                         name="targetAudience"
                         label="Целевая аудитория"
            >
                <a.Input.TextArea rows={5} onChange={(e) =>
                    setCourse({...course, targetAudience: e.target.value})}/>
            </a.Form.Item>

            <a.Form.Item initialValue={course.charge}
                         name="time"
                         label="Нагрузка"
            >
                <a.Input.TextArea rows={2} onChange={(e) =>
                    setCourse({...course, charge: e.target.value})}/>
            </a.Form.Item>

            <a.Form.Item label="Авторы курса"
            >
                <a.Row gutter={[8, 8]} justify="space-between">
                    <a.Col span={14}>
                        <a.Input />
                        <a.Button type="primary" block style={{marginTop: '.75rem'}}>Добавить</a.Button>
                    </a.Col>

                    <a.Col span={10}>
                        <ul className="teach__course-edit__authors-list">
                            {course.authors != null && course.authors.map((author, index) => {
                                return <li className="teach__course-edit__authors-list__author">
                                    <a.Avatar size={32} shape="square" icon={<i.UserOutlined />} />
                                    <h4>{author.firstName}</h4>
                                    <i.MinusCircleOutlined />
                                </li>
                            })}
                        </ul>
                    </a.Col>
                </a.Row>
            </a.Form.Item>

            <a.Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                <a.Button type='primary' htmlType='submit' style={{float: 'right'}}>
                    Сохранить
                </a.Button>
            </a.Form.Item>
        </a.Form>
    </TLayout>
}

interface IProps {
    course: CourseEntity;
    getSingleCourse(query: GetCourseByAuthorQuery): void;
    updateCourseInfo(command: UpdateCourseInfoCommand): void;
}

const mapStateToProps = (state: IRootState) => ({
    course: state.course
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSingleCourse: (query: GetCourseByAuthorQuery) => dispatch(CoursesActions.getSingleCourseByAuthor(query)),
    updateCourseInfo: (command: UpdateCourseInfoCommand) => dispatch(CoursesActions.updateCourseInfo(command))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditInfoPage)
