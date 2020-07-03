import {createAction} from "redux-actions";
import {
    GetLastVisitedLessonQuery,
    GetLessonQuery,
    GetLessonWithoutAnswersQuery
} from "../../domain/queries/LessonQueries";
import {LikeLessonCommand, UpdateLessonCommand} from "../../domain/commands/LessonCommands";
import {LessonEntity} from "../../domain/entities/LessonEntity";

enum Type {
    Set = '[LESSONS] SET',
    GetSingleWithoutAnswers = '[LESSONS] GET SINGLE WITHOUT ANSWERS',
    GetSingle = '[LESSONS] GET SINGLE',
    Update = '[LESSONS] UPDATE',
    Like = '[LESSONS] LIKE',
    GetLastVisited = '[LESSONS] GET LAST VISITED',
}

const setLesson = createAction<LessonEntity>(Type.Set);
const getSingleLesson = createAction<GetLessonQuery>(Type.GetSingle);
const getSingleLessonWithoutAnswers = createAction<GetLessonWithoutAnswersQuery>(Type.GetSingleWithoutAnswers);
const updateLesson = createAction<UpdateLessonCommand>(Type.Update);
const likeLesson = createAction<LikeLessonCommand>(Type.Like);
const getLastVisitedLesson = createAction<GetLastVisitedLessonQuery>(Type.GetLastVisited);

export const LessonsActions = {
    Type,

    setLesson,
    getSingleLesson,
    getSingleLessonWithoutAnswers,
    updateLesson,
    likeLesson,
    getLastVisitedLesson,
};

export type LessonsActions = Omit<typeof LessonsActions, 'Type'>;
