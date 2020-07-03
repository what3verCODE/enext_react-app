import React from 'react';
import * as a from 'antd';

function Loader() {
    return <a.Space size="middle"
                 style={{
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%,-50%)'
                 }}>
        <a.Spin size="large" />
    </a.Space>
}

export default Loader
