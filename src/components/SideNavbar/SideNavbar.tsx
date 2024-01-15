/** @jsxImportSource @emotion/react */

import { Typography } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LogoutButton } from './LogoutButton';
import { sidebarData } from './sidebarData';
import { sideNavbarStyles } from './sideNavbarStyles';

const SideNavbar: React.FC = () =>
{
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <div css={sideNavbarStyles}>
            <div className="navbar-content">

                <Typography className='header' component="h1" variant="h4">
                    EasyAlarm
                </Typography>


                <ul className='items-list'>
                    {sidebarData.map((item, index) => (
                        <li className={`item ${isActive(item.link) ? 'active' : ''}`} key={index}>
                            <NavLink to={item.link}>
                                <Typography className='item-title' component="h6" variant="h6">
                                    {item.title.toUpperCase()}
                                </Typography>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <LogoutButton title="logout" className='logout-button' />
            </div>
        </div>
    );
};

export default SideNavbar;
