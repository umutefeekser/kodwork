import LottieView from 'lottie-react-native'
import React from 'react'

const Error = () => {
  return (
    <LottieView
      source={require("../../assets/Error.json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop={false}
    />
)
}

export default Error