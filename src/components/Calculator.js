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
          break;
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
