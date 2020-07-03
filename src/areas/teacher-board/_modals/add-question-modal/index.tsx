import React, {useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import {QuestionEntity} from "../../../../core/domain/entities/QuestionEntity";
import {QuestionType} from "../../../../core/domain/enum/question";
import {AnswerEntity} from "../../../../core/domain/entities/AnswerEntity";

const initialQuestion: QuestionEntity = {
    value: 'Текст вопроса...',
    score: 2,
    type: QuestionType.SingleChoice,
    answers: [
        { value: 'Вариант ответа А', isCorrect: false },
        { value: 'Вариант ответа Б', isCorrect: true },
    ]
}

function AddQuestionModal(props: IProps) {
    const [question, setQuestion] = useState<QuestionEntity>(initialQuestion);
    const [addQuestionForm] = a.Form.useForm();
    const { Option } = a.Select;

    function onAddAnswer() {
        const answer: AnswerEntity = {
            value: 'Новый вариант ответа',
            isCorrect: false
        }
        const answers = [...question.answers];
        answers.push(answer);
        setQuestion({...question, answers: [...answers]})
    }
    function onRemoveAnswer(answer_index: number) {
        let answers = [...question.answers];
        answers = answers.filter((a, i) => i !== answer_index);

        setQuestion({...question, answers: [...answers]});
    }

    function onChangeQuestionType(type: QuestionType) {
        let answers = [...question.answers];
        answers = answers.map((a, i) => {
            a.isCorrect = i === 0;

            return a;
        })

        setQuestion({...question, type: type, answers: [...answers]});
    }

    function onChangeAnswerValue(answer_index: number, text: string) {
        const answers = [...question.answers];
        answers[answer_index].value = text;
        setQuestion({...question, answers: [...answers]});
    }
    function onChangeAnswerChecked_Radio(answer_index: number) {
        let answers = [...question.answers];
        answers = answers.map((a, i) => {
            a.isCorrect = i === answer_index;

            return a;
        })

        setQuestion({...question, answers: [...answers]});
    }
    function onChangeAnswerChecked_Checkbox(answer_index: number) {
        let answers = [...question.answers];
        answers = answers.map((a, i) => {
            if(i == answer_index) a.isCorrect = !a.isCorrect

            return a;
        })

        setQuestion({...question, answers: [...answers]});
    }
    function getState(answer_index: number) {
        return question.answers[answer_index].isCorrect
    }

    return <a.Modal
        title="Добавить вопрос"
        visible={props.visible}
        centered
        onCancel={() => props.visibleChange()}
        footer={[
            <a.Button key="cancel" onClick={() => props.visibleChange()} danger>
                Отмена
            </a.Button>,
            <a.Button key="submit" onClick={() => {
                addQuestionForm
                    .validateFields()
                    .then(() => {
                        props.onAddQuestion(question);
                        props.visibleChange();
                    })
            }}>
                Добавить
            </a.Button>
        ]}
    >
        <a.Form
            form={addQuestionForm}
            name="add_question_form"
        >
            <a.Form.Item name="value"
                         initialValue={question.value}
                         rules={[{required: true}]}
            >
                <a.Input value={question.value}
                         onChange={(e) =>
                             setQuestion({...question, value: e.target.value})}
                />
            </a.Form.Item>

            <a.Form.Item name="score"
                         initialValue={question.score}
                         rules={[{required: true}]}
            >
                <a.InputNumber
                               onChange={(v) =>
                                   setQuestion({...question, score: Number.parseInt(v!.toString())})}
                               min={1}
                               style={{minWidth: '100%'}}
                />
            </a.Form.Item>

            <a.Form.Item name="type"
                         initialValue={question.type}
                         rules={[{required: true}]}
            >
                <a.Select value={question.type}
                          onChange={(v) => onChangeQuestionType(Number.parseInt(v.toString()))}
                >
                    <Option value={QuestionType.SingleChoice}>Одиночный выбор</Option>
                    <Option value={QuestionType.MultipleChoice}>Множественный выбор</Option>
                </a.Select>
            </a.Form.Item>

            {question.type === QuestionType.SingleChoice
                ? <div>
                    {question.answers.map((answer, answer_index) => {
                        return <a.Space key={answer_index}
                                        style={{display: 'flex', marginBottom: 6}}
                                        align={"center"}
                        >
                            <a.Form.Item>
                                <a.Radio checked={getState(answer_index)} onChange={() => onChangeAnswerChecked_Radio(answer_index)} />
                            </a.Form.Item>

                            <a.Form.Item>
                                <a.Input value={answer.value} onChange={(e) => onChangeAnswerValue(answer_index, e.target.value)}/>
                            </a.Form.Item>

                            {question.answers.length > 1 ?
                                <a.Form.Item>
                                    <i.MinusCircleOutlined onClick={() => onRemoveAnswer(answer_index)}/>
                                </a.Form.Item>
                            : null}
                        </a.Space>
                    })}
                </div>
                : <div>
                    {question.answers.map((answer, answer_index) => {
                        return <a.Space key={answer_index}
                                        style={{display: 'flex', marginBottom: 6}}
                                        align={"center"}
                        >
                            <a.Form.Item>
                                <a.Checkbox checked={getState(answer_index)} onChange={() => onChangeAnswerChecked_Checkbox(answer_index)} />
                            </a.Form.Item>

                            <a.Form.Item>
                                <a.Input value={answer.value} onChange={(e) => onChangeAnswerValue(answer_index, e.target.value)}/>
                            </a.Form.Item>

                            {question.answers.length > 1 ?
                                <a.Form.Item>
                                    <i.MinusCircleOutlined onClick={() => onRemoveAnswer(answer_index)}/>
                                </a.Form.Item>
                                : null}
                        </a.Space>
                    })}
                </div>
            }

            <a.Form.Item>
                <a.Button type="primary" block onClick={() => onAddAnswer()}>
                    <i.PlusOutlined />
                    Добавить вариант ответа
                </a.Button>
            </a.Form.Item>
        </a.Form>
    </a.Modal>
}

interface IProps {
    visible: boolean;
    visibleChange(): void;
    onAddQuestion(question: QuestionEntity): void;
}

export default AddQuestionModal
