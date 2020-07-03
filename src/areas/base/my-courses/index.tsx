import React from 'react';
import * as a from 'antd';
import BLayout from "../_layout/Layout";
import {Link} from "react-router-dom";

function MyCoursesPage() {

    return <BLayout>
        <div className="conteinerized-content">
            <a.Row gutter={[8, 8]} justify="space-between" style={{paddingTop: '5rem'}}>
                <a.Col span={5}>
                    <a.Menu
                        mode={"inline"}
                        defaultSelectedKeys={['profilenav:2']}
                    >
                        <a.Menu.Item key="profilenav:1" style={{ padding: '0 1rem'}}>
                            <Link to={`/profile`}>Профиль</Link>
                        </a.Menu.Item>
                        <a.Menu.Item key="profilenav:2" style={{ padding: '0 1rem'}}>
                            <Link to={`/my-courses`}>Мои курсы</Link>
                        </a.Menu.Item>
                        <a.Menu.Item key="profilenav:3" style={{ padding: '0 1rem'}}>
                            Сообщения
                        </a.Menu.Item>
                        <a.Menu.Item key="profilenav:4" style={{ padding: '0 1rem'}}>
                            <Link to={`/settings`}>Настройки</Link>
                        </a.Menu.Item>
                    </a.Menu>
                </a.Col>

                <a.Col span={18} style={{margin: '0 auto'}}>

                </a.Col>
            </a.Row>
        </div>
    </BLayout>
}

export default MyCoursesPage
