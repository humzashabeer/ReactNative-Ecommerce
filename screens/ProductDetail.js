import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image, ScrollView } from "react-native";

const ProductsDetailScreen = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {selectedItem} = route.params;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity>
      
      <View style={{ margin:0, alignItems:'center', backgroundColor:'yellow' }}>
        
          <Image style={styles.modelImage} source={selectedItem.image}/>
          <Text style={{fontWeight:'bold'}}>{selectedItem.title}</Text>
        <Text style={{fontWeight:'bold'}}>{selectedItem.price}/{selectedItem.unit}</Text>
        <Text style={{fontWeight:'bold'}}>{selectedItem.discription}</Text>
        </View></TouchableOpacity>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
        
        <TouchableOpacity onPress={() => setModalVisible(true)} >
      
    <View style={{ margin:60, alignItems:'center', }}>
      
        <Image style={styles.image} source={selectedItem.image}/>
        <Text style={{fontWeight:'bold'}}>{selectedItem.title}</Text>
      <Text style={{fontWeight:'bold'}}>{selectedItem.price}/{selectedItem.unit}</Text>
      <Text style={{fontWeight:'bold'}}>{selectedItem.discription}</Text>
      </View></TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
    backgroundColor:'skyblue',
  },

image:{
  height:400,
  width:350
},

modelImage:{
  height:500,
  width:380,
  margin:10
},

  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ProductsDetailScreen;