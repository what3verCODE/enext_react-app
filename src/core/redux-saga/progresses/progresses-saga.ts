import { takeLatest, call, put } from "redux-saga/effects";
import {ProgressesActions} from "../../redux/actions/progresses-actions";
import {
    getAllProgresses,
    getAllProgressesByCurrentUser,
    getAllProgressesByUser,
    getSingleProgress
} from "./progresses-api";
import {Action} from "redux-actions";
import {
    GetProgressesByCurrentUserQuery, GetProgressesByUserQuery,
    GetProgressesQuery,
    GetProgressQuery
} from "../../domain/queries/ProgressQueries";
import {ProgressEntity} from "../../domain/entities/ProgressEntity";

function* GetSingleProgressWorker(action: Action<GetProgressQuery>) {
    try {
        const response = yield call(getSingleProgress, action.payload)

        if(response.status === 200) {
            const data = response.data as ProgressEntity;
            yield put(ProgressesActions.setProgress({...data}));
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetAllProgressesWorker(action: Action<GetProgressesQuery>) {
    try {
        const response = yield call(getAllProgresses, action.payload)

        if(response.status === 200) {
            const data = response.data as ProgressEntity[];
            yield put(ProgressesActions.setProgresses([...data]));
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetAllProgressesByCurrentUserWorker(action: Action<GetProgressesByCurrentUserQuery>) {
    try {
        const response = yield call(getAllProgressesByCurrentUser, action.payload)

        if(response.status === 200) {
            const data = response.data as ProgressEntity[];
            yield put(ProgressesActions.setProgresses([...data]));
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetAllProgressesByUserWorker(action: Action<GetProgressesByUserQuery>) {
    try {
        const response = yield call(getAllProgressesByUser, action.payload)

        if(response.status === 200) {
            const data = response.data as ProgressEntity[];
            yield put(ProgressesActions.setProgresses([...data]));
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* progressesSaga() {
    yield takeLatest(ProgressesActions.getSingle,GetSingleProgressWorker);
    yield takeLatest(ProgressesActions.getAll,GetAllProgressesWorker);
    yield takeLatest(ProgressesActions.getAllByCurrentUser,GetAllProgressesByCurrentUserWorker);
    yield takeLatest(ProgressesActions.getAllByUser,GetAllProgressesByUserWorker);
}
