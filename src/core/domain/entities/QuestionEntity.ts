import {QuestionType} from "../enum/question";
import {AnswerEntity} from "./AnswerEntity";

export interface QuestionEntity {
    id?: number;
    type: QuestionType;
    value: string;
    score: number;
    answers: AnswerEntity[];
}
