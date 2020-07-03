import React, {useEffect} from 'react';
import {IRootState} from "../../../core/redux/reducers";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {LessonsActions} from "../../../core/redux/actions/lessons-actions";
import {GetLastVisitedLessonQuery} from "../../../core/domain/queries/LessonQueries";
import {useParams, useHistory} from 'react-router-dom';

function ContinuePage(props: IProps) {
    const {courseId} = useParams();
    const history = useHistory();

    useEffect(() => {
        if(courseId == null) history.push(`/`)

        props.getLastVisited({courseId: courseId})
    }, [])

    return <></>
}

interface IProps {
    getLastVisited(query: GetLastVisitedLessonQuery): void;
}

const mapStateToProps = (state: IRootState) => ({})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getLastVisited: (query: GetLastVisitedLessonQuery) => dispatch(LessonsActions.getLastVisitedLesson(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContinuePage)
