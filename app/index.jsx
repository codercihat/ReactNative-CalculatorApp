import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";

export default function HomeScreen() {
  const [firstNumber, setFirstNumber] = useState(20);
  const [secondNumber, setSecondNumber] = useState(3);
  const [result, setResult] = useState(0);

  function Sum() {
    return setResult(parseInt(firstNumber) + parseInt(secondNumber));
  }
  function Minus() {
    return setResult(parseInt(firstNumber) - parseInt(secondNumber));
  }
  function Multiply() {
    return setResult(parseInt(firstNumber) * parseInt(secondNumber));
  }
  function Division() {
    return setResult(parseInt(firstNumber) / parseInt(secondNumber));
  }
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DAD7CD",
      }}
    >
      <View>
        <TextInput
          style={{
            textAlign: "center",
            fontSize: 30,
            borderWidth: 3,
            height: 80,
            width: 280,
            marginBottom: 10,
            borderColor: "#344E41",
            borderRadius: 10,
            backgroundColor: "#A3B18A",
            color: "#FFFBEE",
          }}
          onChangeText={setFirstNumber}
          placeholder="first number "
          keyboardType="numeric"
        />
        <TextInput
          style={{
            textAlign: "center",
            fontSize: 30,
            borderWidth: 3,
            height: 80,
            width: 280,
            marginBottom: 10,
            borderColor: "#344E41",
            borderRadius: 10,
            backgroundColor: "#A3B18A",
            color: "#FFFBEE",
          }}
          onChangeText={setSecondNumber}
          placeholder="second number"
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#588157",
          }}
          onPress={Sum}
        >
          <Text style={{ color: "white", fontSize: 25 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#588157",
          }}
          onPress={Minus}
        >
          <Text style={{ color: "white", fontSize: 25 }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#588157",
          }}
          onPress={Multiply}
        >
          <Text style={{ color: "white", fontSize: 25 }}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#588157",
          }}
          onPress={Division}
        >
          <Text style={{ color: "white", fontSize: 25 }}>/</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 35, color: "#3A5A40", fontWeight: "bolder" }}>
        ={" "}
      </Text>
      <Text
        style={{
          fontSize: 50,
          maxWidth: 260,
          color: "#1B2821",
          fontWeight: "bolder",
        }}
      >
        {result}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
