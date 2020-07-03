import {LessonEntity} from "./LessonEntity";

export interface ModuleEntity {
    id?: number;
    title: string;
    lessons: LessonEntity[];
}

