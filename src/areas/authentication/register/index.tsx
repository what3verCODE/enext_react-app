import React, {useEffect, useState} from 'react';
import ALayout from "../_layout/Layout";
import * as a from "antd";
import * as i from '@ant-design/icons';
import {Link} from "react-router-dom";
import {Dispatch} from 'redux';

import './styles.scss'
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {UserEntity} from "../../../core/domain/entities/UserEntity";
import {RegisterCommand} from "../../../core/domain/commands/IdentityCommands";
import {IdentityActions} from "../../../core/redux/actions/identity-actions";
import {IRootState} from "../../../core/redux/reducers";

function RegisterPage(props: IProps) {
    const history = useHistory();
    const { Title } = a.Typography;
    const [registerForm] = a.Form.useForm();
    const [registerCommand, setRegisterCommand] = useState<RegisterCommand>({
        email: '', firstName: '', lastName: '', middleName: '', password: ''
    });

    useEffect(() => {
        if(props.me != null) history.push(`/`)
    }, [props.me])

    const validateMessages = {
        required: '${label} не может быть пустым'
    };

    function onFinish() {
        console.info(registerCommand);
        props.register(registerCommand);
    }

    return <ALayout>
        <a.Form
            form={registerForm}
            name='registerForm'
            className="register-form"
            size="large"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <div className='register-form__logo'>
                <Title className='register-form__logo-text'>ENEXT</Title>
            </div>

            <a.Form.Item
                name='email'
                rules={[{ required: true }]}
            >
                <a.Input
                    type='email'
                    placeholder='Почта'
                    onChange={(e) => setRegisterCommand({...registerCommand, email: e.target.value})}
                />
            </a.Form.Item>
            <a.Form.Item
                name='password'
                rules={[{ required: true }]}
            >
                <a.Input
                    type='password'
                    placeholder='Пароль'
                    onChange={(e) => setRegisterCommand({...registerCommand, password: e.target.value})}
                />
            </a.Form.Item>

            <a.Form.Item
                name="firstName"
            >
                <a.Input
                    placeholder='Имя'
                    onChange={(e) => setRegisterCommand({...registerCommand, firstName: e.target.value})}
                />
            </a.Form.Item>

            <a.Form.Item
                name="lastName"
            >
                <a.Input
                    placeholder='Фамилия'
                    onChange={(e) => setRegisterCommand({...registerCommand, lastName: e.target.value})}
                />
            </a.Form.Item>

            <a.Form.Item
                name="middleName"
            >
                <a.Input
                    placeholder='Отчество'
                    onChange={(e) => setRegisterCommand({...registerCommand, middleName: e.target.value})}
                />
            </a.Form.Item>

            <a.Form.Item>
                <a.Button
                    type='primary'
                    htmlType='submit'
                    block
                >
                    Зарегистрироваться
                </a.Button>
            </a.Form.Item>

            <div className="register-form__additional">
                <div className="register-form__additional__login">
                    Уже зарегестрированны?
                    <Link to={`/identity/login`}>Войти</Link>
                </div>

            </div>
        </a.Form>
    </ALayout>
}

interface IProps {
    me: UserEntity;
    register(command: RegisterCommand): void;
}

const mapStateToProps = (state: IRootState) => ({
    me: state.identity
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    register:(command: RegisterCommand) => dispatch(IdentityActions.register(command))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
