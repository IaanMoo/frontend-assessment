
import React from 'react'
import DesktopBanner from 'Assets/1920x650.png'
import MobileBanner from 'Assets/600x600.png'
import CardImage from 'Assets/400x300.png'
import Card from './components/card'
import Banner from './components/banner'
import style from './style.css'

function Exercise1() {
    const data = {
        bannerImage: {
            Desktop: DesktopBanner,
            Mobile: MobileBanner
        },
        bannerTitle: 'Hello Developer!',
        bannerDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        cards:{
            cardOne:{
                image: CardImage,
                text:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
                      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']
            },
            cardTwo:{
                image: CardImage,
                text:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua']
            },
            cardThree:{
                image: CardImage,
                text:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
                      'minim veniam, quis nostrud exercitation ullamco.']
            }
        }
    }
    return (
        <React.Fragment>
            {/* banner */}
            <Banner data={data} />
            {/* cards */}
            <div class='cards'>
                {Object.values(data.cards).map((cardData, index) => (
                    <Card key={index} data={cardData} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default Exercise1;
