import { all } from 'redux-saga/effects';
import coursesSaga from "./courses/courses-saga";
import identitySaga from "./identity/identity-saga";
import lessonsSaga from "./lessons/lessons-saga";
import progressesSaga from "./progresses/progresses-saga";
import quizzesSaga from "./quizzes/quizzes-saga";
import commentsSaga from "./comments/comments-saga";


export default function* sagas() {
    yield all([
        coursesSaga(),
        identitySaga(),
        lessonsSaga(),
        progressesSaga(),
        quizzesSaga(),
        commentsSaga()
    ]);
}
