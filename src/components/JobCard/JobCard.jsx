import { Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import styles from './JobCard.style'

export default ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
          <Text style={styles.company}>{item.company.name}</Text>
          <Text style={styles.location}>{item.locations[0].name}</Text>
        </View>

        <Text style={styles.level}>{item.levels[0].name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}