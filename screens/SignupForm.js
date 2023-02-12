import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image, View, Text, Button , useState} from "react-native";



const SignupForm = ({navigation}) => {
  const GoToCategories=()=>{
    navigation.navigate('Categories');
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
        placeholder="Enter First Name"
        keyboardType="text"
        
      />

<TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        keyboardType="text"
        
      />

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

<TextInput
        style={styles.input}
        placeholder="Confirm Password"
        keyboardType="text"
        secureTextEntry={true}
      />

      <Button style={styles.buttonStyle} title="Register" onPress={onTextinput}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginLeft: 20,
    marginRight:20,
    marginTop:15,
    marginBottom:15,
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
    width: 60,
    margin:30

  }
});

export default SignupForm;