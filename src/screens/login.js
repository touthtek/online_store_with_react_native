/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import { useState } from 'react';
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
import FacebookButton from '../components/facebookbutton';
import GoogleButton from '../components/googlebutton';

 const initialValue = {
     email : '',
     password : ''
 }
 
 const Login = ({navigation}) => {


    const [formValue, setFormValue] = useState(initialValue);
    const [details, setDetails] = useState();
 
   const handlePress = async () =>{

    if(formValue.email === '' || formValue.password === '')
    {
        Alert.alert('Error', 'All fields are required')
    }
    else{
       
               setFormValue(initialValue);
               navigation.navigate('Products');
        
    }
      
      
   }

   const handleSignupPress = () =>{
    navigation.navigate('Signup');
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
           Please enter your User ID and Password
         </Text>

       
         <View style={styles.formControl}> 
         <CustomTextField
            label = 'Email'
            value ={formValue.email}
            name = 'email'
            handleOnChange = {(text) => setFormValue({ ...formValue, email: text })}
        />
             <CustomTextField
            label = 'Password'
            value ={formValue.password}
            name = 'password'
            isSecure = {true}
           
            handleOnChange = {(text) => setFormValue({ ...formValue, password: text })}
            
        />

     {/* <TouchableWithoutFeedback
        onPress = {handlePress}
      >
     <View >
        <Text>sfsdfsdf</Text>
    </View>
      </TouchableWithoutFeedback>
          */}
 
           <CustomButton
             label = 'Login'
             onPress = {handlePress}
           />
         
         <Text></Text>
          <Text>Alternative Login</Text>

          <GoogleButton
             
             onPress = {handlePress}
           />

          <FacebookButton
         
             onPress = {handlePress}
           />

           
        
        </View>
          <Text onPress={handleSignupPress} style={styles.signuptext}>You dont have an account? signup here</Text>
       </View>
      


          </View>
       
        <Text
         style ={styles.copyRight}
       >Copyright © App Name {new Date().getFullYear()} All rights reserved.</Text>
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
   bodyView : {
     width : '100%', 
     marginTop : 20,
     borderRadius : 20,
     backgroundColor : '#D27D2D',
      padding : 10,
      width : '100%',
      
      fontWeight : 'bold',
   },
   button : {
      color : 'white',
      textAlign : 'center',
      fontWeight : 'bold'
      
      
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
   formControl : {
     width : '90%',
     alignItems : 'center',
     marginTop : 5,
     marginBottom : 10,
     //backgroundColor : 'yellow'
   },
   formField : {
      //alignItems : 'center',
      width : '100%'
   },
   formBodyView : {
       width : '90%',
       backgroundColor : 'white',
       borderRadius : 20,
       paddingBottom : 30,
       paddingTop : 30
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
   label : {
      //fontWeight : 'bold',
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
   signuptext : {
       textAlign : 'right',
       color : '#D27D2D'
   }
 });
 
 export default Login;
 