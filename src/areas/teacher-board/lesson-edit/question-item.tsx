import React, {useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import {QuestionEntity} from "../../../core/domain/entities/QuestionEntity";
import QuestionModal from "../_modals/edit-question-modal";
import EditQuestionModal from "../_modals/edit-question-modal";

function QuestionItem(props: IProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const { Text } = a.Typography;
    const { confirm } = a.Modal;

    return <a.List.Item
        actions={[
            <a.Button onClick={() => setModalVisible(true)} style={{marginLeft: '.5rem'}} icon={<i.EditOutlined />}/>,
            props.canBeDeleted ? <a.Button onClick={() => {
                confirm({
                    title: 'Вы уверены что хотите удалить вопрос: ' + props.question.value + ' ?',
                    icon: <i.ExclamationCircleOutlined />,
                    centered: true,
                    okText: 'Да, уверен!',
                    okType: 'danger',
                    cancelText: 'Нет',
                    onOk() { props.onRemoveQuestion() },
                    onCancel() { }
                })
            }} style={{marginLeft: '.5rem'}} icon={<i.DeleteOutlined />}/> : null
        ]}
    >
        <Text>{props.question.value}</Text>

        <EditQuestionModal visible={modalVisible}
                           visibleChange={() => setModalVisible(false)}
                           question={props.question}
                           onEditQuestion={(q) => props.onEditQuestion(q)}
        />
    </a.List.Item>
}

interface IProps {
    question: QuestionEntity;
    canBeDeleted: boolean;
    onEditQuestion(question: QuestionEntity): void;
    onRemoveQuestion(): void;
}


export default QuestionItem
