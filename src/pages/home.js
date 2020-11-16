import React from "react"
import {
  FlatList
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../component/header';
import News from '../component/news.cell';

const Home = () => {
  return(
    <SafeAreaView>
      <Header headerTitle={"Berita Terkini"}/>
      <FlatList data={[0,1,2]}
                renderItem={(value, index)=>{
                  return(
                    <News/>
                  )
                }}/>
    </SafeAreaView>
  )
}
export default Home
