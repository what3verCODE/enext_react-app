import {Action} from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import {CoursesActions} from "../../redux/actions/courses-actions";
import {GetCourseByAuthorQuery, GetCourseQuery} from "../../domain/queries/CourseQueries";
import {
    CreateCourseCommand, DeleteCourseCommand, LikeCourseCommand,
    UpdateCourseInfoCommand,
    UpdateCourseScheduleCommand
} from "../../domain/commands/CourseCommands";
import {
    createCourse, deleteCourse,
    getAllCourses,
    getAllCoursesByAuthor,
    getSingleCourse,
    getSingleCourseByAuthor, likeCourse, updateCourseInfo, updateCourseSchedule
} from "./courses-api";
import {push} from "react-router-redux";
import {CourseEntity} from "../../domain/entities/CourseEntity";
import {message} from "antd";

function* GetSingleCourseWorker(action: Action<GetCourseQuery>) {
    try {
        const response = yield call(getSingleCourse, action.payload);

        if(response.status === 200) {
            const data = response.data as CourseEntity;
            yield put(CoursesActions.setCourse({...data}));
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetSingleCourseByAuthorWorker(action: Action<GetCourseByAuthorQuery>) {
    try {
        const response = yield call(getSingleCourseByAuthor, action.payload);

        if(response.status === 200) {
            const data = response.data as CourseEntity;
            yield put(CoursesActions.setCourse({...data}));
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetAllCoursesWorker() {
    try {
        const response = yield call(getAllCourses);

        if(response.status === 200) {
            const data = response.data as CourseEntity[];
            yield put(CoursesActions.setCourses([...data]));
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetAllCoursesByAuthorWorker() {
    try {
        const response = yield call(getAllCoursesByAuthor);

        if(response.status === 200) {
            const data = response.data as CourseEntity[];
            yield put(CoursesActions.setCourses([...data]));
        }
    } catch (e) {
        console.error(e);
    }
}

function* CreateCourseWorker(action: Action<CreateCourseCommand>) {
    try {
        const response = yield call(createCourse, action.payload);

        if(response.status === 200) {
            yield put(push(`/teach/course/${response.data}`));
        }
    } catch (e) {
        console.error(e);
    }
}

function* UpdateCourseInfoWorker(action: Action<UpdateCourseInfoCommand>) {
    try {
        message.loading('Выполняется обновление информации о курсе...')
        const response = yield call(updateCourseInfo, action.payload);

        if(response.status === 200) {
            const data = response.data as CourseEntity;
            yield put(CoursesActions.setCourse({...data}));
            message.success('Информация о курсе успешно обновлена')
        }
    } catch (e) {
        message.error('При выполнении операции возникла ошибка. Попробуйте повторить операцию позже.')
        console.error(e);
    }
}

function* UpdateCourseScheduleWorker(action: Action<UpdateCourseScheduleCommand>) {
    try {
        message.loading('Выполняется обновление содержания курса...')
        const response = yield call(updateCourseSchedule, action.payload);

        if(response.status === 200) {
            const data = response.data as CourseEntity;
            yield put(CoursesActions.setCourse({...data}));
            message.success('Содержание курса успешно обновлено')
        }
    } catch (e) {
        message.error('При выполнении операции возникла ошибка. Попробуйте повторить операцию позже.')
        console.error(e);
    }
}

function* DeleteCourseWorker(action: Action<DeleteCourseCommand>) {
    try {
        const response = yield call(deleteCourse, action.payload);

        if(response.status === 200) {
            yield put(push(`/teach/courses`));
        }
    } catch (e) {
        console.error(e);
    }
}

function* LikeCourseWorker(action: Action<LikeCourseCommand>) {
    try {
        const response = yield call(likeCourse, action.payload);

        if(response.status === 200) {

        }
    } catch (e) {
        console.error(e);
    }
}

export default function* coursesSaga() {
    yield takeLatest(CoursesActions.getSingleCourse,GetSingleCourseWorker);
    yield takeLatest(CoursesActions.getSingleCourseByAuthor,GetSingleCourseByAuthorWorker);
    yield takeLatest(CoursesActions.getAllCourses,GetAllCoursesWorker);
    yield takeLatest(CoursesActions.getAllCoursesByAuthor,GetAllCoursesByAuthorWorker);
    yield takeLatest(CoursesActions.createCourse,CreateCourseWorker);
    yield takeLatest(CoursesActions.updateCourseInfo,UpdateCourseInfoWorker);
    yield takeLatest(CoursesActions.updateCourseSchedule,UpdateCourseScheduleWorker);
    yield takeLatest(CoursesActions.deleteCourse,DeleteCourseWorker);
    yield takeLatest(CoursesActions.likeCourse,LikeCourseWorker);
}
