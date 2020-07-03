export interface GetProgressQuery {
    progressId: number;
}

export interface GetProgressesQuery {
    courseId: number;
}

export interface GetProgressesByCurrentUserQuery {
    courseId: number;
}

export interface GetProgressesByUserQuery {
    courseId: number;
    userId: string;
}
