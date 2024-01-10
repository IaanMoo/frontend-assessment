
import React from 'react'
import style from './style.css'

function Banner(props) {
    const { data } = props
    return (
        <div class='banner'>
            <picture>
                <source srcset={data.bannerImage.Mobile} media='(max-width: 600px)'/>
                <source srcset={data.bannerImage.Desktop} media='(max-width: 1960px)'/>
                <source srcset={data.bannerImage.Desktop} />
                <img src={data.bannerImage.Desktop} class='banner__image'/>
            </picture>
            <div class='banner__texts'>
                <span class='banner__texts__text1'>{data.bannerTitle}</span>
                <span class='banner__texts__text2'>{data.bannerDescription}</span>
            </div>
        </div>
    )
}

export default Banner;
