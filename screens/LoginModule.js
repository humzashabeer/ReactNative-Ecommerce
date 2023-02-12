import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image, View, Text, Button , useState, Pressable} from "react-native";



const LogModule = ({navigation}) => {
  const GoToCategories=()=>{
    navigation.navigate('Categories');
  }
    const GoToSignupForm=()=>{
      navigation.navigate('SignupForm');
    }
  
  const [emailinput, setemailinput] = React.useState("");
  const [passinput, setpassinput] = React.useState("");
  
  const onTextinput=()=>{
    if(!emailinput.trim()){
      alert('Please Enter Email');
      return;

    }
   if(!passinput.trim()){
    alert('Please Enter Password');
    return;
   }
   else GoToCategories();

  }

  return (

           
    
    <SafeAreaView>
      <View>
        <Image style={styles.imageStyle} source={require('../assets/logogrocery.png')}/>
        </View>
      <TextInput
        style={styles.input}
        onChangeText={
          (value)=> setemailinput(value)
        }
        value={emailinput}
        placeholder="Enter Email"
        keyboardType="email-address"
        //inlineImageLeft="../assets/emailicon.png"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setpassinput(value)}
        value={passinput}
        placeholder="Enter Password"
        keyboardType="text"
        secureTextEntry={true}
      />

      <Button style={styles.buttonStyle} title="Login" onPress={onTextinput}
      />
       
       <Pressable style={styles.pressableStyle} onPress={GoToSignupForm}><Text>
        Not Regitered Yet? SignUp?</Text></Pressable>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginLeft: 20,
    marginRight:20,
    marginTop:30,
    marginBottom:20,
    borderWidth: 2,
    padding: 10,
  },
  
  imageStyle:{
     height:100,
     width:100,
     margin:30,
     marginLeft:115,
    

  },
  buttonStyle:{
    height: 40,
    width: 20,
    margin:20,
   

  },
  pressableStyle:{
        backgroundColor:'skyblue',
        borderColor:'black',
        borderWidth:2,
        margin: 20
  }
});

export default LogModule;