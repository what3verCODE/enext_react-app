import React from 'react';
import * as a from 'antd';

function VideoPanel(props:IProps) {
    return <a.Input value={
        props.url != null ? props.url : " "
    } onChange={(e) => props.onChange(e.target.value)}/>
}

interface IProps {
    url: string | undefined;
    onChange(url: string): void;
}

export default VideoPanel
