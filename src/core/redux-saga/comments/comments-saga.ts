import {CommentsActions} from "../../redux/actions/comments-actions";
import { takeLatest, call, put, select } from "redux-saga/effects";
import {Action} from "redux-actions";
import {CreateCommentCommand} from "../../domain/commands/CommentCommands";
import {GetCommentsQuery} from "../../domain/queries/CommentQueries";
import {createComment, getAll} from "./comments-api";
import {LessonsActions} from "../../redux/actions/lessons-actions";
import {IRootState} from "../../redux/reducers";
import {CommentEntity} from "../../domain/entities/CommentEntity";

function* CreateCommentWorker(action: Action<CreateCommentCommand>) {
    try {
        const response = yield call(createComment, action.payload);

        if(response.status === 200) {
            yield put(CommentsActions.getComments({lessonId: action.payload.lessonId}))
        }
    } catch (e) {
        console.error(e);
    }
}

function* GetCommentsWorker(action: Action<GetCommentsQuery>) {
    try {
        const response = yield call(getAll, action.payload);

        if(response.status === 200) {
            const state = yield select((state: IRootState) => state.lesson);

            const data = response.data as CommentEntity[];
            yield put(LessonsActions.setLesson({...state, comments: [...data]}))
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* commentsSaga () {
    yield takeLatest(CommentsActions.createComment, CreateCommentWorker);
    yield takeLatest(CommentsActions.getComments, GetCommentsWorker);
}
