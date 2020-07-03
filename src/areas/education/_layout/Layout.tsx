import React, {ReactNode, useEffect, useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import ELayoutSider from "./Sider";
import ELayoutHeader from "./Header";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import ContentPage from "../content";
import Loader from "../../../components/loader";
import {useHistory, useParams} from "react-router-dom";
import {GetCourseQuery} from "../../../core/domain/queries/CourseQueries";
import {CoursesActions} from "../../../core/redux/actions/courses-actions";
import {IRootState} from "../../../core/redux/reducers";
import {ValidateQuizCommand} from "../../../core/domain/commands/QuizCommands";
import {QuizzesActions} from "../../../core/redux/actions/quizzes-actions";
import {GetLessonWithoutAnswersQuery} from "../../../core/domain/queries/LessonQueries";
import {LessonsActions} from "../../../core/redux/actions/lessons-actions";
import {LessonEntity} from "../../../core/domain/entities/LessonEntity";
import {CourseEntity} from "../../../core/domain/entities/CourseEntity";
import {CreateCommentCommand} from "../../../core/domain/commands/CommentCommands";
import {CommentsActions} from "../../../core/redux/actions/comments-actions";


function ELayout(props: IProps) {
    const {courseId, lessonId} = useParams();
    const history = useHistory();

    const [mappedLessons, setMappedLessons] = useState<LessonsMap[]>()

    useEffect(() => {
        if(courseId == null) history.push(`/`)
        props.getSingleCourse({courseId: Number.parseInt(courseId)})
    }, [courseId])

    useEffect(() => {
        if(props.course == null) return;
        mapLessons();
    }, [props.course])

    useEffect(() => {
        if(mappedLessons == null || mappedLessons.length === 0) return;
        const current_lesson = mappedLessons.find(x => x.id === Number.parseInt(lessonId));
        if(current_lesson == null) {
            console.error('not impl user progress navigation')
        } else {
            props.getSingleLesson({lessonId: current_lesson.id})
        }
    }, [mappedLessons])

    useEffect(() => {
        if(props.lesson == null) return;
        props.getSingleLesson({lessonId: lessonId})
    }, [lessonId])

    const [collapsedSidebar, setCollapsedSidebar] = useState(true);
    const { Header, Sider, Content } = a.Layout;
    const { Title } = a.Typography;

    function mapLessons() {
        let map: LessonsMap[] = [];
        props.course.modules?.map(module =>{
            module.lessons?.map(lesson => {
                map.push({
                    id: lesson.id!
                });
            })
        })

        setMappedLessons([...map]);
    }
    function getNextLesson() {
        const current_index = mappedLessons?.findIndex(x => x.id === Number.parseInt(lessonId));
        if(current_index !== undefined) {
            if(current_index === mappedLessons?.length! - 1) {
                return undefined;
            }
            else return mappedLessons![current_index + 1].id;
        }
    }

    if(props.course == null || props.lesson == null || mappedLessons == null) return <Loader />
    return <a.Layout>
        <Sider
            onCollapse={((collapsed, type) => {
                setCollapsedSidebar(!collapsedSidebar);
            })}
            collapsedWidth={80}
            collapsed={collapsedSidebar}
            collapsible
            width={256}
            style={{
                overflowX: 'hidden',
                overflowY: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0
            }}>

            <Title level={2} style={{height: '48px', textAlign: 'center', marginBottom: '0', color: '#cecece', lineHeight: '48px'}}>
                {collapsedSidebar ? 'E' : 'ENEXT'}
            </Title>

            <ELayoutSider courseId={props.course.id!}
                          modules={props.course.modules!}
            />
        </Sider>

        <a.Layout style={{marginLeft: (collapsedSidebar ? '80px' : '256px'), transition: 'all .2s'}}>
            <Header style={{height: '48px', padding: '0 1rem'}}>
                <ELayoutHeader />

            </Header>

            <a.Drawer
                placement={"right"}
                visible={false}
                closable={false}
            >
                https://github.com/Rupinderthind/Ant_design_navbar
                <ELayoutHeader />
            </a.Drawer>

            <a.Layout>
                <Content style={{padding: 24, margin: 0, minHeight: 280, backgroundColor: '#fff'}}>
                    <ContentPage nextLessonId={getNextLesson()}
                                 lesson={props.lesson}
                                 validateQuiz={(vq) => props.validateQuiz(vq)}
                                 createComment={(command) => props.createComment(command)}
                    />
                </Content>
            </a.Layout>
        </a.Layout>
    </a.Layout>
}

interface IProps {
    children: ReactNode;

    course: CourseEntity;
    lesson: LessonEntity;
    getSingleCourse(query: GetCourseQuery): void;
    getSingleLesson(query: GetLessonWithoutAnswersQuery): void;
    validateQuiz(command: ValidateQuizCommand): void;
    createComment(command: CreateCommentCommand): void;
}

interface LessonsMap {
    id: number;
}

const mapStateToProps = (state: IRootState) => ({
    course: state.course,
    lesson: state.lesson
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSingleCourse: (query: GetCourseQuery) => dispatch(CoursesActions.getSingleCourse(query)),
    getSingleLesson: (query: GetLessonWithoutAnswersQuery) => dispatch(LessonsActions.getSingleLessonWithoutAnswers(query)),
    validateQuiz: (command: ValidateQuizCommand) => dispatch(QuizzesActions.validate(command)),
    createComment: (command: CreateCommentCommand) => dispatch(CommentsActions.createComment(command))
})

export default connect(mapStateToProps, mapDispatchToProps)(ELayout)
