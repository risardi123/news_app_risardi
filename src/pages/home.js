import React from "react"
import {
  FlatList,
  Linking,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../component/header';
import News from '../component/news.cell';
import {useQuery} from 'react-query';
import {fetch_link, key_news_api} from '../config_key';
import {topOrBottom} from '../config_layout';
import useHandleScroll from '../hooks/useHandleScroll';
import FloatingButton from '../component/floatingButton';
import {useDispatch} from 'react-redux';
import {addReadingList} from '../redux/actions/readingList';
import uuid from 'react-uuid'
import LoadingBlocker from '../component/loadingBlocker';

const Home = ({navigation}) => {
  const {handleScroll, showButton} = useHandleScroll()
  const dispatch = useDispatch()
  const {data, isLoading} = useQuery("",()=>
    fetch(`${fetch_link}/top-headlines?country=id&apiKey=${key_news_api}`,{
      method: 'GET',
    }).then((res)=>res.json())
  )

  return(
    <SafeAreaView style={{flex: 1}}>
      {
        isLoading &&
        <LoadingBlocker/>
      }
      <Header headerTitle={"Berita Terkini"}/>
      <FlatList data={data && data.articles && data.articles}
                onScroll={handleScroll.bind(this)}
                contentContainerStyle={{ paddingBottom: topOrBottom}}
                renderItem={({item, index})=>{
                  const {title, description, url, urlToImage} = item
                  return(
                    <News id={index}
                          title={title}
                          onPressTitle={()=>Linking.openURL(url)}
                          onPressBookMark={()=>dispatch(addReadingList({
                            ...item, book_mark_id: uuid()
                          }))}
                          description={description}
                          imageLink={urlToImage}/>
                  )
                }}/>
      {
        showButton && !isLoading &&
          <FloatingButton onPress={()=>navigation.push("HomeReadingList")}/>
      }
    </SafeAreaView>
  )
}
export default Home
