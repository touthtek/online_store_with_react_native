import React from 'react'
import { TextInput , StyleSheet, View, Text} from 'react-native';

const CustomTextField = ({label ="", handleOnChange = null, isSecure = false, value, name=""}) => {
 
    return (
        <View 
        style={styles.formField}>
           <Text style={styles.label}>{label}</Text>
           <TextInput 
           defaultValue ={value}
           name = {name}
           secureTextEntry = {isSecure}
        style ={styles.textInput}
        onChangeText = {handleOnChange}
       />
        </View>
    );
}

const styles = StyleSheet.create({
    
    formField : {
        //alignItems : 'center',
        marginTop : 10,
        width : '100%'
     },
     textInput : {
        height : 40,
        width : '100%',
        borderWidth : 2,
        borderColor : '#861f411a',
        borderRadius : 10,
        marginTop : 5,
        padding : 10,
        fontSize: 15
   
     },
     label : {
        //fontWeight : 'bold',
     },
});

export default CustomTextField;