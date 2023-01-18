import stat from './statistic.module.css'

export const Statistics = ({ stats, title }) => {
    return (
    <section className={stat.statistics}>
            {title && (<h2 className="title">Upload stats</h2>)}
        <ul className={stats.statList}>
            {stats.map(({id, label, percentage}) => {
                return (
                    <li className="item" key={id}>
                        <span className="label">{ label }</span>
                        <span className="percentage">{ percentage }</span>
                    </li>)
                })}

        </ul>
</section>



    )
}