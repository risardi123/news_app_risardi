import React from "react"
import {
  Linking,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../component/header';
import {topOrBottom} from '../config_layout';
import News from '../component/news.cell';
import {useDispatch, useSelector} from 'react-redux';
import {deleteReadingList} from '../redux/actions/readingList';

const HomeReadingList = ({navigation}) => {
  const dispatch = useDispatch()
  const reading_list = useSelector(state=>state.reading_list)
  return(
    <SafeAreaView styles={{flex: 1}}>
      <Header headerTitle={"Bacaan Saya"}
              onChangeLeft={()=>navigation.goBack()}/>
      <FlatList data={reading_list.length > 0 && reading_list}
                contentContainerStyle={{ paddingBottom: topOrBottom}}
                renderItem={({item, index})=>{
                  const {title, description, url, urlToImage, book_mark_id} = item
                  return(
                    <News id={index}
                          title={title}
                          isDelete
                          onPressTitle={()=>Linking.openURL(url)}
                          onPressBookMark={()=>dispatch(deleteReadingList(book_mark_id))}
                          description={description}
                          imageLink={urlToImage}/>
                  )
                }}/>
    </SafeAreaView>
  )
}
export default HomeReadingList
