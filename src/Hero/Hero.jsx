import './styles/Hero.css'

import PhoneForm from './PhoneForm'
import { useEffect, useState } from 'react'

export default function Hero()
{
    const [isTablet, setIsTablet] = useState(window.innerWidth < 768)

    useEffect(() => {
        const rearrangeCarImage = () => {
            setIsTablet(window.innerWidth < 768)
        }

        window.addEventListener("resize", rearrangeCarImage)

        return () => {
            window.removeEventListener("resize", rearrangeCarImage)
        }
    }, [])

    const carImage = (
        <img 
        className="hero__car-icon"
        src="/hero car.svg"
        alt="Car" />
    )

    return (
        <section className="hero">
            <div className="lead-form">
                <h1 className="hero__title">
                    Узнайте <b className="hero__title-keywords">сколько стоит<br/>
                    Ваш авто</b> и доступный<br/>
                    займ <b className="hero__title-keywords">за 1 минуту!</b>
                </h1>

                {isTablet && carImage}
            
                <PhoneForm />
            </div>

            {!isTablet && carImage}
        </section>
    )
}