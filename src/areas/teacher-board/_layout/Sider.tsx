import React, {useState} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import {Link} from "react-router-dom";

interface IProps {
    openModal(): void;
}

function TLayoutSider(props: IProps) {


    const { SubMenu } = a.Menu;

    return <a.Menu
        theme={"dark"}
        mode={"inline"}
        style={{height: '100%', borderRight: 0, paddingTop: '.25rem', borderTop: '.5px solid #cecece'}}
    >
        <a.Menu.Item key="sideMenu:1"
                     icon={<i.ReadOutlined />}
        >
            <span>Курсы</span>
            <Link to={`/teach/courses`}/>
        </a.Menu.Item>
        <a.Menu.Item key="sideMenu:2"
                     icon={<i.TeamOutlined />}
        >
            <span>Классы</span>
            <Link to={`/teach/classes`} />
        </a.Menu.Item>
        <a.Menu.Item key="sideMenu:3"
                     icon={<i.PlusOutlined />}
                     onClick={() => props.openModal()}>
            Создать курс
        </a.Menu.Item>

        <SubMenu key="submenu_3" title="Администрирование">
            <a.Menu.Item key="submenu:3:1">Opt1</a.Menu.Item>
            <a.Menu.Item key="submenu:3:2">Opt1</a.Menu.Item>
            <a.Menu.Item key="submenu:3:3">Opt1</a.Menu.Item>
            <a.Menu.Item key="submenu:3:4">Opt1</a.Menu.Item>
        </SubMenu>
    </a.Menu>
}

export default TLayoutSider
