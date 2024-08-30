import React from 'react'
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <LottieView
      source={require("../../assets/Loading.json")}
      style={{width: "90%", height: "100%", alignSelf: "center"}}
      autoPlay
      speed={1.5}
      loop
    />
  )
}

export default Loading