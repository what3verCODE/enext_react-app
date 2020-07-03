import {SectionEntity} from "./SectionEntity";
import {CommentEntity} from "./CommentEntity";

export interface LessonEntity {
    id?: number;
    title: string;
    manualChecking: boolean;
    sections?: SectionEntity[];
    comments?: CommentEntity[];
}
