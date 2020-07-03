import React from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import {Link} from "react-router-dom";

function Comment(props: IProps) {
    return <a.Comment
        actions={[<span key="comment-to"> Reply to</span>]}
        author={<Link to={``}>{props.author}</Link>}
        avatar={<a.Avatar
            icon={<i.UserOutlined />}
            size={32}
        />}
        content={
            <p>{props.text}</p>
        }>

    </a.Comment>
}

interface IProps {
    author: string;
    text: string;
}

export default Comment
