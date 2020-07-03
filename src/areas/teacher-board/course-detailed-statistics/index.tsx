import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import TLayout from "../_layout/Layout";

const data = [
    { lesson: {name: 'Введение в C#', maxScore: 20, isWaitingForManualChecking: false }, score: 15 },
    { lesson: {name: 'Введение в C#', maxScore: 20, isWaitingForManualChecking: true }, score: 15 },
    { lesson: {name: 'Введение в C#', maxScore: 20, isWaitingForManualChecking: true }, score: 15 },
    { lesson: {name: 'Введение в C#', maxScore: 20, isWaitingForManualChecking: true }, score: 15 },
    { lesson: {name: 'Введение в C#', maxScore: 20, isWaitingForManualChecking: true }, score: 15 },
]

function CourseDetailedStatistics() {
    const { Column } = a.Table;

    return <TLayout>
        <a.PageHeader
            title="Cтатистика пользователя: Нохрин Александр Николаевич"
            subTitle='по курсу "Программирование на языке C#"'
            style={{padding: 0, marginBottom: '1.5rem'}}
            onBack={() => {}}
        />

        <a.Table dataSource={data}>
            <Column
                title="Урок"
                dataIndex="lesson"
                key="lesson"
                render={lesson => lesson.name}
            />

            <Column
                title="Максимальный балл"
                dataIndex="lesson"
                key="maxScore"
                render={lesson => lesson.maxScore}
            />

            <Column
                title="Балл"
                dataIndex="score"
                key="score"
            />

            <Column
                title="Статус"
                dataIndex="lesson"
                key="manualChecking"
                render={
                    lesson =>
                        lesson.isWaitingForManualChecking ?
                            <a.Tag color="warning" icon={<i.WarningOutlined />}>Ожидает проверки</a.Tag>
                            : <a.Tag color="success" icon={<i.CheckOutlined /> }>Проверено </a.Tag>
                }
            />

            <Column
                width={10}
                key="checkManually"
                render={() => <a.Button>Проверить задание</a.Button>}
            />
        </a.Table>
    </TLayout>
}

export default CourseDetailedStatistics
