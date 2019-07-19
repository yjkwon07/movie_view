import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*
    index.js는 React, reactDOM, css, 컴포넌트 'App'을 불러온다.
*/

/*
    한개의 컴포넌트를 render하고 있다.
    컴포넌트 이름은 App
    그 App 컴포넌트 안에 여러개의 컴포넌트를 만들 수 있다.
    !!하지만 출력은 1개만 하고 있다.!!
*/

// (component , where)
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

/*
    react : UI ribrary
    reactDOM : 리액트를 웹사이트에 출력(render)하는 걸 도와주는 모델이다.
    DOM(Document Object Model)
*/

/*
    리액트를 사용해서 웹사이트에 올려 놓고 싶다면 reactDOM을 사용
    리액트를 모바일 앱에 오려놓고 싶다면 reactNative

    So, react = ribrary , reactDOM = ribrary를 웹사이트에 출력
    reactDOM은 1개의 컴포넌트를 출력(render)하고 
    그 다큐먼트 안에 엘리먼트가 있는데, 엘리먼트 ID는 root다.
    이건 index.html파일에 숨어 있다.
    그래서 렌더를 하면 모든 컴포넌트들이 index.html에 출력
*/
