/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { useState, useEffect } from 'react';
 // import type {Node} from 'react';
 import {
   SafeAreaView,
   Image,
   StatusBar,
   StyleSheet,
   TextInput,
   Text,
   TouchableWithoutFeedback,
   useColorScheme,
   View,
   Alert,
 } from 'react-native';
import CustomButton from '../components/custombutton';
import CustomTextField from '../components/customtextfield';
 
 
const initialValue = {
   firstname : '',
   lastname : '',
   storename : '',
   email : '',
   password : ''
}
 
 const Signup = ({navigation}) => {

   const [formValue, setFormValue] = useState(initialValue);
 
   const handlePress = () =>{
      if(formValue.firstname === '' || formValue.lastname === '' || formValue.storename === '' || formValue.password ==='' || formValue.email === ''){
           Alert.alert('Error', 'All fields are required');
      }
      else{
         setFormValue(initialValue)
         Alert.alert(`Welcome ${formValue.firstname}`, 'you have sign up successfully',
          [
            {
               text: "Continue",
               onPress: () => { navigation.navigate('Login')}
             }
          ]
         )
         
         //navigation.navigate('Login')
      }
   }

   const handleContinue = () =>{
       //setFormValue(initialValue)
       navigation.navigate('Login')
   }
   

   const handleSigninPress = () =>{
      navigation.navigate('Login');
   }
   
   return (
     <View style={styles.body}>
         <Image 
           source ={require('../assets/images/logo.png')}
           resizeMode = 'contain'
           style ={styles.image}
         />
          
          <View style={styles.formBodyView}>
       <View style={styles.formBody}>
       <Text style={styles.hederText}>
           Please enter your details to sign up.
         </Text>
        
         
         <View style={styles.formControl}> 
         <CustomTextField 
             label = 'Firstname'
             
             name = 'firstname'
             value = {formValue.firstname}
             handleOnChange = {(text)=>{setFormValue({...formValue, firstname : text})}}
          />
           <CustomTextField 
             label = 'Lastname'
             
             name = 'lastname'
             value = {formValue.lastname}
             handleOnChange = {(text)=>{setFormValue({...formValue, lastname : text})}}
          />
          
         <CustomTextField 
             label = 'Store Name'
             
             name = 'storename'
             value = {formValue.storename}
             handleOnChange = {(text)=>{setFormValue({...formValue, storename : text})}}
          />
           <CustomTextField 
             label = 'Email'
             
             name = 'email'
             value = {formValue.email}
             handleOnChange = {(text)=>{setFormValue({...formValue, email : text})}}
          />
         <CustomTextField 
             label = 'Password'
             
             isSecure = {true}
             name = 'password'
             value = {formValue.password}
             handleOnChange = {(text)=>{setFormValue({...formValue, password : text})}}
          />
        
 
           <CustomButton
             label ='Signup'
             onPress = {handlePress}
           />
         </View>
         <Text onPress={handleSigninPress} style={styles.signintext}>Already hava an account? sign in here</Text>
       </View>
      


          </View>
       
        <Text
         style ={styles.copyRight}
       >Copyright © The Commercial Bank (P.S.Q.C) 2021 All rights reserved.</Text>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   body : {
      flex : 1,
      justifyContent : 'center', // along primary axis
      alignItems : 'center' , // along secondary axis
      backgroundColor : '#dadde1',
      width : '100%',
      //marginRight : 20,
      //marginLeft : 20
 
   },
   
   copyRight : {
      textAlign : 'center',
      position : 'absolute',
      bottom : 25
   },
   formBody : {
      width : '100%',
      position : 'relative',
      alignItems : 'center',
      //alignContent : 'center',
      justifyContent : 'center',
      //backgroundColor : 'blue'
   },
  
   formBodyView : {
       width : '90%',
       backgroundColor : 'white',
       borderRadius : 20,
       paddingBottom : 30,
       paddingTop : 30,
       paddingLeft : 10,
       paddingRight : 10
   },
   formControl : {
      width : '100%',
      alignItems : 'center',
      marginTop : 5,
      marginBottom : 10,
      //backgroundColor : 'yellow'
    },
   hederText : {
      marginBottom : 20,
      marginTop: 20,
      fontSize : 15,
      textAlign : 'left'
      //fontWeight : 'bold'
   },
   image : {
    position : 'absolute',
    top : 20,
    height : 70,
    width : 250
    
 },
 signintext : {
   textAlign : 'right',
   color : '#D27D2D'
}


 });
 
 export default Signup;
 