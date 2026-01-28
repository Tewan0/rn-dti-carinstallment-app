import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const car = require("@/assets/images/car.png");

const DOWN_PAYMENT = [5, 10, 15, 20, 25, 30, 35];
const MONTH_OPTION = [24, 36, 48, 60, 72, 84];

export default function Input() {
  const [carPrice, setCarPrice] = useState("");
  const [carDownPayment, setCarDownPayment] = useState("");
  const [carMonth, setCarMonth] = useState("");
  const [carInterest, setCarInterest] = useState("");
  const [carInstallment, setCarInstallment] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scoreContainer}
      >
        <Image source={car} style={styles.car} />

        <View style={styles.inputContainer}>
          <Text style={{ fontFamily: "Prompt_700Bold", fontSize: 25 }}>
            คำนวณค่างวดรถ
          </Text>
          <Text style={styles.inputTitle}>ราคารถ (บาท):</Text>
          <TextInput
            placeholder="เช่น 850,000"
            placeholderTextColor="#a5a5a5"
            keyboardType="numeric"
            style={styles.inputValue}
            value={carPrice}
            onChangeText={setCarPrice}
          />
          <Text style={styles.inputTitle}>เลือกเงินดาวน์ (%):</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DOWN_PAYMENT.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.downPayment,
                  carDownPayment === item.toString() &&
                    styles.downPaymentSelect,
                ]}
                onPress={() => setCarDownPayment(item.toString())}
              >
                <Text
                  style={[
                    styles.downLabel,
                    carDownPayment === item.toString() &&
                      styles.downLabelSelect,
                  ]}
                >
                  {item}%
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.inputTitle}>ระยะเวลาผ่อน (งวด):</Text>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            {MONTH_OPTION.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.monthOption,
                  carMonth === item.toString() && styles.moneyOptionSelect,
                ]}
                onPress={() => setCarMonth(item.toString())}
              >
                <Text
                  style={[
                    styles.moneyLabel,
                    carMonth === item.toString() && styles.moneyLabelSelect,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.inputTitle}>ดอกเบี้ย (% ต่อปี):</Text>
          <TextInput
            placeholder="เช่น 2.59"
            placeholderTextColor="#a5a5a5"
            keyboardType="numeric"
            style={styles.inputValue}
            value={carInterest}
            onChangeText={setCarInterest}
          />
          <TouchableOpacity style={styles.btnCal}>
            <Text style={styles.labelCal}>คํานวณค่างวด</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  labelCal: {
    fontFamily: "Prompt_700Bold",
    fontSize: 20,
    color: "#fff",
  },
  btnCal: {
    backgroundColor: "#0095ff",
    padding: 20,
    marginTop: 25,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  downLabel: {
    fontFamily: "Prompt_600SemiBold",
    fontSize: 15,
    color: "#3b4a54",
  },
  downLabelSelect: {
    color: "#ffffff",
  },
  downPayment: {
    backgroundColor: "#f1f5f9",
    padding: 15,
    margin: 5,
    borderRadius: 25,
    height: 50,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  downPaymentSelect: {
    backgroundColor: "#001a33",
  },
  moneyLabel: {
    fontFamily: "Prompt_600SemiBold",
    fontSize: 15,
    color: "#3b4a54",
  },
  moneyLabelSelect: {
    color: "#ffffff",
  },
  monthOption: {
    backgroundColor: "#f1f5f9",
    padding: 15,
    margin: 5,
    borderRadius: 25,
    height: 50,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  moneyOptionSelect: {
    backgroundColor: "#001a33",
  },
  inputValue: {
    fontFamily: "Prompt_400Regular",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d8d8d8",
    backgroundColor: "#f1f1f1",
    marginTop: 6,
  },
  inputTitle: {
    fontFamily: "Prompt_600SemiBold",
    fontSize: 15,
    marginTop: 18,
  },
  inputContainer: {
    backgroundColor: "#ffffff",
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
  },
  car: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  scoreContainer: {
    flex: 1,
  },
});
