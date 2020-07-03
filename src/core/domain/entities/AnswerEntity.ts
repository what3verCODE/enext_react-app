export interface AnswerEntity {
    id?: number;
    value: string;
    isCorrect: boolean;

    isSelected?: boolean;
    wrong?: boolean;
}
