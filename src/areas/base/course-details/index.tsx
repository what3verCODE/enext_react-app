import React, {useState} from 'react';


import './styles.scss'
import BLayout from "../_layout/Layout";
import * as a from 'antd';
import * as i from '@ant-design/icons';


function CourseDetailsPage() {
    const courseName = 'Машинное обучение и управление проектами в IT для преподавателей';
    const courseAbout = 'Онлайн-курс «Машинное обучение и управление проектами в IT для преподавателей» поможет расширить вашу образовательную программу актуальными материалами из области ML и управления процессами в IT.';
    const courseShort = 'Онлайн-курс «Машинное обучение и управление проектами в IT для преподавателей» поможет расширить вашу образовательную программу актуальными материалами из области ML и управления процессами в IT. Курс рассчитан на 11 недель: восемь из них мы будем изучать ML, две — управление проектами, а на последней…';
    const courseTime = '3 блока, 11 недель';
    const courseFor = 'Курс рассчитан на учителей информатики в общеобразовательных и профильных школах, а также преподавателей дополнительного образования в сфере IT. Вы сможете встроить материалы курса в ваш образовательный процесс — как для всех, так и для некоторых учеников.';
    const courseAuthor = [
        {
            haveImage: false,
            name: 'Андрей Райгордский',
            info: 'Российский математик, автор более 200 научных статей, лауреат Премии Президента России 2011 года для молодых учёных.',
            about: 'Я директор Физтех-школы прикладной математики и информатики, главный научный сотрудник - заведующий лабораторией продвинутой комбинаторики и сетевых приложений, заведующий лабораторией прикладных исследований МФТИ - Сбербанк, заведующий кафедрой дискретной математики…',
        },
        {
            haveImage: false,
            name: 'Андрей Райгордский',
            info: 'Российский математик, автор более 200 научных статей, лауреат Премии Президента России 2011 года для молодых учёных.',
            about: 'Я директор Физтех-школы прикладной математики и информатики, главный научный сотрудник - заведующий лабораторией продвинутой комбинаторики и сетевых приложений, заведующий лабораторией прикладных исследований МФТИ - Сбербанк, заведующий кафедрой дискретной математики…',
        }
    ];

    const [isSubscribed, setIsSubscribed] = useState(false);
    const { Title, Text } = a.Typography;
    const { Meta } = a.Card;
    const { Panel } = a.Collapse;

    const sliderSettings = {
        arrows: true,
        nextArrow: <i.ArrowRightOutlined />,
        prevArrow: <i.ArrowRightOutlined />,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return <BLayout>
        <div className='page-content-heading'>
            <div className="conteinerized-content page-content-heading__flex">
                <Title level={2}>{courseName}</Title>

                <Text style={{marginBottom: '.375rem', fontSize: '14px'}}>{courseShort}</Text>

                <div className="additional-course-info">
                    <div className="additional-course-info__time">
                        <i.FieldTimeOutlined />
                        <Text>{courseTime}</Text>
                    </div>
                </div>
            </div>
        </div>

        <div className="conteinerized-content">
            <a.Row gutter={[8, 8]} justify='space-between'>
                <a.Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Title level={4}>Описание курса</Title>
                    <Text>{courseAbout}</Text>

                    <Title level={4}>Для кого этот курс</Title>
                    <Text>{courseFor}</Text>

                    <Title level={4}>Авторы курсы</Title>
                    {courseAuthor.map((author, index) => {
                        return <a.Card
                            bordered={false}
                            style={{margin: '12px 0'}}
                            bodyStyle={{padding: '.75rem 0'}}
                        >
                            <Meta
                                avatar={
                                    <a.Avatar shape="square" size={64} icon={<i.UserOutlined />}/>
                                }
                                title={author.name}
                                description={[
                                    <a.Space direction="vertical">
                                        <Text>{author.info}</Text>
                                        <Text>{author.about}</Text>
                                    </a.Space>
                                ]}
                            />
                        </a.Card>
                    })}

                    <Title level={4}>Программа курса</Title>
                    <a.Collapse bordered={false} defaultActiveKey={['module:1']} expandIconPosition={"right"} style={{marginBottom: '1rem'}}>
                        <Panel header="Module Title" key='module:1'>text</Panel>
                        <Panel header="Module Title" key='module:2'>text</Panel>
                        <Panel header="Module Title" key='module:3'>text</Panel>
                        <Panel header="Module Title" key='module:4'>text</Panel>
                        <Panel header="Module Title" key='module:5'>text</Panel>
                        <Panel header="Module Title" key='module:6'>text</Panel>
                        <Panel header="Module Title" key='module:7'>text</Panel>
                    </a.Collapse>

                    <Title level={4}>Отзывы</Title>
                    <a.Carousel {...sliderSettings} className="feedbacks-carousel">
                        <a.Card>
                            <Meta
                                avatar={
                                    <a.Avatar shape="square" size={64} icon={<i.UserOutlined />}/>
                                }
                                title='Александр Нохрин'
                                description='Курс понравился!'
                            />
                        </a.Card>
                        <a.Card>
                            <Meta
                                avatar={
                                    <a.Avatar shape="square" size={64} icon={<i.UserOutlined />}/>
                                }
                                title='Александр Нохрин'
                                description='Курс понравился!'
                            />
                        </a.Card>

                        <a.Card>
                            <Meta
                                avatar={
                                    <a.Avatar shape="square" size={64} icon={<i.UserOutlined />}/>
                                }
                                title='Александр Нохрин'
                                description='Курс понравился!'
                            />
                        </a.Card>

                        <a.Card>
                            <Meta
                                avatar={
                                    <a.Avatar shape="square" size={64} icon={<i.UserOutlined />}/>
                                }
                                title='Александр Нохрин'
                                description='Курс понравился!'
                            />
                        </a.Card>
                    </a.Carousel>

                    <Title level={4}>Поделиться курсом</Title>
                </a.Col>

                <a.Col xs={24} sm={24} md={5} lg={5} xl={5}>
                    <a.Button size="large" block type="primary"
                              className="custom-green-btn"
                              style={{marginBottom: '.375rem'}}>
                        Подписаться
                    </a.Button>

                    <a.Button size="large" block danger type="primary"
                              style={{marginBottom: '.375rem'}}>
                        Отписаться
                    </a.Button>

                    <a.Button size="large" block type="primary">
                        Перейти к изучению
                    </a.Button>
                </a.Col>
            </a.Row>
        </div>
    </BLayout>
}

export default CourseDetailsPage
