// Viewの実装
// 　Viewにイベントがあった場合にActionCreatorに渡し、そこから"Action"を取得。
// 　取得した"Action"をそのままStoreに渡す（dispatch）。

import{ createStore } from 'redux';
import{ addTodo, toggleTodo, setVisibilityFilter } from './actions/index.js';
import { link } from 'fs';

// createStoreの引数はReducer:ここでは固定値を返す
// let store = createStore(function(){
//     return 'Hello Redux';
// });
let store = createStore(() => { return 'Hello Redux' });

// TODOの追加
var addTodoElem = document.getElementById('addTodo');
var input = addTodoElem.getElementsByTagName('input')[0];
var button = addTodoElem.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    // ボタンをクリックしたら「TODOを追加する」というアクションをStoreに渡す。
    var todoText = input.value;
    // import文によりactions/index.jsの"addTodo()"を呼び出し。
    store.dispatch(addTodo(todoText));
});

// TODOの完了
var todoList = document.getElementById('todoList');
var elements = todoList.getElementsByTagName('li');
// この記法はなに？
var listArray = [...elements];
listArray.forEach((v, index) => {
    v.addEventListener('click', e => {
        // TODOをクリックしたら「TODOの完了状態を切り替える」というアクションをStoreに渡す。
        store.dispatch(toggleTodo(index));
    });
});

// フィルタリング
var links = getElementById('links');
var childs = links.childNodes;
var childList = [...childs];
childList.filter(v => v.nodeName != '#text').forEach(v => {
    v.addEventListener('click', e => {
        // リンクをクリックしたら「TODOのフィルタリング状態を切り替える」
        // というアクションをStoreに渡す。
        var filterText = v.innerHTML;
        store.dispatch(setVisibilityFilter(filterText));
    });
});

