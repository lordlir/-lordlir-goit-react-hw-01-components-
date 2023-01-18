export const FriendList = ({ friends }) => {
    return (

        <ul className="friend-list">
            {friends.map(({
avatar,
name,
isOnline,
id,}) => <li className="item" key={id}>
                    {isOnline ? <span style={{ backgroundColor: "green" , width: 10 ,height:10, display: 'block' } }className="status"></span> : <span style={{backgroundColor: "red", width: 10 ,height:10, display: 'block'} }className="status"></span>}
                <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{ name}</p>
            </li>)}


        </ul>
        // <ul classNameName="stat-list">
        //     {stats.map(({id, label, percentage}) => {
        //         return (
        //             <li classNameName="item" key={id}>
        //                 <span classNameName="label">{ label }</span>
        //                 <span classNameName="percentage">{ percentage }</span>
        //             </li>)
        //         })}

        // </ul>




    )
}