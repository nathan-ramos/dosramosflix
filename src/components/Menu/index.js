import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import {Link} from 'react-router-dom';


function Menu(){
    return (
        <nav className="Menu">
            <Link to="/cadastro/video">
                <img className="Logo" src={Logo} alt="dosRamosFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;