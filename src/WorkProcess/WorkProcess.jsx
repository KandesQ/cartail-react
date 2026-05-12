import WorkProcessItem from './WorkProcessItem'
import LeadButton from '../common-components/LeadButton'

import './styles/WorkProcess.css'

export default function WorkProcess()
{
    const workProcesses = [
        {
            id: 1,
            iconPath: "/assignment.svg",
            title: "Запишитесь на осмотр авто",
            description: "Оцените Ваш автомобиль, заполнив простую форму, и дождитесь звонка оператора."
        },
        {
            id: 2,
            iconPath: "/car.svg",
            title: "Пройдите бесплатное техническое описание",
            description: "В удобное время приезжайте в ближайший филиал CarPrice, где мы проведем техническое описание и проверим юридическую «чистоту» машины абсолютно бесплатно."
        },
        {
            id: 3,
            iconPath: "/money.svg",
            title: "Получите предложение",
            description: "Всю собранную информацию мы используем для формирования честной цены на Ваш автомобиль." 
        },
        {
            id: 4,
            iconPath: "/sell-car.svg",
            title: "Получите деньги за Ваш автомобиль",
            description: "Если Вы согласны с предложенной ценой, мы оформим документы, и Вы сразу же получите всю сумму наличными или на банковскую карту."
        }
    ]

    return (
        <section className="work-process">
            <h1 className='work-process__title'>
                Как мы продаем<br />
                Ваш автомобиль
            </h1>

            <div className="work-process__list">
                {workProcesses.map(
                    (workProcess, index) => <WorkProcessItem key={workProcess.id} index={index} item={workProcess}/>
                )}
            </div>

            <LeadButton text="Узнать стоимость" />
        </section>
    )
}