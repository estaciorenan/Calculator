import React, { useState } from "react"
import Button from "./components/Button";
import Input from "./components/Input"
import { Container, Content, Row } from "./style"

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [fisrtNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState('')

  const handleEquals = () => {
    if (fisrtNumber !== '0' && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "*":
          handleMultiplicationNumber();
          break;
        case "/":
          handleDivisionNumber();
          break;
        case "%":
          handlePercentageNumber();
          break;
        default:
          break;
      }
    }
  }

  const handlePercentageNumber = () => {
    if (fisrtNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('%')
    } else {
      const div = Number(currentNumber) / 100;
      const sum = div * Number(fisrtNumber);
      setCurrentNumber(String(sum))
      setOperation('%')
    }
  }

  const handleDivisionNumber = () => {
    if (fisrtNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(fisrtNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultiplicationNumber = () => {
    if (fisrtNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const sum = Number(fisrtNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumber = () => {
    if (fisrtNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(fisrtNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleSumNumber = () => {
    if (fisrtNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(fisrtNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  const handleCorrect = () => {

    if (currentNumber !== "0") {
      setCurrentNumber(currentNumber.slice(0, -1))
      if (currentNumber.length == "1") {
        setCurrentNumber('0')
      }
    }
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? '' : prev}${number}`)
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="%" onClick={handlePercentageNumber} />
          <Button label="÷" onClick={handleDivisionNumber} />
          <Button label="c" onClick={handleClear} />
          <Button label="&#9001;" onClick={handleCorrect} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={handleMultiplicationNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
