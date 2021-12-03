import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import  {Image, StyleSheet, View} from 'react-native'

const SplashScreen = ({navigation}) => {

    setTimeout(()=>{
        navigation.navigate('Login');
    }, 4000);

    return(
        <View style={styles.body}> 
             <Image
                source ={require('../assets/images/logo.png')}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    body : {
        flex : 1,
        justifyContent : 'center', // along primary axis
        alignItems : 'center' , // along secondary axis
       // backgroundColor : '#dadde1',
        width : '100%',
    }
});

export default SplashScreen;