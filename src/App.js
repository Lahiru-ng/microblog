import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import posts from './Components/Data/posts';
import './App.css';
import Composer from './Components/Composer';
import Post from "./Components/Post";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts
    };
  }

  renderPostItem = (post) => {
    return < Post key={post._id} {...post} onDelete={this.onDelete} />;
  }



  onSubmit = (text) => {
    const { posts } = this.state;
    const _id = posts.length + 1;
    const timestamp = String(new Date());
    const post = { _id, text, timestamp };
    //console.log(text);
    posts.push(post);
    this.setState({
      posts
    })

  }

  onDelete = (_id) => {
    const { posts } = this.state;
    //console.log(_id);
    const filteredPosts = posts.filter((post) => {
      return post._id !== _id
    })

    this.setState({
      posts: filteredPosts
    });

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="container">
        <Header />
        <div className="content">
          <Composer onSubmit={this.onSubmit} />

          <div className="posts">
            {posts.map(this.renderPostItem)

            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;


