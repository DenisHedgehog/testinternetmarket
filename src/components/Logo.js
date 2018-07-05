import React from 'react'
import './css/logo.css'

const Logo = () => {

    return(
        <div className="logo">
            <img
                src="https://cdn.iconscout.com/public/images/icon/free/png-512/react-native-logo-39df75d66ed6185e-512x512.png"
                alt="Logo" className="logo-img"/>
            <div className="logo-text">Реактивный интернет-магазин</div>
        </div>

    )
}

export default Logo