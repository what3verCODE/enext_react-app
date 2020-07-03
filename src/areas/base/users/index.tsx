import React from 'react';
import BaseLayout from "../_layout/Layout";
import {Link} from "react-router-dom";

import './styles.scss';


function UsersPage() {
    const haveImage = false;

    return <BaseLayout>
        <>
            <div className="user-container">
                <section className="user-header">
                    {haveImage ?
                        <img src="" alt="" className="user-header__image"/>
                        :
                        <></>
                    }

                    <div className="user-header__info">
                        <div className="user-header__info-name">
                            Нохрин Александр Николаевич
                        </div>
                    </div>
                </section>

                <aside className="user-sidebar">
                    <Link to={``} className='user-sidebar__link'>Профиль</Link>
                    <Link to={``} className='user-sidebar__link'>Преподавание</Link>
                    <Link to={``} className='user-sidebar__link'>Мои курсы</Link>
                    <Link to={``} className='user-sidebar__link'>Достижения</Link>
                    <Link to={``} className='user-sidebar__link'>Настройки</Link>
                </aside>

                <main className="user-content">

                </main>
            </div>
        </>
    </BaseLayout>
}

export default UsersPage
