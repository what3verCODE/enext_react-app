import {createAction} from "redux-actions";
import {ProgressEntity} from "../../domain/entities/ProgressEntity";
import {
    GetProgressesByCurrentUserQuery, GetProgressesByUserQuery,
    GetProgressesQuery,
    GetProgressQuery
} from "../../domain/queries/ProgressQueries";

enum Type {
    SetSingle = '[PROGRESSES] SET SINGLE',
    SetAll = '[PROGRESSES] SET ALL',
    GetSingle = '[PROGRESSES] GET SINGLE',
    GetAll = '[PROGRESSES] GET ALL',
    GetAllByCurrentUser = '[PROGRESSES] GET ALL BY CURRENT USER',
    GetAllByUser = '[PROGRESSES] GET ALL BY USER',
}

const setProgress = createAction<ProgressEntity>(Type.SetSingle);
const setProgresses = createAction<ProgressEntity[]>(Type.SetAll);
const getSingle = createAction<GetProgressQuery>(Type.GetSingle)
const getAll = createAction<GetProgressesQuery>(Type.GetAll);
const getAllByCurrentUser = createAction<GetProgressesByCurrentUserQuery>(Type.GetAllByCurrentUser);
const getAllByUser = createAction<GetProgressesByUserQuery>(Type.GetAllByUser);

export const ProgressesActions = {
    Type,

    setProgress,
    setProgresses,
    getSingle,
    getAll,
    getAllByCurrentUser,
    getAllByUser,
};

export type ProgressesActions = Omit<typeof ProgressesActions, 'Type'>;
