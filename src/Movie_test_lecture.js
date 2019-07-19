import React, {Component} from 'react';
import './Movie.css';
// import propTyeps from 'prop-types';

// movie 컴포넌트는 포스터만 poster컴포넌트에게 준다.
/*
    4-2. Validating Props with Prop Types
    type 검사를 하기위해 propTyes를 사용한다.
*/

class movie extends Component {
    // static propTyeps = {
        // 더이상 사용 안함
        // title : React.propTyeps.string,
        // poster : React.propTyeps.string

        // so yarn add prop-types install!!!! 
        // why ?? 
        /*
            리액트 안에 PropTypes가 있었는데, 
            두개가 이제 나뉘어 졌다. 그래서 따로 따로 인스톨 해야한다.
        */
       // isRequired라고 작성하면 movie컴포넌트는 title이라는 prop을 
       // 제공하는 것이 필수로 설정된다.
    //    title : propTyeps.string.isRequired,
    //    poster : propTyeps.string.isRequired
    // }

    render() {
        return (
            // 내가 이미 어떤 오브젝트(props)가 있으면, 괄호를 한번 치고,
            // this.props."title"이렇게 쓰면 된다.
            <div>
                <h1> {this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    }
}

class MoviePoster extends Component {
    // static propTyeps = {
        // poster : propTyeps.string.isRequired
    // }

    render() {
        return(
            <img src={this.props.poster}></img>
        )
    }
}
export default movie