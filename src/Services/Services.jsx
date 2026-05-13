import './styles/Services.css'

export default function Services()
{
    return (
        <div className="services">
            <section className="services__sell-car">
                <img 
                className="services__car-icon"
                src="/sell-car-icon.svg"
                alt="Car" />

                <h2 className="services__sell-car-title services__title">
                    <a 
                    className="services__link"
                    href="#">
                        Продать<br/>
                        авто
                    </a>
                </h2>
            </section>

            <section className="services__pts-loan">
                <h2 className="services__pts-loan-title services__title">
                    <a 
                    className="services__link"
                    href="#">
                        Займы под<br />
                        ПТС
                    </a>
                </h2>

                <div className="services__pts-icon-wrapper">
                    <img
                    className="services__pts-icon"
                    src="/pts.svg" 
                    alt="PTS" />
                </div>
            </section>
        </div>
    )    
}