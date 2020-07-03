import React, {ReactNode} from 'react';

import './styles.scss';

interface IProps {
    children: ReactNode;
}

function AdminBoardLayout(props: IProps) {
    return <div className="dashboard-container">

        <div className="dashboard-left">
            <div className="dashboard-sidebar">
                <div className="dashboard-sidebar__logo">
                    enext
                </div>
                s
            </div>
        </div>

        <div className="dashboard-right">
            <div className="dashboard-nav">
                s
            </div>

            <div className="dashboard-content">
                {props.children}
            </div>
        </div>
    </div>
}

export default AdminBoardLayout;
