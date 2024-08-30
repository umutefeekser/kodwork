import { FlatList, Text } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'

import JobCard from '../../components/JobCard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

export default ({navigation}) => {
  
  const { data, loading, error } = useFetch(`${process.env.API_URL}?page=1`)

  const renderItem = ({item}) => <JobCard onPress={()=>navigation.navigate(`JobDetail`, item.id)} item={item} />

  if(loading) return <Loading/>
  
  if(error) return <Error/>

  return (
    <FlatList
      data={data.results}
      renderItem={renderItem}
    />
  )
}