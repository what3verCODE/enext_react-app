import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import {Link} from "react-router-dom";

function ALayoutHeader() {

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

export default ALayoutHeader
