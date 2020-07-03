import {createAction} from "redux-actions";
import {ValidateQuizCommand} from "../../domain/commands/QuizCommands";

enum Type {
    Validate = '[QUIZZES] Validate',
}

const validate = createAction<ValidateQuizCommand>(Type.Validate);

export const QuizzesActions = {
    Type,

    validate
};

export type QuizzesActions = Omit<typeof QuizzesActions, 'Type'>;
