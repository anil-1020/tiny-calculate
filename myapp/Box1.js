import { useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
 

export const Box1 =({touch,setNum2})=>{


const[sayi2,setSayi2] =useState(0);
const[doru,setDoru]=useState(true)


return(
    
<TouchableOpacity onPress={( )=> {doru ? setSayi2(touch): setSayi2(0)  ; {setDoru(pre => !pre)}  ;{setNum2(touch)}
  }  }> 

<View style={{
width:90,
height:90,
borderRadius:100,
backgroundColor:`red`,
alignItems:`center`, 
justifyContent:`center`,
margin:5
}}> 

    <Text style={{fontSize:20,fontWeight:`bold`}}>{touch}</Text>
  <Text>{sayi2}</Text>
</View>

</TouchableOpacity>
)

}