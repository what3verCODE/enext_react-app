import React, {ReactNode} from 'react';
import * as a from 'antd';

import './styles.scss';

interface IProps {
    url: string;
}

function VideoSection(props:IProps) {
    return <div className="video-section-wrapper">
        <iframe width="560" height="315" src={props.url} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
    </div>
}

export default VideoSection
