import {CreateCommentCommand} from "../../domain/commands/CommentCommands";
import {apiInstance, ContentTypes} from "../../api";
import {GetToken} from "../../auth";
import {GetCommentsQuery} from "../../domain/queries/CommentQueries";

const prefix = 'comments'

export async function createComment(payload: CreateCommentCommand)  {
    return apiInstance({
        method: 'post',
        url: `${prefix}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        },
        data: payload
    })
}

export async function getAll(payload: GetCommentsQuery)  {
    return apiInstance({
        method: 'get',
        url: `${prefix}/${payload.lessonId}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}
