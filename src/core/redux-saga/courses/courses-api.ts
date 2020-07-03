import {apiInstance, ContentTypes} from "../../api";
import {GetToken} from "../../auth";
import {GetCourseByAuthorQuery, GetCourseQuery} from "../../domain/queries/CourseQueries";
import {
    CreateCourseCommand, DeleteCourseCommand, LikeCourseCommand,
    UpdateCourseInfoCommand,
    UpdateCourseScheduleCommand
} from "../../domain/commands/CourseCommands";

const prefix = 'courses';

export async function getSingleCourse(payload: GetCourseQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/${payload.courseId}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON
        }
    })
}

export async function getSingleCourseByAuthor(payload: GetCourseByAuthorQuery) {
    return apiInstance({
        method: 'get',
        url: `${prefix}/${payload.courseId}/authored`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function getAllCourses() {
    return apiInstance({
        method: 'get',
        url: `${prefix}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON
        }
    })
}

export async function getAllCoursesByAuthor() {
    return apiInstance({
        method: 'get',
        url: `${prefix}/authored`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function createCourse(payload: CreateCourseCommand) {
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

export async function updateCourseInfo(payload: UpdateCourseInfoCommand) {
    return apiInstance({
        method: 'put',
        url: `${prefix}/updateInfo/${payload.id}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        },
        data: payload
    })
}

export async function updateCourseSchedule(payload: UpdateCourseScheduleCommand) {
    return apiInstance({
        method: 'put',
        url: `${prefix}/updateSchedule/${payload.id}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        },
        data: payload
    })
}

export async function deleteCourse(payload: DeleteCourseCommand) {
    return apiInstance({
        method: 'delete',
        url: `${prefix}/${payload.courseId}`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}

export async function likeCourse(payload: LikeCourseCommand) {
    return apiInstance({
        method: 'post',
        url: `${prefix}/${payload.courseId}/like`,
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
            Authorization: `Bearer ${GetToken()}`
        }
    })
}
