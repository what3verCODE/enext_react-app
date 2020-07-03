import {UserEntity} from "./UserEntity";

export interface CommentEntity {
    id: number;
    author: UserEntity;
    text: string;
    writtenAt: Date;
    replies?: CommentEntity[];

    likes: number;
}
