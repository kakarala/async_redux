import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/actions.js';

const posts = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch(action.type){
        case REQUEST_POSTS:
            return {...state, isFetching: true};
        case RECEIVE_POSTS:
            return {...state, isFetching: false, items: action.posts}
        default:
            return state;
    }
};

export default combineReducers({posts});