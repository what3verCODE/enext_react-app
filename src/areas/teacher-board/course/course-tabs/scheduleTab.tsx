import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';

import './styles.scss'
import {Link} from "react-router-dom";
import {CourseEntity} from "../../../../core/domain/entities/CourseEntity";

function CoursePageScheduleTab(props: IProps) {
    const { course } = props;
    return <>
        <a.Row justify={"space-between"}>
            <a.Col xs={24} sm={24} md={12} lg={18} xl={19}>

            </a.Col>

            <a.Col xs={24} sm={24} md={12} lg={6} xl={5}>
                <a.Button type="primary" block href={`/teach/course/${course.id}/edit-schedule`}>Редактировать содержание</a.Button>
            </a.Col>
        </a.Row>

        <a.Row gutter={[8, 16]} justify="space-between" style={{padding: '1.25rem 0'}} align="stretch">

            {course.modules != null && course.modules.map((module, module_index) => {
                return <a.Col
                    key={'col:' + module_index}
                    flex={1}
                    className="teach__modules-column"
                >
                    <a.Card title={module.title} className="teach__module-title">
                        {module.lessons != null && module.lessons.map((lesson, lesson_index) => {
                            return <a.Card.Grid
                                key={'cardgrid:' + module_index + ':' + lesson_index}
                                className="teach__modules-column__card-grid"
                            >
                                <div className="teach__lesson-grid-card">
                                    <h4 className="teach__lesson-grid-card__title">{lesson.title}</h4>
                                    <a.Dropdown overlay={
                                        <a.Menu>
                                            <a.Menu.Item className="teach__lesson-grid-card__menu-item" icon={<i.EditOutlined />}><Link to={`/teach/lesson/${lesson.id}/edit`}>Редактировать</Link></a.Menu.Item>
                                            <a.Menu.Item className="teach__lesson-grid-card__menu-item" icon={<i.DeleteOutlined />} danger>Удалить</a.Menu.Item>
                                        </a.Menu>
                                    }><i.MoreOutlined className="teach__lesson-grid-card__icon"/></a.Dropdown>
                                </div>
                            </a.Card.Grid>
                        })}
                    </a.Card>
                </a.Col>
            })}

        </a.Row>
    </>
}

interface IProps {
    course: CourseEntity
}

export default CoursePageScheduleTab
