import {handleActions} from "redux-actions";
import {ProgressesActions} from "../actions/progresses-actions";
import {ProgressEntity} from "../../domain/entities/ProgressEntity";

const singleState = null;
const allState = null;

export const ProgressReducer = handleActions<ProgressEntity | null, ProgressEntity>({
    [ProgressesActions.Type.SetSingle]: (state, action) => action.payload,
}, singleState);

export const ProgressesReducer = handleActions<ProgressEntity[] | null, ProgressEntity[]>({
    [ProgressesActions.Type.SetAll]: (state, action) => action.payload,
}, allState);
