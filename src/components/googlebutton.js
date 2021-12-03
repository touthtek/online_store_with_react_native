import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native'


const GoogleButton = ({onPress, label = 'Login with Google'}) =>{
     return(
        <TouchableWithoutFeedback
        onPress = {onPress}
      >
     <View style={styles.bodyView}>
        <Text style={styles.button}>{label}</Text>
    </View>
      </TouchableWithoutFeedback>
     )

}

const styles = StyleSheet.create({
    bodyView : {
        width : '100%', 
        marginTop : 20,
        borderRadius : 20,
        backgroundColor : '#EE4B2B',
         padding : 10,
         width : '100%',
         
         fontWeight : 'bold',
      },
      button : {
         color : 'white',
         textAlign : 'center',
         fontWeight : 'bold'
         
         
      },
});

export default GoogleButton;