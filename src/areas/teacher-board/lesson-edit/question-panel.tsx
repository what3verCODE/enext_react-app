import React, {useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import QuestionItem from "./question-item";
import {QuizEntity} from "../../../core/domain/entities/QuizEntity";
import {QuestionEntity} from "../../../core/domain/entities/QuestionEntity";
import AddQuestionModal from "../_modals/add-question-modal";

function QuestionPanel(props: IProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return <>
        <a.List bordered>
            {props.quiz != null && props.quiz.questions.map((question, question_index) => {
                return <QuestionItem key={'question:' + question_index}
                                     canBeDeleted={props.quiz.questions.length > 1}
                                     question={question}
                                     onEditQuestion={(q) => props.onEditQuestion(question_index, q)}
                                     onRemoveQuestion={() => props.onRemoveQuestion(question_index)}
                />
            })}
        </a.List>

        <a.Button key='addQuestion'
                  onClick={() => setModalVisible(true)}
                  style={{margin: '.375rem 0', float: 'right'}}>
            Добавить вопрос
        </a.Button>

        <AddQuestionModal visible={modalVisible}
                          visibleChange={() => setModalVisible(false)}
                          onAddQuestion={(q) => props.onAddQuestion(q)}
        />
    </>
}

interface IProps {
    quiz: QuizEntity;
    onAddQuestion(question: QuestionEntity): void;
    onEditQuestion(question_index: number, question: QuestionEntity): void;
    onRemoveQuestion(question_index: number): void;
}


export default QuestionPanel
