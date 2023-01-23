<script src="http://localhost:8097" />;
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function App(): JSX.Element {
  const [result, setResult] = useState(0);
  function test() {
    let num = 123;
    setResult(num);
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.inputText}>11*111</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
          <View style={styles.row}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
          <View style={styles.row}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
          <View style={styles.row}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
        </View>
        <View style={styles.operations}>
          <Button title="+" onPress={test} />
          <Button title="+" />
          <Button title="+" />
          <Button title="+" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '12%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  inputText: {
    fontSize: 32,
    color: 'white',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  resultText: {
    fontSize: 24,
    color: 'white',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'grey',
  },
});

export default App;
