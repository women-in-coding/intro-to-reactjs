import React from 'react';

import './App.css';

import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Content from './Content';
import Home from './Home';
import Users from './Users';
import Feed from './Feed';


const routes = [
  {id: 'home', title: 'Home'},
  {id: 'users', title: 'Users'},
  {id: 'feed', title: 'Feed'}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeId: 'home',
      subscribedUsers: []
    }
  }
  setRouteId(routeId) {
    this.setState({
      routeId: routeId
    })
  }
  subscribeToUser(userId) {
    this.setState({
      subscribedUsers: this.state.subscribedUsers.slice().concat([userId])
    })
  }
  getView(routeId) {
    switch(routeId) {
      case 'home':
        return <Home />
      case 'users':
        return (
          <Users
            subscribedUsers={this.state.subscribedUsers}
            onSubscribe={userId => this.subscribeToUser(userId)} />
        );
      case 'feed':
        return <Feed subscribedUsers={this.state.subscribedUsers} />
      default:
        return <div>Hmm...</div>
    }
  }
  render() {
    return (
      <div className="app">
        <Sidebar>
          <Navigation
            routes={routes}
            routeId={this.state.routeId}
            onNavigate={routeId => this.setRouteId(routeId)} />
        </Sidebar>
        <Content>
          {this.getView(this.state.routeId)}
        </Content>
      </div>
    );
  }
}

export default App;
