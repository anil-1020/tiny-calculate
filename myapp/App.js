
import { FlatList, Text, View,Button,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Box } from './Box';
import { Box1 } from './Box1';


   
       export default function App() {

const Data =Array(20).fill(null).map((_,i)=>({number:i}))

const ins = [`*`,`+`,`-`,`/`];
const[num1,setNum1]=useState(0);
const[num2,setNum2]=useState(0);
 const[sayi3,setSayi3]=useState(0);
 const[last,setLast]=useState(0)


const Select=()=>{
  switch(sayi3){
    case 0:{
      const res = num1 * num2
      setLast(res)
    }break;
    case 1:{
      const res = num1 + num2
      setLast(res)
    }break;
    case 2:{
      const res = num1 - num2
      setLast(res)
    }break;
    case 3:{
      const res = num1 / num2
      setLast(res)
    
    }break;
     }
}

  

  return (

    
   
<View style={{alignItems:`center`,justifyContent:`center`,flex:1,backgroundColor:`#eaea`,paddingTop:80}}> 
 
 <FlatList 
 horizontal
 data={Data}
 keyExtractor={(item)=>item.number}
 renderItem={({item})=>(

<Box touch={item.number}  setNum1={setNum1}/>
 
 )}/>


 <View style={{flexDirection:`row`,paddingBottom:20,marginBottom:30}}> 
<View style={{width:40,height:40,backgroundColor:`blue`,alignItems:`center`,justifyContent:`center`}}><Text style={{color:`white`}}>{num1}</Text></View>
<View style={{width:40,height:40,backgroundColor:`blue`,alignItems:`center`,justifyContent:`center`}}><Text style={{color:`white`}}>{ins[sayi3]}</Text></View>
<View style={{width:40,height:40,backgroundColor:`blue`,alignItems:`center`,justifyContent:`center`}}><Text style={{color:`white`}}>{num2}</Text></View>
</View>


<FlatList 
 horizontal
 data={Data}
 keyExtractor={(item)=>item.number}  
 renderItem={({item})=>(
<Box1 touch={item.number}  setNum2={setNum2}/>
 )}/>  


<Text>Slide up or down</Text>
<View style={{width:100,height:40,backgroundColor:`green`,alignItems:`center`,justifyContent:`center`,marginBottom:24}}>
 
<FlatList  
data={ins}
renderItem={(item)=>(
<TouchableOpacity onPress={()=>  { setSayi3(item.index) ; Select() } }>
<Text style={{fontSize:30}}>{item.item}</Text>
</TouchableOpacity> 
)}
         />

</View>
 

 <View style={{width:100,height:100,borderRadius:80,alignItems:`center`,justifyContent:`center` ,backgroundColor:`orange`,marginBottom:80}}>
 
 
 
  <Text style={{fontWeight:'bold',fontSize:45}} >{last}</Text>

 
 </View>
</View>

)

 }

 
    

