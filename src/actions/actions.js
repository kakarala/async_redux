import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const rerqustPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});

export const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data)
});

export const fetchPosts = subreddit => dispatch => {
    dispatch(rerqustPosts(subreddit));
    return fetch(`https:\/\/www.reddit.com/r/${subreddit}.json`)
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(json => dispatch(receivePosts(subreddit, json)))
};