import { takeLatest, call, put, select } from "redux-saga/effects";
import {QuizzesActions} from "../../redux/actions/quizzes-actions";
import {ValidateQuizCommand} from "../../domain/commands/QuizCommands";
import {Action} from "redux-actions";
import {validateQuiz} from "./quizzes-api";
import {QuizEntity} from "../../domain/entities/QuizEntity";
import {IRootState} from "../../redux/reducers";
import {LessonsActions} from "../../redux/actions/lessons-actions";

function* ValidateQuizWorker(action: Action<ValidateQuizCommand>) {
    try {
        const response = yield call(validateQuiz, action.payload);

        if(response.status === 200) {
            const data = response.data as QuizEntity;

            const state = yield select((state: IRootState) => state.lesson);

            let sections = [...state.sections];
            sections = sections.map((section, index) => {
                if(section.quiz != null && section.quiz.id === action.payload.id) {
                    section.quiz = {...data};
                }

                return section;
            })

            yield put(LessonsActions.setLesson({...state, sections: [...sections]}))
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* quizzesSaga() {
    yield takeLatest(QuizzesActions.validate, ValidateQuizWorker);
}
