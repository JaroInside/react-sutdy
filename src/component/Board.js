import React, { Component } from 'react';
import BoardList from './BoardList';

class Board extends Component {
  state = {
    data: [
      {
        // userSeq: 1,
        firstName: '하민1',
        lastName: '박',
        buttonBool: false,
      },
      {
        // userSeq: 2,
        firstName: '하민2',
        lastName: '박',
        buttonBool: false,
      },
      {
        // userSeq: 3,
        firstName: '하민3',
        lastName: '박',
        buttonBool: false,
      },
    ],
  };

  firstNameDump = '';

  lastNameDump = '';

  /*
    게시글 불러오는 li 컴포넌트 만들기
    state에 기존 게시글 6개 만들어 놓기
    6개 뿌리기
    하단에 인풋, 버튼 영역 만들기
    인풋값 받고, 보여주기
    버튼 눌렀을때 : 1. 인풋 비어있는지 체크 2-1. 비어있으면 얼럿 2-2. 리스트 저장 새로 뿌리기
  */

  handleChange = e => {
    if (e.target.name === 'lastNameDump') {
      this.lastNameDump = e.target.value;
    }
    if (e.target.name === 'firstNameDump') {
      this.firstNameDump = e.target.value;
    }
  };

  handleToggle = b => {
    const { data } = this.state;
    console.log(data);
    const newData = data.map((da, i) => {
      const newData2 = da;
      if (i === b) newData2.buttonBool = !da.buttonBool;
      return newData2;
    });
    console.log(newData);
    this.setState(state => {
      return {
        ...state,
      };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <h1>Board</h1>
        <ul>
          {data.map((a, b) => (
            <BoardList
              num={b + 1}
              firstName={a.firstName}
              lastName={a.lastName}
              key={b}
              buttonBool={a.buttonBool}
              toggle={() => this.handleToggle(b)}
            />
          ))}
        </ul>
        <div>
          <input name="lastNameDump" type="text" onChange={this.handleChange} />
          <input
            name="firstNameDump"
            type="text"
            onChange={this.handleChange}
          />
          <button type="button">등록</button>
        </div>
      </>
    );
  }
}

export default Board;
