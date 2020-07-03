import React from 'react';
import * as a from "antd";
import * as i from '@ant-design/icons';

function ELayoutHeader() {
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

        <SubMenu icon={<i.UserOutlined />} title='Александр' style={{ padding: '0 0 0 1rem'}}>
            <a.Menu.Item key="usermenu:1">Профиль</a.Menu.Item>
            <a.Menu.Item key="usermenu:2">Мои курсы</a.Menu.Item>
            <a.Menu.Item key="usermenu:3">Уведомления</a.Menu.Item>
            <a.Menu.Item key="usermenu:4">Настройки</a.Menu.Item>
            <a.Menu.Item key="usermenu:5">Выйти</a.Menu.Item>
        </SubMenu>
    </a.Menu>
}

export default ELayoutHeader
