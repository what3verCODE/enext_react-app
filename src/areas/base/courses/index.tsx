import React, {useEffect} from 'react';
import BLayout from "../_layout/Layout";
import * as a from 'antd';
import * as i from '@ant-design/icons';


import './styles.scss';
import {Link} from "react-router-dom";
import {IRootState} from "../../../core/redux/reducers";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {CourseEntity} from "../../../core/domain/entities/CourseEntity";
import {CoursesActions} from "../../../core/redux/actions/courses-actions";

const data = [
    { img: '', title: 'Fully Responsive Web Design & Development', category: 'Web Design'},
    { img: '', title: 'Fully Responsive Web Design & Development', category: 'Web Design'},
    { img: '', title: 'Fully Responsive Web Design & Development', category: 'Web Design'},
    { img: '', title: 'Fully Responsive Web Design & Development', category: 'Web Design'},
    { img: '', title: 'Fully Responsive Web Design & Development', category: 'Web Design'},

]

function CoursesPage(props: IProps) {

    useEffect(() => {
        props.getAll();
    }, []);

    const { Title } = a.Typography;
    const { Meta } = a.Card;


    if(props.courses == null) return <></>
    return <BLayout>
        <div className="conteinerized-content" style={{marginTop: '1.5rem'}}>
            <Title>Курсы</Title>

            <a.Row gutter={[8, 8]} justify="space-between">

                {props.courses.map((course, index) => {
                    return <a.Col>
                        <a.Card hoverable style={{width: 300}}
                                cover={<img alt='example' src="https://www.arcgis.com/sharing/rest/content/items/6c036c09c490450db100cbf867c7688a/resources/1571940616424.png" />}
                                actions={[
                                    <Link to={``}><i.ArrowRightOutlined /></Link>
                                ]}
                        >
                            <Meta
                                title={course.title}
                                description={course.shortDescription}
                            />
                            <div className="additional-card-info">
                                <div className="additional-card-info__category">
                                    <span>Web Design</span>
                                </div>

                                <div className="additional-card-info__counters">
                                    <div className="additional-card-info__counters__likes">
                                        <i.HeartOutlined />
                                        <span>{course.likes}</span>
                                    </div>

                                    <div className="additional-card-info__counters__views">
                                        <i.EyeOutlined />
                                        <span>1M</span>
                                    </div>
                                </div>
                            </div>
                        </a.Card>
                    </a.Col>
                })}

            </a.Row>
        </div>
    </BLayout>
}

interface IProps {
    courses: CourseEntity[];
    getAll(): void;
}

const mapStateToProps = (state: IRootState) => ({
    courses: state.courses
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAll: () => dispatch(CoursesActions.getAllCourses())
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
