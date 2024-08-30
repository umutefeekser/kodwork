import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobFavoriteCard from '../../components/JobFavoriteCard'
import { favoriteFunc } from '../../redux/slicers/favoriteSlicer'

export default ({navigation}) => {

  const dispatch = useDispatch()
  const favorite = useSelector((state) => state.favorite.list)

  const onPressFunc = (item) => {
    dispatch(favoriteFunc(item))
  }

  const renderItem = ({item}) => <JobFavoriteCard navigation={navigation} onPress={() => onPressFunc(item)} item={item} />

  return <FlatList 
    data={favorite}
    renderItem={renderItem}
  />
}