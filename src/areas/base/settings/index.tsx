import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import BLayout from "../_layout/Layout";

function SettingsPage() {
    const [editProfileForm] = a.Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    return <BLayout>
        <div className="conteinerized-content">
            <a.Row gutter={[8, 8]} justify="space-between" style={{paddingTop: '5rem'}}>
                <a.Col span={5}>
                    <a.Menu
                        mode={"inline"}
                        defaultSelectedKeys={['settingsnav:1']}
                    >
                        <a.Menu.Item key="settingsnav:1" style={{ padding: '0 1rem'}}>Редактировать профиль</a.Menu.Item>
                        <a.Menu.Item key="settingsnav:2" style={{ padding: '0 1rem'}}>Изменить почту</a.Menu.Item>
                        <a.Menu.Item key="settingsnav:3" style={{ padding: '0 1rem'}}>Изменить пароль</a.Menu.Item>
                        <a.Menu.Item key="settingsnav:4" style={{ padding: '0 1rem'}}>Уведомления</a.Menu.Item>
                    </a.Menu>
                </a.Col>

                <a.Col span={18} style={{margin: '0 auto'}}>
                    <a.Form
                        form={editProfileForm}
                        name='editProfileForm'
                        {...layout}
                        labelAlign="left"
                        size="large"
                    >
                        <a.Form.Item
                            name='photo'
                            label='Фотография'
                        >
                            <a.Avatar shape="square" size={128} icon={<i.UserOutlined />}/>
                        </a.Form.Item>

                        <a.Form.Item
                            name='firstName'
                            label='Имя'
                        >
                            <a.Input />
                        </a.Form.Item>

                        <a.Form.Item
                            name='lastName'
                            label='Фамилия'
                        >
                            <a.Input />
                        </a.Form.Item>

                        <a.Form.Item
                            name='middleName'
                            label='Отчество'
                        >
                            <a.Input />
                        </a.Form.Item>

                        <a.Form.Item
                            name='shortBio'
                            label='Краткая биография'
                        >
                            <a.Input.TextArea />
                        </a.Form.Item>

                        <a.Form.Item
                            name='bio'
                            label='Обо мне'
                        >
                            <a.Input.TextArea />
                        </a.Form.Item>

                        <a.Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                            <a.Button type="primary" style={{float: 'right'}}>Сохранить</a.Button>
                        </a.Form.Item>
                    </a.Form>
                </a.Col>
            </a.Row>
        </div>
    </BLayout>
}

export default SettingsPage
