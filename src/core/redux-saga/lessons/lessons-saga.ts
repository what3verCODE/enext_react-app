import { takeLatest, call, put } from "redux-saga/effects";
import {Action} from "redux-actions";
import {LessonsActions} from "../../redux/actions/lessons-actions";
import {
    GetLastVisitedLessonQuery,
    GetLessonQuery,
    GetLessonWithoutAnswersQuery
} from "../../domain/queries/LessonQueries";
import {getLastVisited, getSingleLesson, getSingleLessonWithoutAnswers, likeLesson, updateLesson} from "./lessons-api";
import {LikeLessonCommand, UpdateLessonCommand} from "../../domain/commands/LessonCommands";
import {push} from "react-router-redux";
import {LessonEntity} from "../../domain/entities/LessonEntity";
import { message } from "antd";

function* GetLastVisitedWorker(action: Action<GetLastVisitedLessonQuery>) {
    try {
        const response = yield call(getLastVisited, action.payload);

        if(response.status === 200) {
            yield put(push(`/education/${action.payload.courseId}/lesson/${response.data}`))
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetSingleLessonWithoutAnswersWorker(action: Action<GetLessonWithoutAnswersQuery>) {
    try {
        const response = yield call(getSingleLessonWithoutAnswers, action.payload);

        if(response.status === 200) {
            const data = response.data as LessonEntity;
            yield put(LessonsActions.setLesson({...data}))
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetSingleLessonWorker(action: Action<GetLessonQuery>) {
    try {
        const response = yield call(getSingleLesson, action.payload);

        if(response.status === 200) {
            const data = response.data as LessonEntity;
            yield put(LessonsActions.setLesson({...data}));
        }
    } catch (e) {
        console.error(e);
    }
}

function* UpdateLessonWorker(action: Action<UpdateLessonCommand>) {
    try {
        message.loading('Выполняется обновление урока...')
        const response = yield call(updateLesson, action.payload);

        if(response.status === 200) {
            const data = response.data as LessonEntity;
            yield put(LessonsActions.setLesson({...data}));
            message.success('Урок успешно обновлен')
        }
    } catch (e) {
        message.error('Произошла ошибка. Попробуйте повторить операцию позже!')
        console.error(e);
    }
}

function* LikeLessonWorker(action: Action<LikeLessonCommand>) {
    try {
        const response = yield call(likeLesson, action.payload);

        if(response.status === 200) {

        }
    } catch (e) {
        console.error(e);
    }
}

export default function* lessonsSaga() {
    yield takeLatest(LessonsActions.getLastVisitedLesson,GetLastVisitedWorker);
    yield takeLatest(LessonsActions.getSingleLessonWithoutAnswers,GetSingleLessonWithoutAnswersWorker);
    yield takeLatest(LessonsActions.getSingleLesson,GetSingleLessonWorker);
    yield takeLatest(LessonsActions.updateLesson,UpdateLessonWorker);
    yield takeLatest(LessonsActions.likeLesson,LikeLessonWorker);
}
