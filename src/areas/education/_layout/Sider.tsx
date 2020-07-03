import React from 'react';
import * as a from "antd";
import {Link} from "react-router-dom";
import {ModuleEntity} from "../../../core/domain/entities/ModuleEntity";

function ELayoutSider(props: IProps) {
    const { SubMenu } = a.Menu;

    return <a.Menu
        theme={"dark"}
        mode={"inline"}
        style={{borderRight: 0, borderTop: '.5px solid #cecece', paddingBottom: '48px'}}
    >
        {props.modules.map((module, module_index) => {
            return <SubMenu key={"module:" + module_index} title={module.title}>
                {module.lessons?.map((lesson, lesson_index) => {
                    return <a.Menu.Item key={'module:' + module_index + ':lesson:' + lesson_index}>
                        <span>{lesson.title}</span>
                        <Link to={`/education/${props.courseId}/lesson/${lesson.id}`} />
                    </a.Menu.Item>
                })}
            </SubMenu>
        })}
    </a.Menu>
}

interface IProps {
    courseId: number;
    modules: ModuleEntity[];
}

export default ELayoutSider
