import { Image, View, StyleSheet } from "react-native"

const DrawerIcon=(url)=>{
  return(
    <Image style={styles.iconStyle} source={url}></Image>

  )

}
 const styles=StyleSheet.create({

    iconStyle:{

        height:30,
        width:30,
        borderWidth:2,
        borderColor:'blue'

    }

 })

export default DrawerIcon;

