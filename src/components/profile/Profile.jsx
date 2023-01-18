// import user from '../../user.json'
// {username, tag, location, avatar, stats } user
import profile from'./Profile.module.css'

export const Profile = ({ location, username, tag, stats }) => {
    // className={profileCss}
   const { followers, views, likes } =  stats
  return ( <div className={profile.profile}>
  <div className={profile.description}>
    <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
              alt="User avatar"
              className={profile.avatar}
    />
    <p className={profile.name}>{username}</p>
            <p className={profile.tag}>@{tag}</p>
    <p className={profile.location}>{location}</p>
  </div>

  <ul className={profile.stats}>
    <li className={profile.item}>
      <span className={profile.label}>Followers</span>
      <span className={profile.quantity}>{followers}</span>
    </li>
    <li className={profile.item}>
      <span className={profile.label}>Views</span>
      <span className={profile.quantity}>{views}</span>
    </li>
    <li className={profile.item}>
      <span className={profile.label}>Likes</span>
      <span className={profile.quantity}>{likes}</span>
    </li>
  </ul>
</div>)
}

