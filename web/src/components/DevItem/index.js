import React from 'react'

import './styles.css';


function DevItem({dev}){

//equivale ao {dev} no parâmetro
// const {dev} = props;

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs}</span>
                </div>
            </header>
        <p>{dev.bio}</p>
        <a href="{`https://github.com/${dev.github_username}`}">Acessar perfil no Github</a>
        </li>
    );
}

export default DevItem;