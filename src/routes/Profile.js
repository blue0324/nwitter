import { authService } from 'fbase';
import React from 'react';

export default () => {
    const onLogOutClick = () => authService.signOut();
    return(
        <>
        <button onClick = {onLogOutClick}>log out</button>
        </>
    )
};