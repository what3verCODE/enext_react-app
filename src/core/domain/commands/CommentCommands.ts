export interface CreateCommentCommand {
    lessonId: number;
    text: string;
}

export interface CreateCommentReplyCommand {
    lessonId: number;
    text: string;
    rootCommentId: number;
}

export interface UpdateCommentCommand {
    
}

export interface DeleteCommentCommand {
    
}
