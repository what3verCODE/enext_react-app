import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';

function CoursePageFeedbacksTab() {
    const feedback = [
        {author: "Александр Нохрин", content: "Очень понравилось!"},
        {author: "Валерия Калинкина", content: "Спасибо! Отличный курс!"}
    ]

    return <>
        <a.Alert
            message="Здесь пусто..."
            description="Пока еще никто не оставил отзыв вашему курсу"
            type="info"
            showIcon
        />

        <a.List
            header={`${feedback.length} ${feedback.length > 4 ? 'отзывов' : 'отзыв'}`}
            itemLayout="horizontal"
            dataSource={feedback}
            renderItem={(props) => <a.Comment avatar={<a.Avatar size={32} icon={<i.UserOutlined />}/>} {...props} />}
        >

        </a.List>
    </>
}

export default CoursePageFeedbacksTab
