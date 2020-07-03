import React from 'react';
import * as a from 'antd';

function TextPanel(props: IProps) {
    return <a.Input.TextArea rows={4} value={
        props.text != null ? props.text : " "
    } onChange={(e) => props.onChange(e.target.value)}/>
}

interface IProps {
    text: string | undefined;
    onChange(text: string): void;
}

export default TextPanel
