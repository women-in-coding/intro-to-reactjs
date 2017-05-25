import React from 'react';


export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postsLoaded: false
    }
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({
          posts: posts,
          postsLoaded: true
        })
      })
  }
  render() {

    const {subscribedUsers} = this.props;

    const postList = this.state.posts
      .filter(post => subscribedUsers.includes(post.userId))
      .map(post => (
        <div className="post" key={post.id}>
          <h4>{post.title}</h4>
          <div>{post.body}</div>
        </div>
      ))

    if (!this.state.postsLoaded) {
      return <div>Loading...</div>
    }

    return (
      <div className="feed">
        <h3>Showing {postList.length} posts by {subscribedUsers.length} author{subscribedUsers.length === 1 ? '' : 's'}.</h3>
        {postList.length ? postList : 'No posts to show, try subscribing to a User.'}
      </div>
    )
  }
}
