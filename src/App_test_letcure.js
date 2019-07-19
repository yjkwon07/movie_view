import React , {Component} from 'react';
import './App.css';
import Movie from './Movie';

/*
  1. Creating React Components with JSX
  모든 컴포넌트는 render function을 갖고 있다.
  render 기능은 '뭔가를 보여주는, 출력하는' 기능이다.
  '이 컴포넌트가 나에게 보여주는 것이 무엇이가' 
  이게 render 기능이다.

  예를 들어 yarn start를 실행한다면, 
  JS의 모든 코드를 index.js으로 가져와서, html 파일에 담는다.
  파일들을 public 폴더(CRA로 만들어진 파일)에서 찾을 수 있다. 
  index.js에 파일을 만들고 있다.
*/

/*
  2. data flow with props
  리액트에는 2개의 주요 컨셉이 있다.
  하나는 state, 나머지 하나는 props라고 한다.
  
  * props??? 
  메인 컴포넌트 App은 모든 영화들을 가져온다.
  즉, 영화의 정보를  가지위한 무비 리스트가 존재 해야한다.
  parent Compenent는 Child Compoenet에게 각각 정보를 주어야 할 떼,
  props를 사용한다.
*/

const movies = [
  {
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Old Boy",
    poster: "https://stat.ameba.jp/user_images/20190425/21/guambal/49/cc/j/o0220031314397652177.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
  },
  {
    title: "Trainspotting",
    poster: "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  }
];

class App extends Component{
  
  
  render() {
    return (
    // 부모 컴포넌트는 이제, 타이틀 , 포스터를 자식 컴포넌트 
    // (Movie)에게 준다

    /*
        JSX
        JSX는 리액트 컴포넌트를 만들때 사용하는 언어이다.
        규칙은 간단하다. 
        ex: css의 'class'가 아니라 'className'이라고 쓴다.
    */
    
    /*
       3. Lists with.map
       map()을 하면 새로운 array가 생기는데, 다른 array의 엘리먼트를 포함한 값이다.
      array(정렬된 항목)을 선택, 해당 항목들을 맵핑, 우리가 설계한 모습의 새로운 리스트를 만든다.
    */
    
    /*
      4-1. has a key!!!!!
        But !!! It is Error
        리액트는 엘리먼트가 많을경우 key라는 것을 줘야 한다.
        key is unique~~~!!!
        arguments ~~  : 
          map 기능을 실행해서 1개의 argument "movie"를 얻게 된다.
          movie는 현 사이클의 현재 엘리먼트를 의미한다.
          그 외 다른건, index라고 하자.
          index : 현재 제공하는 리스트의 숫자를 의미한다.
          그래서 key prop으로 index를 작성한다.
        만약 key를 삭제하면 다시 에러메시지를 보게 된다. 
    */
    <div className="App">
      {this.state.greeting}
      {this.state.movies.map((movie , index)=> {
       return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
      })}
    </div>
  );
}

  /*
    5. Component Lifecycle
    컴포넌트는 여러 기능들을 정해진 순서대로 실행한다.
    (1) WillMount -> (2) render -> (3) DidMount이 싸이클은 자동으로 발생한다. 
    컴포넌트가 존재하기 시작하면, 리액트 세계는 will mount -> did render -> did mount를 한다.
  */

  /*
    Redner: 
    compoentWillMount() -> render() -> compoentDidMount()
    
    예를 들면, 영화앱과 같은 어플리케이션을 만들다면, willmount를 진행할때 api에 작업을 요청한다.
    해당 작업 수행이 완료되면, 그 다음에 데이터 관련된 작업을 한다.

    willmount를 보면 사이클이 시작되었음을 알게될것이고,
    render를 보면 이제 컴포넌트가 리액트 세계에 '존재'하게 되었음을 알게될것이고,
    did mount를 보면, 이제 성공적으로 리액트 세계에 컴포넌트가 자리잡았음을 알게 된다.
  */
  /*
    Update: 
    copoentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    componentWillReceiveProps() : 컴포넌트가 새로은 props을 받았다.
    shouldComponentUpdate() : 리액트는 old props, new props를 살펴본 다음에, 
                              이전과 새로운 props가 다르면, 리액트는 shouldComponentUpdate() === true라고 생각한다.
    componentWillUpdate() : 컴포넌트가 업데이트를 할 거라는 단계로 넘어간다. 
    render()
    componentDidUpdate() 

    예를 들면, component will update 수행할 때 어플리케이션에 '빙글뱅글 돌아가는 spinner'를 붙일 수 도 있다. 
    update 이 후에는, 돌고있던 '로딩 중' 메시지나 아이콘을 숨기면 된다. -> 컴포넌트 업데이트가 완료 되었으니깐
  */
  componentWillMount() {
    console.log("compoentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // 직접적으로 변경하면 위의 render 설정들이 작동을 안한다.
    /*
      setTimeout(() => {
        this.state.greeting = 'somthing';
      },5000);
    */

    // state를 업데이트 하려면 this.setState를 사용해야한다.
    // 이 뜻은, 컴포넌트가 mount할 때마다, greeting을 hello -> hellagin으로 
    // 변경한다는 뜻이다.
    // 그렇게 된다면 다시 render가 다시 발생할것이다.
    // 그래서 greeting 렌더릴을 setState에서 한다.
    // state를 바꿀 수 잇고, 자동으로 render가 작동된다.
    setTimeout(() => {
      this.setState({
        greeting : "hello again"
      })
    },5000);

    /*
      7. Practicing this setState
      컴포넌트 외부에 있는 (const)movies state 안으로 옮겨보자.
      timeOut() : 지정한 시간 후에 작업을 수행 시킨다.
      ex: infinite scrolling ~~~
    */ 
    setTimeout(() => {
      this.setState({
        movies : [
          ...this.state.movies,
          {
            title : "Transporting2",
            poster: "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          },
          // ...this.state.movies,
        ]
      })
    }, 1000);
  }   

  /*
    6. Thinking ing React Component State
    state는 리액트 컴포넌트 안에 있는 오브젝트 이다. 
    rule :
      state가 바뀔 때 마다, 컴포넌트는 다시 render가 발생 할 것이다.
    컴포넌트가 mount되면 5초를 기다리고, greeting을 업데이트 할것이다. 
  */
  state = {
    greeting : "hello",
    movies : movies
  }

}
export default App_test_lecture;
