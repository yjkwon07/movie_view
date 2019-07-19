import React , {Component} from 'react';
import './App.css';
import Movie from './Movie';

  /*
    8. loading states 
    자신이 필요한 데이터가 항상 바로 즉시 존재하지는 않는다.
    데이터 없이 컴포넌트가 로딩을 하고, 
    데이터를 위해 API를 불러서, 
    API가 데이터를 주면, 
    자신의 컴포넌트 state를 업데이트를 하게 된다.
    
    API콜을 타임아웃 기능으로 유사하게 구혀해보자.
    영화가 state에 없을 때마다 로딩을 띄우거나, 
    영화리스트를 보이도록 하자.
  */
 
  class App extends Component {
    state = {
      greeting : "Hello",
    }

    componentWillMount() {
      console.log("compoentWillMount");
    }
  
    componentDidMount() {
     console.log("componentDidMount");
     // then function은 1개의 attribute만 준다.
     // 그리고 fetch의 결과물은 오브젝트이다.   
     fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count")
     .then(response => response.json())
     .then(json => console.log(json))
     .catch(err => console.log(err))
    
    }
    
    _rederMovies = () => {
      const movies = this.state.movies.map((movie, index) => {
        return <Movie title = {movie.title} poster={movie.poster} key ={index} />
      });
      return movies
    }

    render() {
      return (
      // 자신이 찾고있는 데이터가 있느지 체크를 하고, 자바스크립트에게 물어본다.
      // 만약 참이면 _rederMovies()를 실행
      // 거짓이면 Loding을 출력

      <div className="App">
           {this.state.movies  ? this._rederMovies() : "Loading"}
      </div>
      ); 
    }
  }

  export default App;