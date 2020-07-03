import {ModuleEntity} from "./ModuleEntity";
import {UserEntity} from "./UserEntity";

export interface CourseEntity {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    targetAudience: string;
    charge: string;
    avatar: string;
    likes: number;
    lastModifiedBy: string;
    lastModifiedAt: string;
    modules: ModuleEntity[];
    authors: UserEntity[];
}

