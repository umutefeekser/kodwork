import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default ({text, iconName, isFavorite=false, onPress}) => {
  return (
    <TouchableOpacity style={isFavorite ? styles.container_f : styles.container_unf} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={24} color={isFavorite ? "tomato" : "white"} />
      <Text style={isFavorite ? styles.text_f : styles.text_unf}>{text}</Text>
    </TouchableOpacity>
  )
}