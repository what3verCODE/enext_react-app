import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';

import {Link} from "react-router-dom";

import './styles.scss';
import TextSection from "../sections/TextSection";
import VideoSection from "../sections/VideoSection";
import QuizSection from "../sections/QuizSection";
import {LessonSectionType} from "../../../core/domain/enum/lesson-section";
import {ValidateQuizCommand} from "../../../core/domain/commands/QuizCommands";
import {LessonEntity} from "../../../core/domain/entities/LessonEntity";
import CommentsSection from "../sections/CommentsSection";
import {CreateCommentCommand} from "../../../core/domain/commands/CommentCommands";

function ContentPage(props: IProps) {

    return <>
        <a.PageHeader
            title={props.lesson.title}
            style={{padding: 0, marginBottom: '1.5rem', borderBottom: '1px solid rgba(0, 0, 0, .2)'}}
        />

        <a.Row gutter={[8, 16]}>
            {props.lesson.sections?.map((section, section_index) => {
                return <a.Col span={24} key={'section:' + section_index}>
                    {section.type === LessonSectionType.Text ?
                        <TextSection text={section.text!}/> :
                        section.type === LessonSectionType.Video ?
                            <VideoSection url={section.videoUrl!}/> :
                            <QuizSection quiz={section.quiz!}
                                         validateQuiz={(vq) => props.validateQuiz(vq)}
                            />

                    }
                </a.Col>
            })}

            <a.Col span={24}>
                <a.Row justify="space-between">
                    <a.Col>
                        <a.Button size="large" icon={<i.LikeOutlined />}/>
                        <a.Button size="large" icon={<i.DislikeOutlined />}/>
                    </a.Col>
                    <a.Col>
                        {props.nextLessonId !== undefined ?
                            <a.Button size="large" icon={<i.RightOutlined />}>
                                Следующий урок
                            </a.Button> :
                            <a.Button size="large">
                                Закончить курс
                            </a.Button>
                        }
                    </a.Col>
                </a.Row>
            </a.Col>

            <a.Col span={24}>
                <CommentsSection comments={props.lesson.comments!} createComment={(text) => props.createComment({lessonId: props.lesson.id!, text: text})}/>
            </a.Col>
        </a.Row>


    </>
}

interface IProps {
    lesson: LessonEntity;
    nextLessonId: number | undefined;
    validateQuiz(command: ValidateQuizCommand): void;
    createComment(command: CreateCommentCommand): void;
}

export default ContentPage
