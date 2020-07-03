import React, {ReactNode} from 'react';
import * as a from 'antd';
import * as i from '@ant-design/icons';
import BLayoutHeader from "./Header";

import './styles.scss';
import {IRootState} from "../../../core/redux/reducers";
import {connect} from "react-redux";
import {UserEntity} from "../../../core/domain/entities/UserEntity";
import {Dispatch} from "redux";
import {LogoutCommand} from "../../../core/domain/commands/IdentityCommands";
import {IdentityActions} from "../../../core/redux/actions/identity-actions";

function BLayout(props: IProps) {
    const { Header, Footer, Content } = a.Layout;
    const { Title } = a.Typography;

    return <a.Layout style={{minHeight: '100vh'}}>
        <Header style={{lineHeight: '48px', height: '48px', padding: '0 1rem'}}>
            <Title level={2} style={{height: '48px',
                textAlign: 'center', marginBottom: '0',
                color: '#cecece', verticalAlign: 'middle',
                display: 'inline-block',
                lineHeight: 'inherit', float: 'left'
            }}>
                ENEXT
            </Title>

            <BLayoutHeader me={props.me} logout={(command) => props.logout(command)}/>
        </Header>

        <a.Layout style={{backgroundColor: '#fff'}}>
            <Content style={{padding: '24 0', minHeight: 280, backgroundColor: '#fff'}}>
                {props.children}
            </Content>
        </a.Layout>

        <Footer  style={{backgroundColor: '#001529'}}>
            footer
        </Footer>
    </a.Layout>
}

interface IProps {
    children: ReactNode;

    me: UserEntity;
    logout(command: LogoutCommand): void;
}

const mapStateToProps = (state: IRootState) => ({
    me: state.identity
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: (command: LogoutCommand) => dispatch(IdentityActions.logout(command))
});

export default connect(mapStateToProps, mapDispatchToProps)(BLayout)
