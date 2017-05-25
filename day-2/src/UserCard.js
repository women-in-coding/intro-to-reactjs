import React from 'react';

import './UserCard.css';


function UserCard(props) {
  const { user, isSubscribed, onSubscribe } = props;
  const subscribeButton = isSubscribed ? (
    <div>Subscribed</div>
  ) : (
    <button onClick={evt => onSubscribe(user.id)}>Subscribe</button>
  )
  return (
    <div className="user-card">
      <div className="user-name">{user.name}</div>
      <div className="user-topic">{user.company.catchPhrase}</div>
      {subscribeButton}
    </div>
  )
}

export default UserCard
