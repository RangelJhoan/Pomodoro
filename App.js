import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Header from './src/components/Header'
import Timer from './src/components/Timer'

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")
  const [isActive, setIsActive] = useState(false)

  function handleStartStop(){
    setIsActive(!isActive)
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style={{flex:1, paddingHorizontal: 15,  paddingTop: Platform.OS === "android" && 30}}>
        <Text style={styles.text}>Pomodoro</Text>
        
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />

        <Timer time={time} />

        <TouchableOpacity onPress={handleStartStop} style={styles.button}>
          <Text style={{color: "white", fontWeight: "bold"}}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 32,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#333333",
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    padding: 15
  }
});
