import {ADD_COMMENT} from './action'
import {EDIT_COMMENT} from './action'
import {REMOVE_COMMENT} from './action'
import {THUMB_UP_COMMENT} from './action'
import {THUMB_DOWN_COMMENT} from './action'

const initialState = {
    comments: [],
    users: []
};

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...state.comments];

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });

        case EDIT_COMMENT:
        	return [{
        		id: action.id,
                text: action.text
                votes: 1
        	}
        	, ...state.comments];  

        case THUMB_UP_COMMENT:
        	return [{
        		id: action.id,
                text: action.text
                votes: 2
        	}
        	, ...state.comments];

        case THUMB_DOWN_COMMENT:
        	return [{
        		id: action.id,
                text: action.text
                votes: 3
        	}
        	, ...state.comments];	

        default:
            return state;    
    }
}