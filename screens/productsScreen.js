import React from "react";
import { FlatList } from "react-native";
import Item from "../components/item";



const ProductsScreen=({route,navigation})=>{
    const {selectedProduct} = route.params;
    const goToproductDetail=(item)=>{
        navigation.navigate('ProductDetail', {
            selectedItem:item
        });
        
    }
    const renderItem=({item})=>(
        <Item title={item.title} image={item.image} price={item.price} unit={item.unit}
        onPress={()=>{
            goToproductDetail(item);
        }}/>
    )

    return(
        <FlatList
        data={selectedProduct}
        renderItem={renderItem}
        keyExtractor={(item)=> item}/>

            );
}
export default ProductsScreen;

