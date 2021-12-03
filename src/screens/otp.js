import React, {useState, Fragment} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const OTP = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.root}>
         <Image 
         resizeMode = 'contain'
         style ={styles.image}
           source ={require('../assets/images/logo.png')}
         />
        <Text style={styles.testLabel}>kindly enter your one-time secure pin sent to your mail toxxxxxxx@gmail.com</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
            <Fragment key={index}>
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
          <Text>   </Text>
          </Fragment>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    cell: {
        width: 50,
        height: 50,
        borderRadius : 10,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
      },
  codeFieldRoot: {
     // backgroundColor : 'red',
      //justifyContent : 'space-between'
    },
  focusCell: {
    borderColor: '#000',
  },
  image : {
    position : 'absolute',
    top : 20,
    height : 70,
    width : 250
    
 },
  testLabel : {
    marginBottom : 20
},
  title: {textAlign: 'center', fontSize: 30},
 
  root: {
    flex : 1,
    justifyContent : 'center',
    alignItems :'center',
   // backgroundColor : '#fff'
},
});

 
 export default OTP;
 