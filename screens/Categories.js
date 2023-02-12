import React from "react"
import { FlatList } from "react-native"
import Item from "../components/item"
import DATA from "../screens/Products"

const Categories=({navigation})=>{
    const goToProduct=(product)=>{
        navigation.navigate('productsScreen',{
            selectedProduct:product
        });
    }
    const renderItem =({item})=>(
        <Item title={item.title} image={item.image} 
         onPress={()=>{
            goToProduct(item.data);}}
        />
    );
    return(
       <FlatList
       data={DATA}
       renderItem={renderItem}
       keyExtractor={(item)=>item.title}
       />
    )
}

export default Categories;

