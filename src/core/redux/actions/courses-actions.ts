import {createAction} from "redux-actions";
import {GetCourseByAuthorQuery, GetCourseQuery} from "../../domain/queries/CourseQueries";
import {
    CreateCourseCommand, DeleteCourseCommand, LikeCourseCommand,
    UpdateCourseInfoCommand,
    UpdateCourseScheduleCommand
} from "../../domain/commands/CourseCommands";
import {CourseEntity} from "../../domain/entities/CourseEntity";

enum Type {
    SetSingle = '[COURSES] SET SINGLE',
    SetAll = '[COURSES] SET ALL',
    GetSingle = '[COURSES] GET SINGLE',
    GetSingleByAuthor = '[COURSES] GET SINGLE BY AUTHOR',
    GetAll = '[COURSES] GET ALL',
    GetAllByAuthor = '[COURSES] GET ALL BY AUTHOR',
    Create = '[COURSES] CREATE',
    UpdateInfo = '[COURSES] UPDATE INFO',
    UpdateSchedule = '[COURSES] UPDATE SCHEDULE',
    Delete = '[COURSES] DELETE',
    Like = '[COURSES] LIKE',
}

const setCourse = createAction<CourseEntity>(Type.SetSingle);
const setCourses = createAction<CourseEntity[]>(Type.SetAll);
const getSingleCourse = createAction<GetCourseQuery>(Type.GetSingle);
const getSingleCourseByAuthor = createAction<GetCourseByAuthorQuery>(Type.GetSingleByAuthor);
const getAllCourses = createAction(Type.GetAll);
const getAllCoursesByAuthor = createAction(Type.GetAllByAuthor);
const createCourse = createAction<CreateCourseCommand>(Type.Create);
const updateCourseInfo = createAction<UpdateCourseInfoCommand>(Type.UpdateInfo);
const updateCourseSchedule = createAction<UpdateCourseScheduleCommand>(Type.UpdateSchedule);
const deleteCourse = createAction<DeleteCourseCommand>(Type.Delete);
const likeCourse = createAction<LikeCourseCommand>(Type.Like);

export const CoursesActions = {
    Type,

    setCourse,
    setCourses,
    getSingleCourse,
    getSingleCourseByAuthor,
    getAllCourses,
    getAllCoursesByAuthor,
    createCourse,
    updateCourseInfo,
    updateCourseSchedule,
    deleteCourse,
    likeCourse,
};

export type CoursesActions = Omit<typeof CoursesActions, 'Type'>;
