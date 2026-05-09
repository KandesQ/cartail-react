import Logo from "../common-components/Logo"
import PhoneLink from "../common-components/PhoneLink"
import SocialNetworkIcon from "../common-components/SocialNetworkIcon"

import './Footer.css'

function Footer()
{
    const socialNetworkItems = [
        { id: 1, name: "Telegram", link: "#", defaultIconRef: "/telegram.svg", hoveredIconRef: "/hovered-telegram.svg" },
        { id: 2, name: "Vk", link: "#", defaultIconRef: "/vk.svg", hoveredIconRef: "/hovered-vk.svg" },
        { id: 3, name: "Instagram", link: "#", defaultIconRef: "/instagram.svg", hoveredIconRef: "/hovered-instagram.svg" }
    ]

    return (
        <footer>
            <div className="footer__menu">
                <Logo className="footer__logo" />

                <section className="footer__info">
                    <h1 className="footer__title">
                        Cartail.ru - Организация занимается займами авто под ПТС 
                    </h1>

                    <div className="link-list">
                        <a 
                        className="link-list__item"
                        href="#">
                            Политика конфиденциальности
                        </a>

                        <a 
                        className="link-list__item"
                        href="#">
                            Пользовательское соглашение
                        </a>
                    </div>
                </section>

                <section className="contacts">
                    <PhoneLink>
                        <h3 className="footer__phone-number">
                            8 (800) 852 78-87
                        </h3>
                    </PhoneLink>

                    <div className="social-networks-list">
                        {socialNetworkItems.map(({id, ...props}) =>
                            <SocialNetworkIcon 
                                key={id}
                                {...props}/>
                        )}
                    </div>
                </section>
            </div>
        </footer>
    )    
}

export default Footer