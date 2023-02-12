// import { createNavigationContainerRef, Link, useNavigation } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import { Text, Button, View, StyleSheet } from "react-native";
import * as React from 'react';
import { View, Text, Button,  StyleSheet, Image } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

  function HomeScreen({navigation}){

  const doLogin=()=>{
    navigation.navigate('LoginPage');
  }

  const GoToModel=()=>{
    navigation.navigate('Model');
  }
  

   
return(
  
        
      <View style={styles.container}>
      <Image style={styles.imageStyle} source={require("../assets/logogrocery.png")}/>
        <Text style={styles.textstyle}>Welcome To E-Grocery Store</Text>
        <Image style={styles.imageStyle} source={require('../assets/vegitablelogo.png')}></Image>
        <Text>Kindly log In Below To Continue</Text>
        <Button title="Go To Login?" onPress={doLogin}/>
        <Button title='Model' onPress={GoToModel}/>
       
        

      </View>
    );
  }
 const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle:{
    color:'black',
    fontSize:15,
    backgroundColor:'yellow',
    margin:2
  },
  imageStyle:{
    height:150,
    width:150,
    margin:50,
    margin: 20
   

 }
 })
export default HomeScreen;