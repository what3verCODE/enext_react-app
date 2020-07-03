import React, {ReactNode} from 'react';
import * as a from 'antd';

interface IProps {
    text: string
}

function TextSection(props:IProps) {
    const { Text } = a.Typography;

    return <Text>
        {props.text}
    </Text>
}
export default TextSection
