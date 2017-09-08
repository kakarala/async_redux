import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPosts, receivePosts, fetchPosts } from '../actions/actions.js';


class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render(){
        const { dispatch, posts } = this.props;
        return (
            <div>
                <div onClick={e => {
                    e.preventDefault();
                    dispatch(fetchPosts('reactjs'));
                }}>
                    要求去处理数据
                </div>
                {JSON.stringify(posts)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps)(App);