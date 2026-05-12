import './styles/WorkProcessItem.css'

export default function WorkProcessItem({ index, item })
{
    return (
        <section className="work-process__item">
            <img 
            src={item.iconPath}
            alt="Work item" />

            <h2 className="work-process__item-title">
                <span className="work-process-item__number">
                    {index}.{" "}
                </span>
                {item.title}
            </h2>

            <p className="work-process__item-description">
                {item.description}
            </p>
        </section>
    )
}