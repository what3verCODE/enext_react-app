export interface CreateCourseCommand {
    title: string;
}

export interface UpdateCourseInfoCommand {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    targetAudience: string;
    charge: string;
    avatar: string;
}

export interface UpdateCourseScheduleCommand {
    id: number;
    modules: UpdateCourseScheduleCommand_Module[]
}

interface UpdateCourseScheduleCommand_Module {
    id: number;
    title: string;
    lessons: UpdateCourseScheduleCommand_Lesson[]
}

interface UpdateCourseScheduleCommand_Lesson {
    id: number;
    title: string;
}

export interface DeleteCourseCommand {
    courseId: number;
}

export interface LikeCourseCommand {
    courseId: number;
}
