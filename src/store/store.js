import {createStore, applyMiddleware, compose} from 'redux';
import answersReducer from '../store/reducers/answers.js';
import blogReducer from '../store/reducers/blogs.js';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
    combineReducers({
            answers: answersReducer,
            blogs: blogReducer
        }
    ),
    compose(applyMiddleware(thunk))
);
