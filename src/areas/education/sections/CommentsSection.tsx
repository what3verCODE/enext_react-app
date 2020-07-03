import React, {ReactNode} from 'react';
import {CommentEntity} from "../../../core/domain/entities/CommentEntity";
import Comment from "../_education-components/comment";
import {UserEntity} from "../../../core/domain/entities/UserEntity";
import CommentEditor from "../_education-components/comment-editor";

function CommentsSection(props: IProps) {
    function getFullName(user: UserEntity) {
        return user.lastName + " " + user.firstName + " " + user.middleName;
    }

    return <>
        {props.comments != null && props.comments.map((comment, index) => {
            return <Comment author={getFullName(comment.author)} text={comment.text} key={"comment:" + index}/>
        })}

        <CommentEditor createComment={(text) => props.createComment(text)}/>
    </>
}

interface IProps {
    comments: CommentEntity[];
    createComment(text: string): void;
}

export default CommentsSection
