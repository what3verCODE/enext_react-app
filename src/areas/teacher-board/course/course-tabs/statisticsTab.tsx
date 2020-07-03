import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import {ProgressEntity} from "../../../../core/domain/entities/ProgressEntity";

function CoursePageStatisticsTab(props: IProps) {
    const { Column, ColumnGroup } = a.Table;

    function getId(record: any) {
        return record.id;
    }

    return <>
        <a.Table dataSource={props.progresses} size="middle" tableLayout="auto" bordered={true}>
            <Column title="#" dataIndex="index" key="index" />
            <Column title="Имя" dataIndex={["user","firstName"]} key="firstName" />
            <Column title="Фамилия" dataIndex={["user","lastName"]} key="lastName" />
            <Column title="Отчество" dataIndex={["user","middleName"]} key="middleName" />
            <Column title="Класс" dataIndex="className" key="className" />
            <Column title="Прогресс" dataIndex="progress" key="progress" render={progress => (
                <a.Progress percent={progress}/>
            )}/>
            <Column width={10} key="actions" render={(text, record) => (
                <a.Button href={`/teach/course/${props.courseId}/statistics/detailed/${getId(record)}`}>Детальная информация</a.Button>
            )}/>
        </a.Table>
    </>
}

interface IProps {
    courseId: number;
    progresses: ProgressEntity[];
}

export default CoursePageStatisticsTab
