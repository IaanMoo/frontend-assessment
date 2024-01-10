
import React from 'react'
import style from './style.css'

function Card(props) {
    const { data } = props
    return (
        <div class='cards__card'>
            <div class='cards__card__content'>
                <img class='cards__card__content_image' src={data.image} alt='Avatar'/>
                <div class='cards__card__content_texts'>
                    {Object.values(data.text).map((text, index) => (
                        <p key={index}>{text}</p> 
                    ))}
                    <button class='cards__card__content__button'>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
