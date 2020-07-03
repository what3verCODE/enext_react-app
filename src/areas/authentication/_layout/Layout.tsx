import React, {ReactNode} from 'react';
import * as a from 'antd';
import ALayoutHeader from "./Header";

interface IProps {
    children: ReactNode;
}

function ALayout(props: IProps) {
    const { Header, Content } = a.Layout;
    const { Title } = a.Typography;

    return <a.Layout>
        <Header style={{lineHeight: '48px', height: '48px', padding: '0 1rem'}}>
            <Title level={2} style={{height: '48px',
                textAlign: 'center', marginBottom: '0',
                color: '#cecece', verticalAlign: 'middle',
                display: 'inline-block',
                lineHeight: 'inherit', float: 'left'
            }}>
                ENEXT
            </Title>

            <ALayoutHeader />
        </Header>

        <a.Layout style={{backgroundColor: '#fff'}}>
            <Content style={{padding: '24 0', minHeight: 280, backgroundColor: '#fff'}}>
                {props.children}
            </Content>
        </a.Layout>
    </a.Layout>
}

export default ALayout
