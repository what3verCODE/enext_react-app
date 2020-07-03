import React, {useEffect, useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import TLayout from "../_layout/Layout";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import QuestionPanel from "./question-panel";
import VideoPanel from "./video-panel";
import TextPanel from "./text-panel";
import {LessonSectionType} from "../../../core/domain/enum/lesson-section";
import AddLessonSectionModal from "../_modals/add-lesson-section";
import {useHistory, useParams} from 'react-router-dom';
import {LessonEntity} from "../../../core/domain/entities/LessonEntity";
import {LessonsActions} from "../../../core/redux/actions/lessons-actions";
import {GetLessonQuery} from "../../../core/domain/queries/LessonQueries";
import {UpdateLessonCommand} from "../../../core/domain/commands/LessonCommands";
import {IRootState} from "../../../core/redux/reducers";
import {SectionEntity} from "../../../core/domain/entities/SectionEntity";
import {QuestionEntity} from "../../../core/domain/entities/QuestionEntity";
import {QuestionType} from "../../../core/domain/enum/question";

const initialSections: SectionEntity[] = [
    { type: LessonSectionType.Text, text: "Пример текстовой секции..."}
];
const initialTextSection: SectionEntity = {
    type: LessonSectionType.Text,
    text: 'Замените этот текст тем, который вы считаете нужным!'
}
const initialVideoSection: SectionEntity = {
    type: LessonSectionType.Video,
    videoUrl: 'http://google.com'
}
const initialQuizSection: SectionEntity = {
    type: LessonSectionType.Quiz,
    quiz: {
        maxAttempts: 2,
        questions: [
            {
                value: 'Пример вопроса с одиночным выбором',
                score: 2,
                type: QuestionType.SingleChoice,
                answers: [
                    { value: 'Вариант ответа А', isCorrect: false },
                    { value: 'Вариант ответа Б', isCorrect: false },
                    { value: 'Вариант ответа В', isCorrect: true },
                    { value: 'Вариант ответа Г', isCorrect: false },
                ]
            },
            {
                value: 'Пример вопроса с множественным выбором',
                score: 2,
                type: QuestionType.MultipleChoice,
                answers: [
                    { value: 'Вариант ответа А', isCorrect: true },
                    { value: 'Вариант ответа Б', isCorrect: false },
                    { value: 'Вариант ответа В', isCorrect: true },
                    { value: 'Вариант ответа Г', isCorrect: false },
                ]
            }
        ]
    }
}

function LessonEditPage(props: IProps) {
    const { id } = useParams();
    const history = useHistory();

    const { Panel } = a.Collapse;
    const { confirm } = a.Modal;
    const [lesson, setLesson] = useState<LessonEntity>(props.lesson);
    const [addSectionModalVisible, setAddSectionModalVisible] = useState(false);

    useEffect(() => {
        if(props.lesson == null) return;
        const _lesson = {...props.lesson};
        if(_lesson.sections == null || _lesson.sections.length === 0)
            _lesson.sections = initialSections;
        setLesson({..._lesson})
    }, [props.lesson])
    useEffect(() => {
        if(id == null) history.push(`/teach/courses`);
        props.getSingleLesson({lessonId: Number.parseInt(id)});

    }, [])

    function onFinish() {
        console.info(lesson, lesson as UpdateLessonCommand);
        props.updateLesson(lesson as UpdateLessonCommand);
    }

    function onAddSection(section_type: LessonSectionType) {
        const _lesson = lesson;
        if(_lesson == null) return;
        let _sections = _lesson.sections;
        if(_sections == null) _sections = []

        if(section_type === LessonSectionType.Text) _sections.push(initialTextSection);
        else if(section_type === LessonSectionType.Video) _sections.push(initialVideoSection);
        else _sections.push(initialQuizSection);

        setLesson({..._lesson, sections: _sections});
    }
    function onRemoveSection(section_index: number) {
        const _lesson = lesson;
        if(_lesson == null) return;
        let _sections = _lesson.sections;
        if(_sections == null) return;
        _sections = _sections.filter((s, i) => {
            return i !== section_index;
        })
        setLesson({..._lesson, sections: [..._sections]});
    }
    function onEditText(section_index: number, text: string) {
        const _lesson = lesson;
        if(_lesson == null) return;
        const _sections = _lesson.sections;
        if(_sections == null) return;
        const _section = _sections[section_index];
        if(_section == null) return;
        _section.text = text;

        _sections[section_index] = {..._section};
        setLesson({..._lesson, sections: [..._sections]});
    }
    function onEditUrl(section_index: number, url: string) {
        const _lesson = lesson;
        if(_lesson == null) return;
        const _sections = _lesson.sections;
        if(_sections == null) return;
        const _section = _sections[section_index];
        if(_section == null) return;
        _section.videoUrl = url;

        _sections[section_index] = {..._section};
        setLesson({..._lesson, sections: [..._sections]});
    }
    function onAddQuestion(section_index: number, question: QuestionEntity) {
        const _lesson = lesson;
        if(_lesson == null) return;
        const _sections = _lesson.sections;
        if(_sections == null) return;
        const _section = _sections[section_index];
        _section.quiz?.questions?.push({...question})

        _sections[section_index] = _section;
        setLesson({..._lesson, sections: [..._sections]})
    }
    function onEditQuestion(section_index: number, question_index: number, question: QuestionEntity) {
        const _lesson = lesson;
        if(_lesson == null) return;
        const _sections = _lesson.sections;
        if(_sections == null) return;
        const _section = _sections[section_index];
        let _questions = _section.quiz?.questions;
        if(_questions == null) return;
        _questions[question_index] = {...question}

        _section.quiz!.questions = _questions;
        _sections[section_index] = {..._section}
        setLesson({..._lesson, sections: [..._sections]});
    }
    function onRemoveQuestion(section_index: number, question_index: number) {
        const _lesson = lesson;
        if(_lesson == null) return;
        const _sections = _lesson.sections;
        if(_sections == null) return;
        const _section = _sections[section_index];
        let _questions = _section.quiz?.questions;
        if(_questions == null) return;
        _questions = _questions.filter((q, i) => {
            return i !== question_index;
        })

        _section.quiz!.questions = _questions;
        _sections[section_index] = {..._section}
        setLesson({..._lesson, sections: [..._sections]});
    }

    function getPanelHeader(type: LessonSectionType) {
        if(type === LessonSectionType.Text)
            return 'Текст';
        else if(type === LessonSectionType.Video)
            return 'Видео';
        else return 'Тест';
    }

    if(lesson == null) return <></>

    return <TLayout>
        <a.PageHeader
            title={props.lesson.title + ' (Режим редактирования)'}
            style={{padding: 0, marginBottom: '1.5rem'}}
            onBack={() => history.push(`/teach/courses`)}
        />

        <a.Form onFinish={() => onFinish()}
                name='editLessonForm'
                size="large"
        >
            <a.Row gutter={[8,8]}>
                <a.Col span={24}>
                    <a.Card title="Настройки урока">
                        <a.Form.Item initialValue={lesson.title}
                                     rules={[{required: true, message: 'Название урока не может быть пустым'}]}
                        >
                            <a.Input value={lesson.title}
                                     onChange={(e) =>  setLesson({...lesson,  title: e.target.value})}
                            />
                        </a.Form.Item>

                        <a.Form.Item initialValue={lesson.manualChecking}>
                            <a.Checkbox checked={lesson.manualChecking}
                                        onChange={(e) => setLesson({...lesson, manualChecking: e.target.checked})}
                            >Проверить урок вручную</a.Checkbox>
                        </a.Form.Item>
                    </a.Card>
                </a.Col>

                <a.Col span={24}>
                    <a.Button key='addSection' style={{float: 'right'}} onClick={() => setAddSectionModalVisible(true)}>Добавить секцию</a.Button>
                </a.Col>

                <a.Col span={24}>
                    <a.Collapse expandIconPosition="right">
                        {lesson.sections != null && lesson.sections.map((section, section_index) => {
                            if(lesson.sections != null && lesson.sections.length > 1)
                                return <Panel key={section_index}
                                              header={getPanelHeader(section.type)}
                                              extra={<i.DeleteOutlined onClick={(e) => {
                                                  e.stopPropagation()
                                                  confirm({
                                                      title: 'Вы уверены что хотите удалить секцию?',
                                                      icon: <i.ExclamationCircleOutlined />,
                                                      centered: true,
                                                      okText: 'Да, уверен!',
                                                      okType: 'danger',
                                                      cancelText: 'Нет',
                                                      onOk() { onRemoveSection(section_index) },
                                                      onCancel() { }
                                                  })
                                              }}/>}
                                >
                                    {section.type === LessonSectionType.Text ?
                                        <TextPanel text={section.text}
                                                   onChange={(text) => onEditText(section_index, text)}
                                        />
                                        : section.type === LessonSectionType.Video ?
                                            <VideoPanel url={section.videoUrl}
                                                        onChange={(url) => onEditUrl(section_index, url)}
                                            />
                                            : <QuestionPanel quiz={section.quiz!}
                                                             onAddQuestion={(q) => onAddQuestion(section_index, q)}
                                                             onEditQuestion={(i, q) => onEditQuestion(section_index, i, q)}
                                                             onRemoveQuestion={(question_index) => onRemoveQuestion(section_index, question_index)}
                                            />
                                    }
                                </Panel>
                            else
                                return <Panel key={section_index}
                                              header={getPanelHeader(section.type)}
                                >
                                    {section.type === LessonSectionType.Text ?
                                        <TextPanel text={section.text}
                                                   onChange={(text) => onEditText(section_index, text)}
                                        /> :
                                        section.type === LessonSectionType.Video ?
                                            <VideoPanel url={section.videoUrl}
                                                        onChange={(url) => onEditUrl(section_index, url)}
                                            /> :
                                            <QuestionPanel quiz={section.quiz!}
                                                           onAddQuestion={(q) => onAddQuestion(section_index, q)}
                                                           onEditQuestion={(i, q) => onEditQuestion(section_index, i, q)}
                                                           onRemoveQuestion={(question_index) => onRemoveQuestion(section_index, question_index)}
                                            />
                                    }
                                </Panel>
                        })}
                    </a.Collapse>
                </a.Col>

                <a.Col span={24}>
                    <a.Button htmlType="submit" key='saveLesson' size="large" type="primary" style={{float: 'right'}}>
                        Сохранить
                    </a.Button>
                </a.Col>
            </a.Row>
        </a.Form>


        <AddLessonSectionModal visible={addSectionModalVisible}
                               visibleChange={() => setAddSectionModalVisible(false)}
                               onAddSection={(type) => onAddSection(type)}
        />

    </TLayout>
}

interface IProps {
    lesson: LessonEntity
    getSingleLesson(query: GetLessonQuery): void;
    updateLesson(command: UpdateLessonCommand): void;
}

const mapStateToProps = (state: IRootState) => ({
    lesson: state.lesson
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSingleLesson: (query: GetLessonQuery) => dispatch(LessonsActions.getSingleLesson(query)),
    updateLesson: (command: UpdateLessonCommand) => dispatch(LessonsActions.updateLesson(command))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditPage)
