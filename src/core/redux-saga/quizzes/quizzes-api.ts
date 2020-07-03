import {apiInstance, ContentTypes} from "../../api";
import {GetToken} from "../../auth";
import {ValidateQuizCommand} from "../../domain/commands/QuizCommands";

const prefix = 'quizzes';

export async function validateQuiz(payload: ValidateQuizCommand) {
    return apiInstance({
        method: 'post',
        url: `${prefix}/${payload.id}/validate`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        },
        data: payload
    })
}
