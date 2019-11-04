import React from 'react';
import Emojies from './Emojies.jsx';

import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="header">
                Select an icon
            </div>
            <div className="emojies-wrapper">
                <Emojies />
            </div>
        </div>
    )
}