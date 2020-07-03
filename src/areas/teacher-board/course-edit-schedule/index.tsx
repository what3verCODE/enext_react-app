import React, {useEffect, useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import TLayout from "../_layout/Layout";
import {Dispatch} from 'redux';
import {connect} from "react-redux";
import './styles.scss';
import {useParams, useHistory} from 'react-router-dom';
import Loader from "../../../components/loader";
import {GetCourseByAuthorQuery} from "../../../core/domain/queries/CourseQueries";
import {UpdateCourseScheduleCommand} from "../../../core/domain/commands/CourseCommands";
import {CoursesActions} from "../../../core/redux/actions/courses-actions";
import {IRootState} from "../../../core/redux/reducers";
import {CourseEntity} from "../../../core/domain/entities/CourseEntity";
import {ModuleEntity} from "../../../core/domain/entities/ModuleEntity";
import {LessonEntity} from "../../../core/domain/entities/LessonEntity";

const initialLesson: LessonEntity = {
    title: 'Новый урок', manualChecking: false
}
const initialModule: ModuleEntity = {
    title: 'Новый модуль', lessons: [ { title: 'Новый урок', manualChecking: false } ]
}



function CourseEditSchedulePage(props: IProps) {
    const { id } = useParams();
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

    function onFinish() {
        console.log(course as UpdateCourseScheduleCommand);
        props.updateCourseSchedule(course as UpdateCourseScheduleCommand);
    }
    function addModule(module_text: string) {
        const _course = course;
        if(_course === undefined) return;
        _course.modules.push({
            title: "Новый модуль",
            lessons: [
                { title: "Новый урок", manualChecking: false}
            ]
        })
        setCourse({..._course})
    }
    function addLesson(module_index: number, lesson_text: string) {
        const _course = course;
        if(_course == null) return;
        _course.modules[module_index].lessons.push({
            title: "Новый урок",
            manualChecking: false
        });
        setCourse({..._course})
    }
    function editModuleTitle(module_index: number, text: string) {
        const _course = course;
        if(_course === undefined) return;
        const _modules = _course.modules;
        if(_modules === undefined) return;
        _modules[module_index].title = text;

        setCourse({..._course, modules: [..._modules]});
    }
    function editLessonTitle(module_index: number, lesson_index: number, text: string) {
        const _course = course;
        if(_course === undefined) return;
        const _modules = _course.modules;
        if(_modules === undefined) return;
        const _lessons = _modules[module_index].lessons;
        if(_lessons === undefined) return;
        _lessons[lesson_index].title = text;

        _modules[module_index].lessons = [..._lessons];

        setCourse({..._course, modules: [..._modules]});
    }

    if(course == null) return <Loader />

    return <TLayout>
        <a.PageHeader
            title={props.course.title + ' (Режим редактирования)'}
            style={{padding: 0, marginBottom: '1.5rem'}}
            onBack={() => history.push(`/teach/course/${props.course.id}`)}
        />

        <a.Form onFinish={() => onFinish()} name="course-edit" size="large">
            {course.modules != null && course.modules.map((module, module_index) => {
                return <a.Row gutter={[8, 8]} key={'module:title:' + module_index}>
                    <a.Col span={24}
                           className="custom-form-item__wrapper"
                           style={{padding: '8px 16px 12px 16px'}}
                    >
                        <div className="custom-form-item">
                            <a.Form.Item initialValue={module.title}
                                         key={'module:' + module_index + ':title'}
                                         name={'module:' + module_index + ':title'}
                                         rules={[{required: true, message: 'Название модуля не может быть пустым'}]}
                                         label={"Модуль " + (module_index + 1)}
                                         style={{marginBottom: 0}}
                                         className="custom-form-item__module"
                            >
                                <a.Input onChange={(e) => editModuleTitle(module_index, e.target.value)} />
                            </a.Form.Item>
                            <div className="custom-form-item__actions">
                                {course.modules.length > 1 ?
                                    <a.Button style={{marginLeft: '.5rem'}} icon={<i.DeleteOutlined />}/>
                                    : null
                                }
                            </div>
                        </div>
                    </a.Col>
                    {module.lessons != null && module.lessons.map((lesson,lesson_index) => {
                        return <a.Col span={18} offset={6}
                                      key={'module:' + module_index + 'lesson:title' + lesson_index}
                                      className="custom-form-item__wrapper"
                                      style={{padding: '8px 16px 12px 16px'}}
                        >
                            <div className="custom-form-item">
                                <a.Form.Item initialValue={lesson.title}
                                             key={'module:' + module_index + 'lesson:title' + lesson_index}
                                             name={'module:' + module_index + 'lesson:title:' + lesson_index}
                                             rules={[{required: true, message: 'Название урока не может быть пустым'}]}
                                             label={'Урок ' + (module_index + 1) + '.' + (lesson_index + 1)}
                                             style={{marginBottom: 0}}
                                             className="custom-form-item__lesson"
                                >
                                    <a.Input onChange={(e) => editLessonTitle(module_index, lesson_index, e.target.value)}/>
                                </a.Form.Item>
                                <div className="custom-form-item__actions">
                                    <a.Button key={"edit:" + module_index}
                                              disabled={lesson.id === undefined}
                                              href={`/teach/lesson/${lesson.id}/edit`}
                                              style={{marginLeft: '.5rem'}}
                                              icon={<i.EditOutlined />}
                                    />
                                    {module.lessons.length > 1 ?
                                        <a.Button key={"delete:" + module_index}
                                                  style={{marginLeft: '.5rem'}}
                                                  icon={<i.DeleteOutlined />}
                                        />
                                        : null
                                    }
                                </div>
                            </div>
                        </a.Col>
                    })}
                    <a.Col span={18} offset={6}
                           className="custom-form-item__wrapper"
                           style={{padding: '8px 16px 12px 16px'}}
                    >
                        <div className="custom-form-item">
                            <a.Form.Item style={{marginBottom: 0, width: '100%'}}
                                         key={module_index}
                            >
                                <a.Button key={module_index}
                                          type="primary"
                                          block
                                          onClick={() => addLesson(module_index, 'Новый урок')}
                                >
                                    Добавить урок
                                </a.Button>
                            </a.Form.Item>
                        </div>
                    </a.Col>
                </a.Row>
            })}
            {/*<AddItemForm buttonValue="Добавить модуль" errorMessage="Название модуля не может быть пустым" onClick={(text) => addModule(text)} formKey='module:add'/>*/}
            <div className="custom-form-item__wrapper" style={{marginLeft: '-4px', marginRight: '-4px'}}>
                <div className="custom-form-item">
                    <a.Form.Item style={{marginBottom: 0, width: '100%'}}>
                        <a.Button type="primary" block onClick={() => addModule('Новый модуль')}>Добавить модуль</a.Button>
                    </a.Form.Item>
                </div>
            </div>
            <a.Form.Item style={{paddingTop: '12px', float: 'right'}}>
                <a.Button htmlType="submit">
                    Сохранить изменения
                </a.Button>
            </a.Form.Item>
        </a.Form>
    </TLayout>
}

interface IProps {
    course: CourseEntity;
    getSingleCourse(query: GetCourseByAuthorQuery): void;
    updateCourseSchedule(command: UpdateCourseScheduleCommand):void;
}

const mapStateToProps = (state: IRootState) => ({
    course: state.course
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSingleCourse:(query: GetCourseByAuthorQuery) => dispatch(CoursesActions.getSingleCourseByAuthor(query)),
    updateCourseSchedule:(command: UpdateCourseScheduleCommand) => dispatch(CoursesActions.updateCourseSchedule(command))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditSchedulePage)
