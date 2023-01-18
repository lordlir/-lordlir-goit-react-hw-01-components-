import user from '../user.json'
import data from '../data.json';
import friends from '../friends.json';


import { Profile } from './profile/Profile';
// import pofileCss from './profile/Profile.module.css';
// import pofileCss from './profile/Profile.module.css';
import { Statistics } from './satistic/Statistics';
import { FriendList } from './friends/FriendList';

    // console.log(data)

// console.log(user)
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
          <Profile 
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

      <Statistics title="Upload stats"  stats={data} />
<Statistics stats={data} />


<FriendList friends={friends} />
    </div>

  );
};
