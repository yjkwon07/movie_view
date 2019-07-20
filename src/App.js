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
      /*
        then function은 1개의 attribute만 준다.
        그리고 fetch의 결과물은 오브젝트이다.   
        If you want change a state 
        ->  you may be has a CALLBACK HELL!!!
        fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
      */
      this._getMovies();
    }
    
    // 이전 라인의 작업이 끝날때까지 기다리는 것이 아닐때
    // asynchronous는 이전 작업이 끝나야 그 다음 작업이 시작하는 형태가 아니다.
    // 순서와 상관없이 작업이 진행된다.
    _getMovies = async () => {
      // callApi의 return value를 movies에 set할거다.
      // async를 안쓰면 await이 작동을 안한다.
      const movies = await this._callApi();
      // 이 컴포넌트의 setState을 movies로 할거다.
      // movies는 callApi의 return value이다.
      // 이 setState는 callApi작업이 완료되기(성공적 수행은 아니다.) 전 까지는 실행되지 않는다.
      // 성공적 수행이 되든 실패가 된든 작업이 완료가 되어야 한다.
      // 그 후에 실행이 된다.
      this.setState({
         movies
      });
    };

    _callApi  = () => {
      return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err)) 
    }

    _rederMovies = () => {
      // component of index is very lose...
      // very slowwwww...
      const movies = this.state.movies.map((movie) => {
        return (
          <Movie 
            title = {movie.title_english} 
            poster= {movie.medium_cover_image} 
            key = {movie.id} 
            genres = {movie.genres} 
            synopsis = {movie.synopsis}
          />
        );
      });
      return movies;
    };

    render() {
      const {movies} = this.state;
      return (
      // 자신이 찾고있는 데이터가 있느지 체크를 하고, 자바스크립트에게 물어본다.
      // 만약 참이면 _rederMovies()를 실행
      // 거짓이면 Loding을 출력
        <div className={movies ? "App" : "App--loading"}>
          {movies ? this._rederMovies() : "Loading"}
        </div>
      );
    }
  }

  export default App;