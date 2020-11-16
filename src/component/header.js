import React from 'react'
import {
  horizontal,
  toolBarHeight
} from '../config_layout';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = (props) => {
  const {onChangeLeft, headerTitle} = props
  return(
    <View style={Styles.container}>
      <View>
        {
          onChangeLeft &&
          <MaterialCommunityIcons
            onPress={onChangeLeft}
            name={'arrow-left'}
            size={24}/>
        }
      </View>
      <Text style={Styles.title}>
        {headerTitle}
      </Text>
      <View/>
    </View>
  )
}
Header.propTypes = {
  onChangeLeft: PropTypes.func,
  headerTitle: PropTypes.string
}
export default Header

const Styles = StyleSheet.create({
  container:{
    height: toolBarHeight,
    paddingHorizontal: horizontal,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 16,
  }
})
