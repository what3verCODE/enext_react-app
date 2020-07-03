import {LessonSectionType} from "../enum/lesson-section";
import {QuizEntity} from "./QuizEntity";

export interface SectionEntity {
    id?: number;
    type: LessonSectionType;
    text?: string;
    videoUrl?: string;
    quiz?: QuizEntity;
}
