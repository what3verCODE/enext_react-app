import React, {useEffect, useState} from "react";
import * as a from 'antd';
import * as i from '@ant-design/icons';

import TLayout from "../_layout/Layout";

import './styles.scss';
import {Link} from "react-router-dom";
import {Dispatch} from 'redux';
import {connect} from "react-redux";
import {CoursesActions} from "../../../core/redux/actions/courses-actions";
import {IRootState} from "../../../core/redux/reducers";
import {CourseEntity} from "../../../core/domain/entities/CourseEntity";

function CoursesPage(props: IProps) {
    const { Title, Text } = a.Typography;

    useEffect(() => {
        props.getAllCourses();
    }, [])

    return <TLayout>
        <a.PageHeader
            title="Курсы"
            style={{padding: 0, marginBottom: '1.5rem'}}
        />
        <a.Row gutter={[8, 8]}>
            <a.Col span={24}>

            </a.Col>


            <a.Col span={24}>
                <a.List bordered>
                    {props.courses != null && props.courses.map((course, course_index) => {
                        return <a.List.Item key={'courses:' + course_index}
                            actions={[
                                <a.Button type="text" icon={<i.MoreOutlined style={{fontSize: '18px'}} />} />
                            ]}
                        >
                            <a.List.Item.Meta
                                avatar={<a.Avatar size={64} icon={<i.UserOutlined />}/>}
                                title={<Link to={`/teach/course/${course.id}`}>{course.title}</Link>}
                                description={course.description}
                            />
                        </a.List.Item>
                    })}
                </a.List>
            </a.Col>
        </a.Row>
    </TLayout>
}

interface IProps {
    courses: CourseEntity[],
    getAllCourses(): void;
}

const mapStateToProps = (state: IRootState) => ({
    courses: state.courses
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAllCourses: () => dispatch(CoursesActions.getAllCoursesByAuthor()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
