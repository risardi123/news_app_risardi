import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
import {allPadding, DeviceWidth, topOrBottom} from '../config_layout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const News = (props) => {
  const {imageLink, title, onPressTitle, isDelete, onPressBookMark, description} = props
  return(
    <View style={Styles.container}>
      <View style={Styles.image}>
        <Image source={{uri: imageLink || "" }}
               style={Styles.flexOne}/>
      </View>
      <View style={Styles.containerRight}>
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginBottom: allPadding}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}
                onPress={onPressTitle}>
            {title}
          </Text>
          <MaterialCommunityIcons
            onPress={onPressBookMark}
            name={!isDelete ? 'bookmark-outline' : 'delete-outline'}
            color={!isDelete ? "black" : 'red'}
            size={24}/>
        </View>
        <Text numberOfLines={4}>
          {description}
        </Text>
      </View>
    </View>
  )
}
News.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  onPressTitle: PropTypes.func,
  isDelete: PropTypes.bool,
  onPressBookMark: PropTypes.func,
  description: PropTypes.string
}
export default News
const Styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  container:{
    padding: allPadding,
    backgroundColor: 'white',
    marginTop: topOrBottom,
    flexDirection: 'row'
  },
  containerRight:{
    flex: 2,
    marginLeft: allPadding
  },
  image:{
    width: DeviceWidth * 0.4,
    height: 100
  }
})
