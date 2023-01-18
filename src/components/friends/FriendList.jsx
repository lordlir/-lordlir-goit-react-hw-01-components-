export const FriendList = ({ friends }) => {
    return (

        <ul class="friend-list">
            {friends.map(({
avatar,
name,
isOnline,
id,}) => <li class="item" key={id}>
                    {isOnline ? <span style={{ backgroundColor: "green" , width: 10 ,height:10, display: 'block' } }class="status"></span> : <span style={{backgroundColor: "red", width: 10 ,height:10, display: 'block'} }class="status"></span>}
                <img class="avatar" src={avatar} alt={name} width="48" />
                    <p class="name">{ name}</p>
            </li>)}


        </ul>
        // <ul className="stat-list">
        //     {stats.map(({id, label, percentage}) => {
        //         return (
        //             <li className="item" key={id}>
        //                 <span className="label">{ label }</span>
        //                 <span className="percentage">{ percentage }</span>
        //             </li>)
        //         })}

        // </ul>




    )
}