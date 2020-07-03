import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';

function CoursePageSettingsTab() {
    const [settingsForm] = a.Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    function onFinish() {

    }

    const validateMessages = {
        required: '${label} не может быть пустым'
    };

    return <>
        <a.Form
            form={settingsForm}
            size="large"
            name="settings_course_form"

            {...layout}
            onFinish={onFinish}
            validateMessages={validateMessages}
            labelAlign="left"
        >
            <a.Form.Item label="Классы">
                <a.Input />
            </a.Form.Item>

            <a.Form.Item label="Получать уведомления">
                <a.Checkbox.Group>
                    <a.Checkbox style={{display: 'block', marginLeft: 0}}>О новых отзывах</a.Checkbox>
                    <a.Checkbox style={{display: 'block', marginLeft: 0}}>О новых отзывах</a.Checkbox>
                    <a.Checkbox style={{display: 'block', marginLeft: 0}}>О новых отзывах</a.Checkbox>
                    <a.Checkbox style={{display: 'block', marginLeft: 0}}>О новых отзывах</a.Checkbox>
                    <a.Checkbox style={{display: 'block', marginLeft: 0}}>О новых отзывах</a.Checkbox>
                    <a.Checkbox style={{display: 'block', marginLeft: 0}}>О новых отзывах</a.Checkbox>
                    <a.Checkbox style={{display: 'block', marginLeft: 0}}>О новых отзывах</a.Checkbox>
                </a.Checkbox.Group>
            </a.Form.Item>

            <a.Form.Item wrapperCol={{span: 4, offset: 20}}>
                <a.Button type="primary" danger block style={{marginBottom: '.75rem'}}>Удалить курс</a.Button>
                <a.Button type="primary" block>Сохранить</a.Button>
            </a.Form.Item>
        </a.Form>
    </>
}

export default CoursePageSettingsTab
