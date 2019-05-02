import React, { Component } from 'react';

import Input from '../components/Input';
import Text from '../components/text';

import './App.css';

/**
 * Mounting
 * -
 * constructor()
 * static getDerivedStateFromProps()
 * render()
 * componentDidMount()
 */

/**
 * Updating
 * -
 * static getDerivedStateFromProps()
 * shouldComponentUpdate()
 * render()
 * getSnapshotBeforeUpdate()
 * componentDidUpdate()
 */

/**
 * Unmounting
 * -
 * componentWillUnmount()
 */

/**
 * Error Handling
 * <추후에... >
 * static getDerivedStateFromError()
 * componentDidCatch()
 */

class App extends Component {
  constructor(props) {
    // console.log('constructor');
    super(props);
    this.state = {
      text: '',
    };
  }

  // componentWillMount() {
  //   // 컴포넌트 렌더링 직전 호출. v17부터 용도 폐기
  //   console.log('componentWillMount');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   /**
  //    * componentWillReveiveProps 대신 사용
  //    * 정적 메소드로 사용한다는 점.
  //    * 클래스 내에만 존재, 인스턴스에는 존재하지 않음
  //    */
  //   console.log('getDerivedStateFromProps');
  //   console.log(nextProps);
  //   console.log(prevState);
  //   // 만약 props에 따라 state 변화 시킨다면, 로직 진행 후, 변경된 state를 객체 형태로 리턴
  //   return {};
  // }

  // componentDidMount() {
  //   /**
  //    * 컴포넌트 렌더링 시에 호출.
  //    * 외부 라이브러리 연동시, ajax 요청시, DOM 관련 작업에 사용
  //    */
  //   console.log('componentDidMount');
  // }

  // // componentWillReveiveProps(nextProps) {
  // //   /**
  // //    * 컴포넌트가 새로운 props 받을 때 호출
  // //    * state가 props에 따라 변해야 되는 로직 쓸 때 주로 씀
  // //    * v17때 폐기 예정
  // //    */
  // //   console.log('componentWillReveiveProps');
  // //   console.log(`props: ${this.props} / nextProps: ${nextProps}`);
  // // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   /**
  //    * props, state 값이 변하기 직전 호출.
  //    * return 값이 true이면 렌더링 진행, false면 멈춘다.
  //    * 즉 개발자의 로직으로 쓸모없는 렌더링을 막아서 성능 최적화를 하게 하는 함수
  //    */
  //   console.log('shouldComponentUpdate');
  //   console.log(nextProps);
  //   console.log(nextState);

  //   return true;
  // }

  // // componentWillUpdate(nextProps, nextState) {
  // //   /**
  // //    * shouldComponentUpdate가 호출 된 뒤 호출되는데,
  // //    * 주로 컴포넌트 CSS 애니메이션 효과를 초기화 하거나, 이벤트 리스너 제거시 사용.
  // //    * 하지만 곧 폐기되는 함수
  // //    */
  // //   console.log('componentWillUpdate');
  // //   console.log(nextProps);
  // //   console.log(nextState);
  // // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   /**
  //    * 이 메소드가 실행되는 시점에서 이미 렌더링이 종료되고 props와 state 는 변경된 상태
  //    * 여기서 이전의 값들을 통해 Dom 조작을 할수 있다.
  //    * https://reactjs.org/docs/react-component.html?utm_source=caibaojian.com#getsnapshotbeforeupdate
  //    */
  //   console.log('componentDidUpdate');
  //   console.log(prevProps);
  //   console.log(prevState);
  //   console.log(snapshot);
  // }

  // componentWillUnmount() {
  //   /**
  //    * 컴포넌트 제거 직전 호출된다.
  //    * 컴포넌트에 등록된 이벤트를 제거하거나, 필요없는 인스턴스 제거 해주는 로직이 들어간다.
  //    */

  //   console.log('componentWillUnmount');
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   /**
  //    * render 이후에 실행
  //    * 이전의 props와 state를 가져온다.
  //    * 여기서의 return 값은 이후 componentDidUpdate의 세번째 parameter로 가져온다.
  //    */
  //   console.log('getSnapshotBeforeUpdate');
  //   console.log(prevProps);
  //   console.log(prevState);
  //   return null;
  // }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({
      text,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <p>리액트 앱</p>
        <div>
          <input type="text" onChange={this.handleChange} />
        </div>
        <div>
          <Input handleChange={this.handleChange} />
        </div>
        <Text text={text} />
      </div>
    );
  }
}

export default App;
