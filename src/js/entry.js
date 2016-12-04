import {createStore} from 'redux';
import React,{Component} from 'react';
import  ReactDom from 'react-dom';

//reducer 1.纯函数，不对外界产生影响    2.state 

// function add(arr, ele){
//     arr.push(ele);              不是
// }
// var arr = [];
// add(arr, 1);

// function add(x, y){
//     return x + y;                是
// }
// add(2,1);

// 。。。。。。。。。。。。。。。。。。

// const reducer = (state = 0, action) =>{
//     switch(action.type){
//         case 'increase':
//             return state + 1;
//         case 'decrease':
//             return state + 1;
//         default:
//             return state;
//     }
// }

// let store = createStore(reducer);自己封装create

// const createStore = (reducer) =>{
//     let state;
//     // 封装自己的方法
//     let list = [];
//     const getState = ()=>{
//         return state;
//     }

//     const dispatch = (action)=>{
//         state = reducer(state, action);
//         list.forEach((func)=>{
//             func();
//         })
//     }

//     const subscribe = (func) => {
//         list.push(func);
//         return (fn) =>{
//             list = list.filter((cb)=>{
//                 if (cb == fn){
//                     return false;
//                 }else{
//                     return true;
//                 }
//             })
//         }
//     }
//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }
//  let store = createStore(reducer);

// store.dispatch({
//     type:'init'
// })

// const render = ()=>{
//     document.body.innerHTML = store.getState();
// }

// render();

// let filter = store.subscribe(render);//订阅 每次dispatch 就出发
// // filter(render);//取消订阅

// document.onclick=() =>{
//     store.dispatch({type: 'increase'});
//     filter(render);//只出发一次
// }


// 。。。。。。。。。。。。。。。。。。
const reducer = (state = 0, action) =>{
    switch(action.type){
        case 'increase':
            return state + 1;
        case 'decrease':
            return state - 1;
        default:
            return state;
    }
}
 let store = createStore(reducer);


class App extends Component{
    render () {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={()=>{store.dispatch({type:'increase'})}}>+</button>
                <button onClick={()=>{store.dispatch({type:'decrease'})}}>-</button>
            </div>
        )
    }
}

const render =()=>{
    ReactDom.render(
        <App/>,
        document.getElementById('root')
    )
}
render();
store.subscribe(render);
