import React from 'react';
import BaseLayout from "../_layout/Layout";

import './styles.scss';
import {Link} from "react-router-dom";

function ProfilePage() {
    const haveImage = false;

    return <BaseLayout>
        <>
            <div className="profile-container">
                <div className="profile-sidebar">
                    <Link to={``} className="profile-sidebar__link">Редактировать профиль</Link>
                    <Link to={``} className="profile-sidebar__link">Изменить почту</Link>
                    <Link to={``} className="profile-sidebar__link">Уведомлениzя</Link>
                </div>

                <div className="profile-content">
                    <section className="profile-content__item">
                        <div className="profile-content__item-title">
                            Фото профиля
                        </div>

                        <div className="profile-content__item-content profile-content__avatar">
                            {haveImage ?
                                <img
                                    src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg"
                                    alt=""/>
                                :
                                <></>
                            }
                            <div className="profile-content__avatar-buttons">
                                <button className="btn">Change avatar</button>
                            </div>
                        </div>
                    </section>

                    <section className="profile-content__item">
                        <div className="profile-content__item-title">
                            Имя *
                        </div>

                        <div className="profile-content__item-content">
                            <input type="text" value='Александр'/>
                        </div>
                    </section>

                    <section className="profile-content__item">
                        <div className="profile-content__item-title">
                            Фамилия *
                        </div>

                        <div className="profile-content__item-content">
                            <input type="text" value='Нохрин'/>
                        </div>
                    </section>

                    <section className="profile-content__item">
                        <div className="profile-content__item-title">
                            Отчество *
                        </div>

                        <div className="profile-content__item-content">
                            <input type="text" value='Николаевич'/>
                        </div>
                    </section>

                    <section className="profile-content__item">
                        <div className="profile-content__item-title">
                            Дата рождения
                        </div>

                        <div className="profile-content__item-content">
                            <input type="text" value='Николаевич'/>
                        </div>
                    </section>

                    <section className="profile-content__item">
                        <div className="profile-content__item-title">
                            О Себе
                        </div>

                        <div className="profile-content__item-content">
                            <input type="text" value='Николаевич'/>
                        </div>
                    </section>

                    <section className="profile-content__item">
                        <div className="profile-content__item-title">
                        </div>

                        <div className="profile-content__item-content">
                            <button className="btn profile-content__submit-btn">
                                Сохранить изменения
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    </BaseLayout>
}

export default ProfilePage
