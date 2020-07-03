import {handleActions} from "redux-actions";
import {IdentityActions} from "../actions/identity-actions";
import {UserEntity} from "../../domain/entities/UserEntity";

const singleState = null;

export const IdentityReducer = handleActions<UserEntity | null, UserEntity>({
    [IdentityActions.Type.Set]: (state, action) => action.payload,
}, singleState);
