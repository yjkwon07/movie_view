import React  from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
/*
    9. Smart vs Dumb Components 
    모든 컴포넌트가 state이 있는 것은 아니다.
    어떤 컴포넌트는 state이 없는 stateless functuional 컴포넌트이다.
    
    이 두개의 컴포넌트는 큰 차이점이 있다.
    한 개는 state이 있고, 나머지 한 개는 state이 없고, 필요하지도 않다.
    이것을 dumb(멍청한) 컴포넌트, smart(똑똑한) 컴포넌트라고 한다.
    똑똑한 컴포넌트는 state이 있고, 멍청한 컴포넌트는 state이 없다.(갖고 있는 것은 props 뿐이다.)
    state이 없고, props밖에 없을때는 클래스 컴포넌트를 쓰는 대신에
    functional 컴포넌트로 바꾸면 된다. 
    정확히 말하면, sateless functional 컴포넌트라고 한다.
    
    예를 들어, movie poster를 갖는 대신에 요소들이 필요없다고 하자.
    이를 stateless functional 컴포넌트로 바꾸는 방법은 function MoviePoster
*/

/*
    이 컴포넌트는 componentWillMount, function , update state 필요가 없다.
    그냥 한개의 props만 있으면 된다. poster와 같이 
    즉, state가 없다.
    function render가 없고, 라이프 사이클도 없다.
    갖고 있는것은 return 밖에 없다.
    state을 잃게 되어, 업데이트 하는 기능들은 사용을 못한다.Components
*/
function Movie({title , poster}) {
    return( 
        <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster}/>
        </div>
    )
}

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

//  prop types 확인
MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
export default Movie;