import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import BLayout from "../_layout/Layout";
import {Link} from "react-router-dom";

function ProfilePage(){
    const { Title, Text } = a.Typography;

    return <BLayout>
        <div className="conteinerized-content">
            <a.Row gutter={[8, 8]} justify="space-between" style={{paddingTop: '5rem'}}>
                <a.Col span={5}>
                    <a.Menu
                        mode={"inline"}
                        defaultSelectedKeys={['profilenav:1']}
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
                    <a.Row>
                        <a.Col span={5}>
                            <a.Avatar shape="square" size={128} icon={<i.UserOutlined />}/>
                        </a.Col>

                        <a.Col span={18}>
                            <Title>Нохрин Александр Николаевич</Title>

                            <Title level={3}>О себе</Title>
                            <Text>Какой то текст о себе....</Text>
                        </a.Col>

                        <a.Col span={24} style={{paddingTop: '1.4rem'}}>
                            <Title level={3}>Активность</Title>
                        </a.Col>
                    </a.Row>
                </a.Col>
            </a.Row>
        </div>
    </BLayout>
}

export default ProfilePage
