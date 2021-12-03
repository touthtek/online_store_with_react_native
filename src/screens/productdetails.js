import React from 'react';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
          faArrowLeft,
          faShoppingCart,
          faSearch,
          faHeart
        
        } from '@fortawesome/free-solid-svg-icons';

import { Text, View, Image, StyleSheet, StatusBar, TouchableWithoutFeedback,  } from 'react-native';

const ProductDetails = ({route, navigation}) =>{
          const {price, id, size} = route.params;
          const [quantity, setQuantity] = useState(0);
          const [cart, setCart] = useState(0);
    return(
        <View style={styles.body}>
          <View style={styles.cartnumber}><Text style={styles.cartnumbertext}>{cart}</Text></View>
          <Image style={styles.productImage} source={require('../assets/images/product/nikesneaker.png')} />
         <View style={styles.statusBar}>
             <Text style={styles.backButton}>
                 <TouchableWithoutFeedback
                   onPress ={() => navigation.navigate('Products')}
                 >
                 <FontAwesomeIcon icon={faArrowLeft} color={'white'} />
                 </TouchableWithoutFeedback>
             </Text>
             <View style={styles.statusBarRightButtons}>
                 <Text><FontAwesomeIcon icon={faSearch} color ={'white'} /></Text>
                 <Text><FontAwesomeIcon icon={faShoppingCart} color={'white'} /></Text>
             </View>
         </View>
         {/* <Text>Image</Text> */}
          <View style={styles.upperView}>
             <View style={styles.productTitleView}>
             <Text style={styles.productSubTitle}> Nike New Smart Sneaker Adept to Track</Text>
             <Text style={styles.productTitle}>Smart Sneaker</Text>
             <View style ={styles.priceView}>
                 <Text style={styles.priceTitle}>Price</Text>
                 <Text style={styles.price}>${price}</Text>
             </View>
             </View>
        </View>
        <View style={styles.lowerView}>
          <View style={styles.colorSizeView}>
             <View style={styles.colorView}>
                <Text style={styles.colorTitle}>Color</Text>
             <View style={styles.colorsView}>
                <View style={styles.color1}></View>
                <View style={styles.color2}></View>
                <View style={styles.color3}></View>
                <View style={styles.color4}></View>
            </View>
             </View>
             
              <View style={styles.sizeView}>
              <Text style={styles.sizeTitle}>Size</Text>
              <Text style={styles.sizeValue}>{size}</Text>
              </View>
          </View>

          <View style={styles.descriptionView}>
          <Text style={styles.description}>
          On our E-commerce app UI has two pages one for the product page which has a horizontal list of categories then a list of our products. Then on the details page, it shows the price and short description of the product with the Buy Now button. The best part of our E-commerce app is, each product has its own color
          </Text>
          </View>

         

          <View style={styles.numberlikeView}>
           <View style={styles.numberView}>
           <TouchableWithoutFeedback
              onPress ={()=>{
                  if(quantity > 0){
                  setQuantity(quantity - 1)
                  }
              }}
           >
           <View style={styles.numbersign}><Text>-</Text></View>
           </TouchableWithoutFeedback>
           <Text style={styles.numberValue}>{quantity}</Text>
           <TouchableWithoutFeedback
              onPress ={()=>{
                  setQuantity(quantity + 1)
              }}
           >
           <View style={styles.numbersign}><Text>+</Text></View>
           </TouchableWithoutFeedback>
           </View>
           
            <View style={styles.likeView}>
            <View style={styles.likeButton}><FontAwesomeIcon icon={faHeart} color={'white'} size={15}  /></View>
            </View>
          </View>


          <View style={styles.cartbuyView}>
          <TouchableWithoutFeedback
            onPress = {()=>{
                setCart(cart + quantity)
            }}
          
          >
              <View style={styles.cartButton}>
                  <Text><FontAwesomeIcon icon={faShoppingCart} color={'#D27D2D'} /></Text>
              </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
              <View style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>Buy Now</Text>
              </View>
          </TouchableWithoutFeedback>
          
           
         
          </View>

        </View>
        </View>

    )
}

const styles = StyleSheet.create({
    backButton : {
        paddingLeft : 10
       // position : 'absolute',
        //left  : 5
    },
    body :{
        flex : 1,
        backgroundColor : '#D27D2D',
       // marginRight : 10,
    },
    buyButton : {
        backgroundColor : '#E3963E',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        marginLeft : 20,
        marginRight : 20

    },
    buyButtonText : {
        color : 'white'
    },
    cartnumber : {
       
            backgroundColor : 'red',
            height: 15,
            width : 15,
            borderRadius : 10,
            color:'white',
            position : 'absolute',
            right : 18,
            top : 8,
            zIndex : 10,
            justifyContent : 'center',
            alignItems : 'center'

    },
    cartnumbertext : {
        color:'white'
    },
    cartbuyView : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 40,
        paddingLeft : 10
    },
    cartButton : {
        justifyContent : 'center',
        alignItems : 'center',
       backgroundColor : 'white',
       height : 30,
       width : 30,
       borderWidth : 1,
       borderColor : '#D27D2D',
       borderRadius : 5
    },
    color1 : {
        backgroundColor : 'blue',
        height: 15,
        width : 15,
        borderRadius : 10

    },
    color2: {
        backgroundColor : 'orange',
        height: 15,
        width : 15,
        borderRadius : 10

    },
    color3 : {
        backgroundColor : 'red',
        height: 15,
        width : 15,
        borderRadius : 10
    },
    color4: {
        backgroundColor : 'purple',
        height: 15,
        width : 15,
        borderRadius : 10

    },
    colorSizeView : {
       flexDirection : 'row',
       justifyContent : 'space-between',
       paddingLeft : 10,
       paddingTop : '30%',
       marginBottom : 20
    },
    colorView : {
       
    },
    colorTitle :{
       fontSize : 12
    },
    colorsView : {
      marginTop : 10,
      flexDirection : 'row',
      justifyContent : 'space-between',
      width : '40%'
    },
    description : {
       fontSize : 12
    },
    descriptionView : {
        marginLeft : 10,
        marginBottom : 35,
        marginRight : 20
    },
    likeButton : {
        justifyContent : 'center',
        alignItems : 'center',
       backgroundColor : 'red',
       height : 25,
       width : 25,
       //borderWidth : 1,
       borderColor : '#D27D2D',
       borderRadius : 20
    },
    likeView : {
       width : '20%',
    },
    lowerView : {
        flex : 6,
        backgroundColor : 'white',
        borderTopLeftRadius : 20,
        borderTopRightRadius:20
    },
    numberlikeView : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingLeft : 10
    },
    numberView : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
       
    },
    numbersign : {
        //flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
        height: 30,
        width : 30,
        borderRadius : 10,
        borderWidth : 1,
        borderColor : 'grey'
    },
    numberValue : {
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop : 5
    },
    price : {
        fontSize : 20,
        fontWeight : 'bold',
        color: 'white'
    },
    priceTitle : {
        fontWeight : 'bold',
        color : 'white'
    },
    priceView : {
        position : 'absolute',
        bottom : 20
    },
    productImage : {
        height : 120,
        width : 220,
        position : 'absolute',
        top : 250,
        right : 20,
        zIndex : 10
    },
    productSubTitle : {
       fontSize : 15,
       color : 'white'
    },
    productTitle : {
        fontSize : 20,
        fontWeight : 'bold',
        color : 'white'
    },
    productTitleView : {
        flex : 1,
       marginLeft : 10,
       marginTop : 20
    },
    sizeView : {
        alignItems : 'flex-start',
        width : '40%',

     },
     sizeTitle : {
        fontSize : 12,
       
        //color : 'white'
     },
     sizeValue : {
        fontWeight : 'bold',
        fontSize : 12,
        marginTop : 10
       // color : 'white'
     },
    statusBar : {
        // width : '100%',
        
         flexDirection : 'row',
         paddingTop : 15,
         paddingBottom : 5,
         paddingLeft : 10,
        // backgroundColor : 'white',
         justifyContent : 'space-between'
 
     },
    
     statusBarRightButtons : {
         flexDirection : 'row',
         justifyContent : 'space-evenly',
         alignItems : 'flex-end',
        // backgroundColor : 'green',
         width : '30%'
         
     },
    upperView : {
        flex : 4,
       // backgroundColor : '#D27D2D'
    },
    
    

});

export default ProductDetails;