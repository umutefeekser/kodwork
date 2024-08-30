import { Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import styles from './JobFavoriteCard.style'
import Button from '../Button'

export default ({item, onPress, navigation}) => {

  if(item.levels && item.locations) return (
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate("JobList")
      navigation.navigate("JobDetail", item.id)
    }}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
          <Text style={styles.company}>{item.company.name}</Text>
          <Text style={styles.location}>{item.locations[0].name}</Text>
        </View>

        <Text style={styles.level}>{item.levels[0].name}</Text>

        <Button onPress={onPress} iconName="trash-can" text="Unfavorite Job" />
      </View>
    </TouchableWithoutFeedback>
  )
}