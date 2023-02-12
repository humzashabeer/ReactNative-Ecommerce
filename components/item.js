import React from "react";
import {TouchableOpacity,Text,Image,StyleSheet, View} from 'react-native'

const Item = ({title,image,price,onPress,unit, discription}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.products}>
       <Image source={image} style={styles.imageStyle}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{price}/{unit}</Text>
      <Text style={styles.title}>{discription}</Text></View>
      
     
    </TouchableOpacity></View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    item: {
        borderRadius: 8,
        justifyContent:'space-between',
        alignItems:'center',
        
      },
    title:{
      fontSize: 20,
      fontWeight:'bold',
      color:'white',
      textAlign:'center',
      
    },
    imageStyle:{
        height:150,
        width:150,
        marginTop:10,
        borderRadius:20,
       
      },
      products:{
        borderRadius:12,
        borderColor:'black',
        borderWidth:3,
        height:250,
        width:300,
        marginTop:10,
        backgroundColor:'black',
        justifyContent:'space-between',
        alignItems:'center'
      }

  });
  export default Item;

