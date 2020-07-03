import {createAction} from "redux-actions";
import {GetCommentsQuery} from "../../domain/queries/CommentQueries";
import {CreateCommentCommand} from "../../domain/commands/CommentCommands";

enum Type {
    GetAll = '[COMMENTS] GET ALL',
    Create = '[COMMENTS] CREATE',
    CreateReply = '[COMMENTS] CREATE REPLY',
    Update = '[COMMENTS] UPDATE',
    Like = '[COMMENTS] LIKE',
}

const getComments = createAction<GetCommentsQuery>(Type.GetAll);
const createComment = createAction<CreateCommentCommand>(Type.Create);
const createReply = createAction(Type.CreateReply);
const updateComment = createAction(Type.Update);
const likeComment = createAction(Type.Like);

export const CommentsActions = {
    Type,

    getComments,
    createComment,
    createReply,
    updateComment,
    likeComment
};

export type CommentsActions = Omit<typeof CommentsActions, 'Type'>;
