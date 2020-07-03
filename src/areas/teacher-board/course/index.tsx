import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import TLayout from "../_layout/Layout";
import * as a from 'antd';
import {Dispatch} from 'redux';
import CoursePageInformationTab from "./course-tabs/informationTab";
import CoursePageScheduleTab from "./course-tabs/scheduleTab";
import CoursePageStatisticsTab from "./course-tabs/statisticsTab";
import CoursePageFeedbacksTab from "./course-tabs/feedbacksTab";
import CoursePageSettingsTab from "./course-tabs/settingsTab";
import {connect} from "react-redux";
import {GetCourseByAuthorQuery} from "../../../core/domain/queries/CourseQueries";
import {CoursesActions} from "../../../core/redux/actions/courses-actions";
import {IRootState} from "../../../core/redux/reducers";
import {CourseEntity} from "../../../core/domain/entities/CourseEntity";
import {GetProgressesQuery} from "../../../core/domain/queries/ProgressQueries";
import {ProgressesActions} from "../../../core/redux/actions/progresses-actions";
import {ProgressEntity} from "../../../core/domain/entities/ProgressEntity";

function CoursePage(props: IProps) {
    const { id } = useParams();
    const { course, getSingleCourse } = props;

    useEffect(() => {
        if(course == null || course.id !== Number.parseInt(id)) {
            getSingleCourse({courseId: Number.parseInt(id)});
        }
    }, []);

    useEffect(() => {
        if(props.course == null) return;
        props.getAllProgresses({courseId: props.course.id});
    }, [props.course])

    const { TabPane } = a.Tabs;
    const { Title } = a.Typography;

    if(props.course == null) return <></>

    return <TLayout>
        <a.PageHeader
            title={props.course.title}
            tags={<a.Tag color='green'>Опубликован</a.Tag>}
            style={{padding: 0, marginBottom: '1.5rem'}}
        />

        <a.Tabs defaultActiveKey="tab:1">
            <TabPane tab="Информация" key="tab:1">
                <CoursePageInformationTab course={props.course}/>
            </TabPane>

            <TabPane tab="Содержание" key="tab:2">
                <CoursePageScheduleTab course={props.course}/>
            </TabPane>

            <TabPane tab="Статистика" key="tab:3">
                <CoursePageStatisticsTab courseId={props.course.id} progresses={props.progresses}/>
            </TabPane>

            <TabPane tab="Отзывы" key="tab:4">
                <CoursePageFeedbacksTab />
            </TabPane>

            <TabPane tab="Настройки" key="tab:5">
                <CoursePageSettingsTab />
            </TabPane>
        </a.Tabs>
    </TLayout>
}
interface IProps {
    course: CourseEntity;
    progresses: ProgressEntity[]
    getSingleCourse(query: GetCourseByAuthorQuery): void;
    getAllProgresses(query: GetProgressesQuery): void;
}

const mapStateToProps = (state: IRootState) => ({
    course: state.course,
    progresses: state.progresses
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSingleCourse: (query: GetCourseByAuthorQuery) => dispatch(CoursesActions.getSingleCourseByAuthor(query)),
    getAllProgresses: (query: GetProgressesQuery) => dispatch(ProgressesActions.getAll(query))
})


export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)
