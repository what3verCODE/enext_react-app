import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import {IRootState} from "../../../core/redux/reducers";
import {connect} from "react-redux";
import {UserEntity} from "../../../core/domain/entities/UserEntity";
import {Dispatch} from 'redux';
import {Link} from "react-router-dom";
import {IdentityActions} from "../../../core/redux/actions/identity-actions";
import {LogoutCommand} from "../../../core/domain/commands/IdentityCommands";
import {GetRefreshToken} from "../../../core/auth";
import {getName, isAuthenticated} from "../../../common/helper-functions";

function BLayoutHeader(props: IProps) {
    const {SubMenu} = a.Menu;

    if (isAuthenticated(props.me)) {
        return <a.Menu
            theme={"dark"}
            mode={"horizontal"}
            style={{maxHeight: '48px', lineHeight: '48px', float: 'right'}}
        >
            <a.Menu.Item key="navMenu:1" style={{padding: '0 1rem'}}>
                <span>Главная</span>
                <Link to={`/`}/>
            </a.Menu.Item>
            <a.Menu.Item key="navMenu:2" style={{padding: '0 1rem'}}>
                <span>Курсы</span>
                <Link to={`/courses`}/>
            </a.Menu.Item>
            <a.Menu.Item key="navMenu:3" style={{padding: '0 1rem'}}>
                <span>Помощь</span>
                <Link to={`/help`}/>
            </a.Menu.Item>

            <SubMenu icon={<i.UserOutlined/>} title={getName(props.me)}
                     style={{padding: '0 0 0 1rem'}}>
                <a.Menu.Item key="userMenu:1">
                    <span>Профиль</span>
                    <Link to={`/profile`}/>
                </a.Menu.Item>
                <a.Menu.Item key="userMenu:2">
                    <span>Мои курсы</span>
                    <Link to={`/my-courses`}/>
                </a.Menu.Item>
                <a.Menu.Item key="userMenu:3">
                    <span>Настройки</span>
                    <Link to={`/settings`}/>
                </a.Menu.Item>
                <a.Menu.Item key="userMenu:4">
                    <span>Преподавание</span>
                    <Link to={`/teach/courses`}/>
                </a.Menu.Item>
                <a.Menu.Item key="userMenu:5"
                             onClick={() => {
                                 const refreshToken = GetRefreshToken();
                                 if (refreshToken != null)
                                     props.logout({refreshToken: refreshToken})
                             }}
                >
                    Выйти
                </a.Menu.Item>
            </SubMenu>
        </a.Menu>
    } else {
        return <a.Menu
            theme={"dark"}
            mode={"horizontal"}
            style={{maxHeight: '48px', lineHeight: '48px', float: 'right'}}
        >
            <a.Menu.Item key="navMenu:1" style={{padding: '0 1rem'}}>
                <span>Главная</span>
                <Link to={`/`}/>
            </a.Menu.Item>
            <a.Menu.Item key="navMenu:2" style={{padding: '0 1rem'}}>
                <span>Курсы</span>
                <Link to={`/courses`}/>
            </a.Menu.Item>
            <a.Menu.Item key="navMenu:3" style={{padding: '0 1rem'}}>
                <span>Помощь</span>
                <Link to={`/help`}/>
            </a.Menu.Item>

            <a.Menu.Item key="authMenu:1" style={{padding: '0 1rem'}}>
                <span>Войти</span>
                <Link to={`/identity/login`}/>
            </a.Menu.Item>
            <a.Menu.Item key="authMenu:2" style={{padding: '0 1rem'}}>
                <span>Зарегистрироваться</span>
                <Link to={`/identity/register`}/>
            </a.Menu.Item>
        </a.Menu>
    }
}

interface IProps {
    me: UserEntity;
    logout(command: LogoutCommand): void;
}



export default BLayoutHeader
