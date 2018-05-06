// Reducersの実装
// 　Action：何をしたいのか、State：今の状態、をStoreから受け取り、新たなStateを作成してStoreに返却する。
import { combineReducers } from 'redux';

// 一つ一つのTODOを処理するための関数（todosから利用される）
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return {
            id: action.id,
            text: action.text,
            complete: false
        };
        case 'TOGGLE_TODO':
        if(state.id !== action.id){
            return state;
        }
        return Object.assign({}, state, {
            complete: !state.completed
        });
        default:
        return state;
    }
}

// 複数のTODOを処理するための関数
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return [
            ...state,
            todo(undefined, action)
        ];
        case 'TOGGLE_TODO':
        return state.map(t => 
            todo(t, action)
        );
        default:
        return state;
    }
}

// TODOの表示状態を処理するための関数
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
        return action.filter;
        default:
        return state;
    }
}

// 上記の関数をまとめて外部に公開
const todoApp = combineReducers({
    todos,
    visibilityFilter
});
export default todoApp;