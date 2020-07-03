import {UserEntity} from "./UserEntity";
import {LessonEntity} from "./LessonEntity";

export interface ProgressEntity {
    id: number;
    index: number;
    user: UserEntity;
    lesson: LessonEntity;
    progress: number;
    className: string;
    score: number;
    isVisited: boolean;
    manuallyChecked: boolean;
    attemptsCount: number;
    attemptsResult: string[];
}

