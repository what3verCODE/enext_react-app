export interface ValidateQuizCommand {
    id: number;
    questions: ValidateQuizCommand_Question[];
}

interface ValidateQuizCommand_Question {
    id: number;
    answers: ValidateQuizCommand_Answer[];
}

interface ValidateQuizCommand_Answer {
    id: number;
    isSelected: boolean;
}
