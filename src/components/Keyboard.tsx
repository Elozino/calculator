import React from 'react';
import { Text, View } from 'react-native';

import Button from './Button';
import { globalStyles } from '../styles/globalStyles';

const Keboard = () => {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return <Text style={Number(result) < 99999 ? [globalStyles.screenFirstNumber, globalStyles.resultText] : [globalStyles.screenFirstNumber, globalStyles.resultText]}>{result?.toString()}</Text>;
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={globalStyles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={globalStyles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[globalStyles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[globalStyles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "×":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 120,
          width: "100%",
          justifyContent: "flex-end",
          flex: 0.4
        }}
      >
        <Text style={globalStyles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={{ flex: 0.6, justifyContent:'center', alignItems: 'center' }}>
        <View style={globalStyles.row}>
          <Button title="C" isGray onPress={clear} />
          <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
          <Button title="％" isGray onPress={() => handleOperationPress("％")} />
          <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
        </View>
        <View style={globalStyles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button title="×" isBlue onPress={() => handleOperationPress("×")} />
        </View>
        <View style={globalStyles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
        </View>
        <View style={globalStyles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
          <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
        </View>
        <View style={globalStyles.row}>
          <Button title="." onPress={() => handleNumberPress(".")} />
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
          <Button title="=" isBlue onPress={() => getResult()} />
        </View>
      </View>
    </View>
  )
}

export default Keboard