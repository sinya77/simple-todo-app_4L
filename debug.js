// Reducerの単体テスト
import todoApp from './reducers/index.js';

// 初期値となるStateを取得
var initialState = todoApp({}, {});
console.log(initialState);
// => { todos:[], visibilityFilter:"SHOW_ALL"}

// TODOを１つ追加する。
var nextState = todoApp(initialState, { type:'ADD_TODO', id:1, text:'First todo' });
console.log(nextState);
// => { todos:[{ id:1, text:"First todo", completed:false }], visibilityFilter:"SHOW_ALL"}

// TODOをクリックしたら「TODOの完了状態を切り替える」
nextState = todoApp(nextState, {type:'TOGGLE_TODO', id:1});
console.log(nextState);
