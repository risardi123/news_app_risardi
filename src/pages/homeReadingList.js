import React, {useEffect} from "react"
import {
  View,
  Text, Linking, FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../component/header';
import {topOrBottom} from '../config_layout';
import News from '../component/news.cell';
import {useSelector} from 'react-redux';

const HomeReadingList = ({navigation}) => {
  const reading_list = useSelector(state=>state.reading_list)
  useEffect(()=>{
    console.log(JSON.stringify(reading_list))
  },[reading_list])
  return(
    <SafeAreaView styles={{flex: 1}}>
      <Header headerTitle={"Bacaan Saya"}
              onChangeLeft={()=>navigation.goBack()}/>
      <FlatList data={reading_list.length > 0 && reading_list}
                contentContainerStyle={{ paddingBottom: topOrBottom}}
                renderItem={({item}, index)=>{
                  const {title, description, url, urlToImage} = item
                  return(
                    <News key={index}
                          title={title}
                          isDelete
                          onPressTitle={()=>Linking.openURL(url)}
                          description={description}
                          imageLink={urlToImage}/>
                  )
                }}/>
    </SafeAreaView>
  )
}
export default HomeReadingList
