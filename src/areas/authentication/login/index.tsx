import React, {FormEvent, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {Link} from "react-router-dom";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {LoginCommand} from "../../../core/domain/commands/IdentityCommands";
import {IdentityActions} from "../../../core/redux/actions/identity-actions";
import {UserEntity} from "../../../core/domain/entities/UserEntity";
import {IRootState} from "../../../core/redux/reducers";

//layout
import ALayout from "../_layout/Layout";
import * as a from 'antd';
import * as i from '@ant-design/icons';

//styles
import './styles.scss'



function LoginPage(props: IProps) {
    const history = useHistory();
    const { Title } = a.Typography;
    const [loginCommand, setLoginCommand] = useState<LoginCommand>({
        email: '', password: ''
    })

    useEffect(() => {
        if(props.me != null) history.push(`/`);
    }, [props.me])

    const validateMessages = {
        required: '${label} не может быть пустым'
    };

    function onFinish() {
        props.login(loginCommand)
    }


    return <ALayout>
        <a.Form
            name='loginForm'
            className="login-form"
            size="large"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <div className='login-form__logo'>
                <Title className='login-form__logo-text'>ENEXT</Title>
            </div>

            <a.Form.Item
                name='email'
                rules={[{ required: true }]}
            >
                <a.Input
                    prefix={<i.UserOutlined />}
                    type='email'
                    placeholder='Почта'
                    onChange={(e) => setLoginCommand({...loginCommand, email: e.target.value})}
                />
            </a.Form.Item>
            <a.Form.Item
                name='password'
                rules={[{ required: true }]}
            >
                <a.Input
                    prefix={<i.LockOutlined />}
                    type='password'
                    placeholder='Пароль'
                    onChange={(e) => setLoginCommand({...loginCommand, password: e.target.value})}
                />
            </a.Form.Item>

            <a.Form.Item>
                <a.Button
                    type='primary'
                    htmlType='submit'
                    block
                >
                    Войти
                </a.Button>
            </a.Form.Item>

            <div className="login-form__additional">
                <div className="login-form__additional__forgot">
                    <Link to={``}>Забыли пароль?</Link>
                </div>

                <div className="login-form__additional__register">
                    Новый пользователь?
                    <Link to={`/identity/register`}>Зарегестрироваться</Link>
                </div>
            </div>
        </a.Form>
    </ALayout>
}

interface IProps {
    me: UserEntity;
    login(command: LoginCommand): void;
}

const mapStateToProps = (state: IRootState) => ({
    me: state.identity
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    login:(command: LoginCommand) => dispatch(IdentityActions.login(command))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
