<script src="http://localhost:8097" />;
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function App(): JSX.Element {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');

  const numsArray = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', '='],
  ];
  const operatorsArray = ['DEL', '+', '-', '*', '/'];

  const rows = numsArray.map((row, index) => {
    return (
      <View style={styles.row} key={index}>
        {row.map((number, i) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              key={i + '-' + number}
              onPress={() => handleOnPressNumber(number)}>
              <Text style={[styles.f24, styles.textWhite]}>{number}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  });
  const operators = operatorsArray.map((operator, index) => {
    return (
      <TouchableOpacity
        style={styles.btn}
        key={index + '-' + operator}
        onPress={() => handleOnPressOperator(operator)}>
        <Text style={[styles.textWhite, styles.f20]}>{operator}</Text>
      </TouchableOpacity>
    );
  });

  function handleOnPressNumber(text = '') {
    let inputNums = input + text;
    if (text === '=') {
      handleEvaluation();
    } else {
      setInput(inputNums);
    }
  }
  function handleOnPressOperator(text = '') {
    switch (text) {
      case 'DEL':
        if (input.length > 0) {
          let inputNums = input.slice(0, -1);
          setInput(inputNums);
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        let lastChar = input.slice(-1);
        let lastCharCode = lastChar.charCodeAt(0);
        let operatorCharCode = text.charCodeAt(0);

        if (
          lastChar === text ||
          (lastCharCode >= 42 &&
            lastCharCode <= 47 &&
            operatorCharCode >= 42 &&
            operatorCharCode <= 47) ||
          input.length === 0
        ) {
          return;
        } else {
          let inputNums = input + text;
          setInput(inputNums);
        }
    }
  }
  function handleEvaluation() {
    let lastChar = input.slice(-1);
    let lastCharCode = lastChar.charCodeAt(0);
    if (lastCharCode >= 42 && lastCharCode <= 47) {
      return;
    } else {
      let evaluatedRes = eval(input);
      setResult(evaluatedRes);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={[styles.inputText]}>{input}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={[styles.resultText]}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.rows}>{rows}</View>
        </View>
        <View style={styles.operations}>{operators}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '12%',
  },
  rows: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 2,
    backgroundColor: '#fafafa',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  inputText: {
    fontSize: 32,
  },
  calculation: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  resultText: {
    fontSize: 24,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#636363',
  },
  textWhite: {
    color: 'white',
  },
  f24: {
    fontSize: 24,
  },
  f20: {
    fontSize: 20,
  },
});

export default App;
