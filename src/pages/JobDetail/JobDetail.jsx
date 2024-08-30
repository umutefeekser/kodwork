import { View, Text, ScrollView, Dimensions } from 'react-native'
import styles from './JobDetail.style'
import useFetch from '../../hooks/useFetch'
import RenderHTML from 'react-native-render-html'

import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { favoriteFunc } from '../../redux/slicers/favoriteSlicer'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default ({route}) => {

  const { data, loading, error } = useFetch(`${process.env.API_URL}/${route.params}`)
  const dispatch = useDispatch()

  const favorite = useSelector((state) =>state.favorite.list)

  const favoriteClick = () => {
    dispatch(favoriteFunc(data))
  }

  useEffect(()=>{
    AsyncStorage.setItem('@FAVORITES', JSON.stringify(favorite));
  },[favorite])

  if(loading || !data.locations || !data.levels) return <Loading/>
  
  if(error) return <Error/>

  return (
    <View style={styles.container}>
      <View class={styles.info_container}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.location}>
          <Text style={styles.tomato}>Location:</Text> {data.locations[0].name}
        </Text>
        <Text style={styles.level}>
          <Text style={styles.tomato}>Job Level:</Text> {data.levels[0].name}
        </Text>
      </View>

      <View style={styles.detail_container}>
        <Text style={styles.detail_title}>Job Detail</Text>
        <ScrollView style={styles.detail}>
          <RenderHTML contentWidth={Dimensions.get('window').width} source={{html: data.contents || "<h1>There is no detail.</h1>"}} />
        </ScrollView>
      </View>

      <View style={styles.button_container}>
        <Button iconName="login" text="Submit" />
        <Button isFavorite={favorite.findIndex(i => i.id == data.id) >= 0} onPress={favoriteClick} iconName="heart" text={favorite.findIndex(i => i.id == data.id) >= 0 ? "Unfavorite Job" : "Favorite Job"} />
      </View>
    </View>
  )
}