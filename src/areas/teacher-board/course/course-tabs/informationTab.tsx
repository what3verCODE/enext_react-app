import React from 'react';
import * as a from 'antd';

import './styles.scss';
import {CourseEntity} from "../../../../core/domain/entities/CourseEntity";


function CoursePageInformationTab(props: IProps) {
    const { course } = props;
    const { Title, Text } = a.Typography;

    return <>
        <a.Row gutter={[8, 8]} justify={"space-between"}>
            <a.Col xs={24} sm={24} md={24} lg={13} xl={15}>

            </a.Col>

            <a.Col xs={24} sm={24} md={12} lg={5} xl={4}>
                <a.Button type="primary" block>Посмотреть</a.Button>
            </a.Col>

            <a.Col xs={24} sm={24} md={12} lg={6} xl={5}>
                <a.Button type="primary" block href={`/teach/course/${course.id}/edit-info`}>Редактировать информацию</a.Button>
            </a.Col>
        </a.Row>

        <a.Row gutter={[8, 8]} style={{padding: '1.75rem 0'}} align={"top"} className="teach__course-row">
            {/*xs={24} sm={24} md={10} lg={7} xl={6}*/}
            <a.Col flex={1}>
                <div className="teach__course-frame">
                    <img src="https://via.placeholder.com/250x250" alt="" className="teach__course-image"/>
                </div>
            </a.Col>
            {/*xs={24} sm={24} md={14} lg={17} xl={18}*/}
            <a.Col flex={4}>
                <Title level={4}>Описание курса</Title>
                <Text>{course.description}</Text>

                <Title level={4}>Краткое описание курса</Title>
                <Text>{course.shortDescription}</Text>

                <Title level={4}>Для кого этот курс</Title>
                <Text>{course.targetAudience}</Text>

                <Title level={4}>Нагрузка</Title>
                <Text>{course.charge}</Text>

                <Title level={4}>Авторы курса</Title>
                <Text>
                    Онлайн-курс «Машинное обучение и управление проектами в IT для преподавателей» поможет расширить вашу образовательную программу актуальными материалами из области ML и управления процессами в IT.
                </Text>
            </a.Col>
        </a.Row>
    </>
}

interface IProps {
    course: CourseEntity
}

export default CoursePageInformationTab
