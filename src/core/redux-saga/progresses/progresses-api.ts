import {apiInstance, ContentTypes} from "../../api";
import {GetToken} from "../../auth";
import {
    GetProgressesByCurrentUserQuery, GetProgressesByUserQuery,
    GetProgressesQuery,
    GetProgressQuery
} from "../../domain/queries/ProgressQueries";

const prefix = 'progresses';

export async function getSingleProgress(payload: GetProgressQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/single/${payload.progressId}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function getAllProgresses(payload: GetProgressesQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/all/${payload.courseId}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function getAllProgressesByCurrentUser(payload: GetProgressesByCurrentUserQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/all/${payload.courseId}/currentUser`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function getAllProgressesByUser(payload: GetProgressesByUserQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/all/${payload.courseId}/${payload.userId}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}
