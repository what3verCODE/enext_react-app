import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import {getName} from "../../../common/helper-functions";
import {Link} from "react-router-dom";
import {GetRefreshToken} from "../../../core/auth";
import {UserEntity} from "../../../core/domain/entities/UserEntity";
import {LogoutCommand} from "../../../core/domain/commands/IdentityCommands";

function TLayoutHeader(props: IProps) {
    const { SubMenu } = a.Menu;

    return <a.Menu
        theme={"dark"}
        mode={"horizontal"}
        style={{maxHeight: '48px', lineHeight: '48px', float: 'right'}}
    >
        <a.Menu.Item key="navmenu:1" style={{ padding: '0 1rem'}}>Главная</a.Menu.Item>
        <a.Menu.Item key="navmenu:2" style={{ padding: '0 1rem'}}>Курсы</a.Menu.Item>
        <a.Menu.Item key="navmenu:3" style={{ padding: '0 1rem'}}>Помощь</a.Menu.Item>

        <a.Menu.Item key="notifications:menuitem">
            <a.Badge dot key="notification:badge">
                <i.NotificationOutlined key="notification:icon" />
            </a.Badge>
        </a.Menu.Item>

        <SubMenu icon={<i.UserOutlined />} title={props.me != null ? getName(props.me) : ""} style={{ padding: '0 0 0 1rem'}}>
            <a.Menu.Item key="userMenu:1">
                <span>Профиль</span>
                <Link to={`/profile`} />
            </a.Menu.Item>
            <a.Menu.Item key="userMenu:2">
                <span>Мои курсы</span>
                <Link to={`/my-courses`} />
            </a.Menu.Item>
            <a.Menu.Item key="userMenu:3">
                <span>Настройки</span>
                <Link to={`/settings`} />
            </a.Menu.Item>
            <a.Menu.Item key="userMenu:4">
                <span>Преподавание</span>
                <Link to={`/teach/courses`} />
            </a.Menu.Item>
            <a.Menu.Item key="userMenu:5"
                         onClick={() => {
                             const refreshToken = GetRefreshToken();
                             if(refreshToken != null)
                                 props.logout({refreshToken: refreshToken})
                         }}
            >
                Выйти
            </a.Menu.Item>
        </SubMenu>
    </a.Menu>
}

interface IProps {
    me: UserEntity;
    logout(command: LogoutCommand): void;
}

export default TLayoutHeader
