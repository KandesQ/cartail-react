import './styles/PhoneForm.css'

import LeadButton from '../common-components/LeadButton'

import { IMaskInput } from 'react-imask'
import { useState } from 'react'

export default function PhoneForm()
{
    const [isChecked, setIsChecked] = useState(false)
    const [showError, setShowError] = useState(false)

    const [showInputError, setShowInputError] = useState(false)
    const [isInvalidPhone, setIsInvalidPhone] = useState(false)

    const [phone, setPhone] = useState("")

    const phoneRegex = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/

    const handleSubmit = () => {
        if (isInvalidPhone)
        {
            setShowInputError(true)
            return
        }
        
        if (!isChecked)
        {
            setShowError(true)
            return
        }
        
        setPhone("")
        setIsChecked(false)
        setShowInputError(false)
        setIsInvalidPhone(false)
    }

    return (
        <section className="phone-form">
            <h4 className="phone-form__title">
                Укажите Ваш номер телефона
            </h4>

            <div className="phone-form__wrapper">
                <div className={`phone-form__input 
                ${showInputError ? "phone-form__input--error": ""}
                `}>
                    <img 
                    src="/phone call.svg"
                    alt="Phone" />

                    <div className="phone-form__input-wrapper">
                        <strong className="phone-form__input-prefix">
                            +7
                        </strong>

                        <IMaskInput
                        mask="(000) 000-00-00"
                        value={phone}
                        type="tel"
                        placeholder='(905) 555-75-85'
                        size="16"
                        onAccept={(inputValue) => {
                            if (!inputValue.match(phoneRegex))
                            {
                                setIsInvalidPhone(true)
                            }
                            else
                            {
                                setIsInvalidPhone(false)
                                
                                // Hide already showing errors
                                setShowInputError(false)
                            }
                            setPhone(inputValue)
                        }}
                        className="app-input"
                        id="phone-input" />
                    </div>
                </div>

                {showError && (
                    <div className="phone-form__consent-not-checked">
                        Необходимо принять условия политики конфиденциальности
                    </div>
                )}

                <div className="phone-form__consent">
                    <label
                    className="phone-form__checkbox"
                    >
                        <input
                        className="phone-form__actual-checkbox"
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                            setIsChecked(e.target.checked)
                            
                            if (e.target.checked)
                            {
                                setShowError(false)
                            }
                        }}
                        id="phone-form__checkbox" />

                        <img 
                        className="phone-form__checkbox-checkmark"
                        src="/checkmark.svg" 
                        alt="Checkmark" />
                    </label>

                    <label 
                    htmlFor='phone-form__checkbox'
                    className="phone-form__consent-text">
                        Я ознакомлен с{" "}
                        <a 
                        className="phone-form__privacy-policy-link"
                        href="#">
                            политикой конфиденциальности
                        </a>
                    </label>
                </div>
            </div>

            <LeadButton
            onClick={handleSubmit}
            text="Оставить заявку" />
        </section>
    )    
}