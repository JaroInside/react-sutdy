import React, { Component } from 'react';

import Label from './label';
import './Calculator.css';

class Calculator extends Component {
  state = {
    input: ['', ''],
    operation: '',
    result: '',
  };

  expresstion = ['+', '−', '×', '÷'];

  handleInputChange = (val, index) => {
    // const a = [1, 2, 3, 4, 5, 6, 7];
    // const a = [8, 7, 6, 5, 4, 3, 2, 1];
    // const a = ['z', 'x', 'c', 'a'];

    // console.log(a.findIndex(i => i < 5));
    // console.log(a.indexOf(1));

    // console.log(a.join(' m '));

    // console.log(a.sort());
    // console.log(val);
    // console.log(typeof val);
    // console.log(Number('asdfsadfsdf'));
    // console.log(Number('1111111'));
    // console.log(Number.isNaN(Number('asdfsadfsdf')));
    // console.log(Number.isNaN(Number('1111111')));

    if (!Number.isNaN(Number(val))) {
      const { input, operation } = this.state;
      const newInput = input.map((v, i) => (index === i ? val : v));

      const newOperation = newInput.some(i => i !== '') ? operation : '';
      this.setState({
        input: newInput,
        operation: newOperation,
        result: '',
      });
    }
  };

  selectExpression = e => {
    const { innerText } = e.target;
    this.setState({
      operation: innerText,
      result: '',
    });
  };

  checkAllInput = () => {
    const { input, operation } = this.state;
    const checkArray = [...input, operation];
    return checkArray.some(c => c === '') ? '' : ' = ';
  };

  calculatorClear = () => {
    this.setState({
      input: ['', ''],
      operation: '',
    });
  };

  calculatorStart = () => {
    const { input, operation } = this.state;
    if (input.some(i => i === '') || operation === '')
      alert('수식이 완성되지 않았습니다.');
    else {
      switch (operation) {
        case '+':
          this.setState({
            result: input[0] + input[1],
          });
          break;
        case '−':
          this.setState({
            result: input[0] - input[1],
          });
          break;
        case '×':
          this.setState({
            result: input[0] * input[1],
          });
          break;
        case '÷':
          this.setState({
            result: (input[0] / input[1]).toFixed(0),
          });
          break;
        default:
      }
    }
  };

  render() {
    const {
      expresstion,
      handleInputChange,
      selectExpression,
      checkAllInput,
      calculatorClear,
      calculatorStart,
    } = this;
    const { input, operation, result } = this.state;
    return (
      <div className="calculator">
        <h1>계산기</h1>
        {input.map((v, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Label key={`calInput_${i}`} label={`숫자 ${i + 1}`}>
            <input
              type="text"
              value={v}
              onChange={e => {
                const { value } = e.target;
                handleInputChange(value, i);
              }}
            />
          </Label>
        ))}
        <Label label="수식">
          {expresstion.map(exp => (
            <button
              key={`expresstion_${exp}`}
              type="button"
              onClick={selectExpression}
            >
              {exp}
            </button>
          ))}
        </Label>
        <Label label="계산식">
          <div className="oper">
            {`${input[0]} ${operation} ${input[1]} ${checkAllInput()}`}
          </div>
        </Label>
        <Label label="결과">
          <div>{result}</div>
        </Label>
        <Label label="테스트라벨">
          <span>테스트</span>
        </Label>
        <div>
          <button type="button" onClick={calculatorClear}>
            초기화
          </button>
          <button type="button" onClick={calculatorStart}>
            계산
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
