import React, {Suspense, useEffect} from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import {history} from '../core/redux';

import {Base} from "../areas/base";
import {Authentication} from "../areas/authentication";
import {TeacherBoard} from "../areas/teacher-board";
import {AdministatorBoard} from "../areas/admin-board";
import {Education} from "../areas/education";

import { Spin, Space } from 'antd';
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {GetJWT} from "../core/auth";
import {IdentityActions} from "../core/redux/actions/identity-actions";
import {IRootState} from "../core/redux/reducers";

const Fallback = () => {
    return <Space size="middle"
                  style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)'
                  }}>
        <Spin size="large" />
    </Space>;
};

function AppRouter(props: IProps) {

    useEffect(() => {
        if(GetJWT() != null) {
            props.me()
        }
    })

    return <Router history={history}>
        <Suspense fallback={<Fallback />}>
            <Switch>
                <Route {...Base.HomePage} />
                <Route {...Authentication.LoginPage} />
                <Route {...Authentication.RegisterPage} />

                <Route {...Base.CoursesPage} />
                <Route {...Base.CourseDetailsPage}/>

                <Route {...Base.ProfilePage} />
                <Route {...Base.MyCoursesPage} />
                <Route {...Base.SettingsPage} />

                <Route {...Base.UsersPage} />

                <Route {...Education.ContinuePage} />
                <Route {...Education.ContentPage} />

                <Route {...TeacherBoard.HomePage} />
                <Route {...TeacherBoard.CoursesPage} />
                <Route {...TeacherBoard.CoursePage} />
                <Route {...TeacherBoard.CourseDetailedStatistics} />
                <Route {...TeacherBoard.CourseEditInfoPage} />
                <Route {...TeacherBoard.CourseEditSchedulePage} />
                <Route {...TeacherBoard.LessonEditPage} />

                <Route {...AdministatorBoard.HomePage}/>

                <Redirect to={'/'} />
            </Switch>
        </Suspense>
    </Router>
}

interface IProps {
    me(): void;
}

const mapStateToProps = (state: IRootState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    me:() => dispatch(IdentityActions.me()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)
