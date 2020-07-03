import {apiInstance, ContentTypes} from "../../api";
import {GetToken} from "../../auth";
import {
    GetLastVisitedLessonQuery,
    GetLessonQuery,
    GetLessonWithoutAnswersQuery
} from "../../domain/queries/LessonQueries";
import {LikeLessonCommand, UpdateLessonCommand} from "../../domain/commands/LessonCommands";

const prefix = 'lessons';

export async function getLastVisited(payload: GetLastVisitedLessonQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/${payload.courseId}/continue`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function getSingleLessonWithoutAnswers(payload: GetLessonWithoutAnswersQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/${payload.lessonId}/without-answers`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function getSingleLesson(payload: GetLessonQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/${payload.lessonId}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function updateLesson(payload: UpdateLessonCommand) {
    return apiInstance({
        method: 'put',
        url: `${prefix}/${payload.id}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        },
        data: payload
    })
}

export async function likeLesson(payload: LikeLessonCommand) {
    return apiInstance({
        method: 'post',
        url: `${prefix}/${payload.lessonId}/like`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}
