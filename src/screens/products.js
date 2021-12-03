
import { bold } from 'jest-matcher-utils/node_modules/chalk';
import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
         
          faPowerOff,
          faSearch,
         
        
        } from '@fortawesome/free-solid-svg-icons';


const Products = ({navigation}) => {

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        let items = Array.apply(null, Array(15)).map((v, i) => {
        return {
            id: i,
            src: '../assets/images/product/1.png',
            price : Math.floor((Math.random() * 1000 + 456)),
            size : Math.floor((Math.random() * 58 + 25)),
        };
        });
        setDataSource(items);
    }, []);

    return(
     <View style={styles.body}>
          <View style={styles.statusBar}>
             <Text style={styles.backButton}>
                
             </Text>
             <View style={styles.statusBarRightButtons}>
                 <Text><FontAwesomeIcon icon={faSearch} color ={'white'} /></Text>
                 <TouchableWithoutFeedback
                    onPress = {() => {
                        navigation.navigate('Login');
                    }}
                 >
                 <Text><FontAwesomeIcon icon={faPowerOff} color={'white'} /></Text>
                 </TouchableWithoutFeedback>
             </View>
         </View>
          <View style={styles.banner}>
                <Image style={styles.bannerImage} source={require('../assets/images/product/maxresdefault.jpeg')} />
            </View>
            <Text> </Text>
            <View style={styles.product}>
            
            <FlatList
                data={dataSource}
                renderItem={({item}) => (
                    
                 <TouchableWithoutFeedback
                  onPress = {()=>{navigation.navigate('Productdetails',
                   {
                       price : item.price,
                       id : item.id,
                       size : item.size
                   }
                  )}}
                 >
  

                <View
                    style={styles.productView}>
                    <View style={styles.productImage}>
                        <Image
                        
                        resizeMode = 'contain'
                        style={styles.imageThumbnail}
                        source={require('../assets/images/product/1.png')}
                        />
                    </View>
                    <View style={styles.productdetails}>
                        <Text style={styles.price}>Price : $ {item.price}</Text>
                        <Text style={styles.price}>Size :{item.size}</Text>
                        {/* <Text style={styles.color}>color : green</Text>
                        <Text style={styles.rating}>****</Text> */}
                    </View>
                </View>


                </TouchableWithoutFeedback>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />

         </View>
     </View>
    )

}

const styles = StyleSheet.create({
    
    banner :{
        
    },
    bannerImage : {
        width : '100%',
        height : 200
    },
    body : {
        flex : 1
    },
    color : {
        //color : 'orange',
        fontSize : 12
    } ,
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width : 150
      },
      price : {
        //color : 'orange',
        fontSize : 15,
        fontWeight : 'bold'
    } ,
    product : {
        //justifyContent: 'center',
        backgroundColor: 'black',
    },
    productdetails : {
       flex : 1,
       flexDirection : 'row',
       position : 'absolute',
       bottom : 5,
       justifyContent: 'space-evenly',
       paddingLeft : 5,
       //backgroundColor : 'red',
       width : '100%'
    },
    productImage : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    productView : {
        backgroundColor : 'white',
        flex: 1,
        height : 200,
        flexDirection: 'column',
        margin: 5,
        borderRadius : 10
        },
     rating : {
         color : 'orange',
         fontSize : 15,
         alignItems : 'center',
         justifyContent : 'center'
     },
     statusBar : {
        // width : '100%',
        
         flexDirection : 'row',
         paddingTop : 15,
         paddingBottom : 5,
         paddingLeft : 10,
        backgroundColor : '#D27D2D',
         justifyContent : 'space-between'
 
     },
    
     statusBarRightButtons : {
         flexDirection : 'row',
         justifyContent : 'space-evenly',
         alignItems : 'flex-end',
        // backgroundColor : 'green',
         width : '30%'
         
     },    
});

export default Products;