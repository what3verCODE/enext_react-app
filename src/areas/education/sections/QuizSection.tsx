import React, {useEffect, useState} from 'react';
import * as a from 'antd';
import {QuestionType} from "../../../core/domain/enum/question";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import {RadioChangeEvent} from "antd/es/radio";
import {ValidateQuizCommand} from "../../../core/domain/commands/QuizCommands";
import {QuizEntity} from "../../../core/domain/entities/QuizEntity";
import {QuestionEntity} from "../../../core/domain/entities/QuestionEntity";

const maxTries = 2;

function QuizSection(props:IProps) {
    const [quiz, setQuiz] = useState<QuizEntity>();
    const [currentTries, setCurrentTries] = useState(0);
    const [quizForm] = a.Form.useForm();
    const { Text } = a.Typography;

    useEffect(() => {
        if(props.quiz == null) return;
        setQuiz({...props.quiz})
    }, [props.quiz])

    const conditionTextStyle = {
        fontWeight: 700
    }
    const conditionScoreStyle = {
        fontSize: '12px',
        marginLeft: '10px'
    }

    function onChangeAnswerChecked_Radio(question_index: number, answer_index: number) {
        if(quiz == null) return;
        let _questions = [...quiz.questions];
        let _answers = [..._questions[question_index].answers];
        _answers = _answers.map((a, i) => {
            a.isSelected = i === answer_index;
            return a;
        });

        _questions[question_index].answers = _answers;
        setQuiz({...quiz, questions: [..._questions]});
    }
    function onChangeAnswerChecked_Checkbox(question_index: number, answer_index: number) {
        if(quiz == null) return;
        let _questions = [...quiz.questions];
        let _answers = [..._questions[question_index].answers];
        _answers = _answers.map((a, i) => {
            if(i === answer_index) a.isSelected = true;
            if(a.isSelected == null) a.isSelected = false;
            return a;
        })

        _questions[question_index].answers = _answers;
        setQuiz({...quiz, questions: [..._questions]});
    }
    function getSelected(question_index: number, answer_index: number) {
        if(quiz == null) return;
        return quiz.questions[question_index].answers[answer_index].isSelected;
    }

    function validateQuiz() {
        const anySelected = quiz!.questions.find(x => x.answers.find(y => y.isSelected === true));

        if(anySelected) {
            setCurrentTries(currentTries + 1);
            props.validateQuiz({...quiz} as ValidateQuizCommand)
        } else a.message.error('Не выбрано ни одного ответа!')
    }

    return <a.Form
        form={quizForm}
        name="quizForm"
        size="large"
        layout="vertical"
    >
        {quiz != null && quiz.questions.map((question, question_index) => {
            return <a.Space key={"question:" + question_index}
                            style={{display: 'flex', marginBottom: 6, flexDirection: "column", alignItems: "start"}}
                            align={"center"}
            >
                <div>
                    <Text style={conditionTextStyle}>{(question_index + 1) + ". " + question.value}</Text>
                    <Text style={conditionScoreStyle}>{question.score + ' баллов'}</Text>
                </div>


                {question.type === QuestionType.SingleChoice
                    ? <div>
                        {question.answers.map((answer, answer_index) => {
                            return <a.Space key={"question:" + question_index + ":answer:" + answer_index}
                                            style={{display: 'flex', marginBottom: 3}}
                                            align={"center"}
                            >
                                <a.Form.Item>
                                    <a.Radio onChange={(e) =>
                                        onChangeAnswerChecked_Radio(question_index, answer_index)}
                                    >
                                        {answer.value}
                                    </a.Radio>
                                </a.Form.Item>

                                {answer.isSelected && answer.wrong
                                    ? <a.Form.Item>
                                        <Text>Не верно!</Text>
                                    </a.Form.Item>
                                    : null
                                }
                            </a.Space>
                        })}
                    </div>
                    : <div>
                        {question.answers.map((answer, answer_index) => {
                            return <a.Space key={"question:" + question_index + ":answer:" + answer_index}
                                            style={{display: 'flex', marginBottom: 3}}
                                            align={"center"}
                            >
                                <a.Form.Item>
                                    <a.Checkbox onChange={(e) =>
                                        onChangeAnswerChecked_Checkbox(question_index, answer_index)}
                                    >
                                        {answer.value}
                                    </a.Checkbox>
                                </a.Form.Item>

                                {answer.isSelected && answer.wrong
                                    ? <a.Form.Item>
                                        <Text>Не верно!</Text>
                                    </a.Form.Item>
                                    : null
                                }
                            </a.Space>
                        })}
                    </div>
                }
            </a.Space>
        })}

        <a.Form.Item>
            <a.Button disabled={currentTries >= maxTries} size="large" type="primary" style={{float: 'right'}} onClick={() => validateQuiz()}>Проверить тест</a.Button>
        </a.Form.Item>

    </a.Form>
}

interface IProps {
    quiz: QuizEntity;
    validateQuiz(command: ValidateQuizCommand): void;
}


export default QuizSection
