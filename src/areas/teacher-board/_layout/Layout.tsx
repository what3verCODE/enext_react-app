import React, {ReactNode, useState} from 'react';
import * as a from 'antd';
import TLayoutSider from "./Sider";
import TLayoutHeader from "./Header";
import CreateCourseModal from "../_modals/create-course";
import {IRootState} from "../../../core/redux/reducers";
import {Dispatch} from "redux";
import {LogoutCommand} from "../../../core/domain/commands/IdentityCommands";
import {IdentityActions} from "../../../core/redux/actions/identity-actions";
import {UserEntity} from "../../../core/domain/entities/UserEntity";
import { connect } from 'react-redux';

function TLayout(props: IProps) {
    const [collapsedSidebar, setCollapsedSidebar] = useState(true);

    const [visibleCreateCourseModal, setVisibleCreateCourseModal] = useState(false);

    const { Header, Sider, Content } = a.Layout;
    const { Title } = a.Typography;

    return <a.Layout>
        <Sider
            onCollapse={((collapsed, type) => {
                setCollapsedSidebar(!collapsedSidebar);
            })}
            collapsed={collapsedSidebar}
            collapsible
            width={256}
            style={{
                overflowX: 'hidden',
                overflowY: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0
            }}>

            <Title level={2} style={{height: '48px', textAlign: 'center', marginBottom: '0', color: '#cecece', lineHeight: '48px'}}>
                {collapsedSidebar ? 'E' : 'ENEXT'}
            </Title>

            <TLayoutSider openModal={() => setVisibleCreateCourseModal(true)}/>
        </Sider>

        <a.Layout style={{marginLeft: (collapsedSidebar ? '80px' : '256px'), transition: 'all .2s'}}>
            <Header style={{height: '48px', padding: '0 1rem'}}>
                <TLayoutHeader me={props.me} logout={(command) => props.logout(command)}/>
            </Header>

            <a.Layout>
                <Content style={{padding: 24, margin: 0, minHeight: 280, backgroundColor: '#fff'}}>
                    {props.children}
                </Content>
            </a.Layout>
        </a.Layout>

        <CreateCourseModal
            visible={visibleCreateCourseModal}
            onCancel={() => setVisibleCreateCourseModal(false)}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(TLayout)
