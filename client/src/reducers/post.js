/**
 * Created by agros on 31.05.2019.
 */
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from '../actions/actionTypes';

const initialState = {
    posts: [],
    singlePost: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_POSTS:
            return ({
                ...state,
                posts: payload,
                loading: false
            });
        case POST_ERROR:
            return ({
                ...state,
                error: payload,
                loading: false
            });
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => {
                    return post._id === payload.postId ? {...post, likes: payload.likes} : post;
                }),
                loading: false
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => {
                    return post._id !== payload;
                }),
                loading: false
            };
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            };
        case GET_POST:
            return {
                ...state,
                singlePost: payload,
                loading: false
            };
        case ADD_COMMENT:
            return {
                ...state,
                singlePost: {...state.singlePost, comments: payload},
                loading: false
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                singlePost: {
                    ...state.singlePost,
                    comments: state.singlePost.comments.filter(comment => comment._id !== payload)},
                loading: false
            };
        default:
            return state;
    }
}