import stat from './statistic.module.css'
import { getRandomHexColor } from './getRandomBgCol'

export const Statistics = ({ stats, title }) => {
    return (
    <section className={stat.statistics}>
            {title && (<h2 className="title">Upload stats</h2>)}
        <ul className={stat.statList}>
            {stats.map(({id, label, percentage}) => {
                return (
                    <li style={{ backgroundColor: getRandomHexColor()  }} className={stat.item} key={id}>
                        <span className="label">{ label }</span>
                        <span className="percentage">{ percentage }</span>
                    </li>)
                })}

        </ul>
</section>



    )
}