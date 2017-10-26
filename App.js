import React from 'react';
import { View, Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
 } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {

  handlePress = () =>{
  }

  render() {
    return (
      <View>

        <AddEntry />
      {/* <View style={styles.container} >
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={this.handlePress} >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable Highlight</Text>
          </View>
        </TouchableNativeFeedback>
      </View> */}
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginLeft:10,
    marginRight:10,
    alignItems: 'center',
    justifyContent:'center'
  },
  btn:{
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft:50,
    paddingRight:50,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
  },
  btnText:{
    color:'#fff'
  }

})
{/* <Ionicons name='logo-twitter' color="red" size={100}/>
<AddEntry /> */}
