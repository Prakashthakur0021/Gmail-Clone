import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar, IconButton } from '@material-ui/core';
import { Apps, ArrowDropDown,Notifications } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }

    return (
        <div className="header">

            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png" alt="img"/>
            </div>

            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDown className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} style={{cursor: 'pointer'}} />
            </div>
        </div>
    )
}

export default Header
