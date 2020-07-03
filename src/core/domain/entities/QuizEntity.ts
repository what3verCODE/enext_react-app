import {QuestionEntity} from "./QuestionEntity";

export interface QuizEntity {
    id?: number;
    maxAttempts: number;
    questions: QuestionEntity[];
}

