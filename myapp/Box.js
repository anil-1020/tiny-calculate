import { useState } from "react"
import { TouchableOpacity,View,Text } from "react-native";


export const Box =({touch,setNum1})=>{


const [sayi1,setSayi1]=useState(0);
const [click ,setClick] = useState(true);

    return(

        
<TouchableOpacity onPress={()=> {click ? setSayi1(touch) : setSayi1(0) ;{ setClick(pre => !pre) ; setNum1(touch)}}}  >


<View style={{
width:90,
height:90,
borderRadius:100,
backgroundColor:`yellow`,
alignItems:`center`, 
justifyContent:`center`,
margin:5
}}> 

    <Text style={{fontSize:20,fontWeight:`bold`}}>{touch}</Text>
  <Text>{sayi1}</Text>
 
</View>

</TouchableOpacity>

    )
}