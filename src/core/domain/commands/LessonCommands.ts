import {QuestionType} from "../enum/question";
import {LessonSectionType} from "../enum/lesson-section";

export interface UpdateLessonCommand {
    id: number;
    title: string;
}

interface UpdateLessonCommand_Section {
    id: number;
    type: LessonSectionType;
    text: string;
    videoUrl: string;
    quiz: UpdateLessonCommand_Quiz;
}

interface UpdateLessonCommand_Quiz {
    id: number;
    maxAttempts: number;
    questions: UpdateLessonCommand_Question[]
}

interface UpdateLessonCommand_Question {
    id: number;
    type: QuestionType;
    value: string;
    score: number;
    answers: UpdateLessonCommand_Answer[];
}

interface UpdateLessonCommand_Answer {
    id: number;
    value: string;
    isCorrect: boolean;
}

export interface LikeLessonCommand {
    lessonId: number;
}
