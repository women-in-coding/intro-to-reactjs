import React from 'react';

import UserCard from './UserCard';


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          users: users
        })
      })
  }
  render() {
    const {subscribedUsers} = this.props;
    const userCards = this.state.users.map(user => (
      <UserCard
        user={user}
        key={user.id}
        isSubscribed={subscribedUsers.includes(user.id)}
        onSubscribe={this.props.onSubscribe} />
    ))
    return (
      <div className="users">
        {userCards}
      </div>
    )
  }
}

export default Users
