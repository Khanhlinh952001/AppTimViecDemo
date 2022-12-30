import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default class List extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
            <View style={{height:130,borderLeftWidth:8,marginBottom:4,borderColor:"green",borderWidth:1,marginRight:10,borderTopRightRadius:10,borderBottomRightRadius:10}}>
              <View style={{paddingLeft:10,paddingTop:5,paddingBottom:5}}>
          <View >
          
             <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,paddingTop:4}}>
          오하이오
        </Text>
          </View>
         

         <View>
         <Text style={{fontWeight:'bold',fontSize:16}}>
          월급 :  
          <Text style={{fontWeight:'bold',color:"red",fontSize:16}}>6.000.000 ~ 8.500.000</Text>
        </Text>
         </View>

         <View>
         <Text style={{fontWeight:'bold',fontSize:16}}>
          업무 :  
          <Text style={{fontWeight:'bold',fontSize:16,color:"#666"}}>배달대행</Text>
        </Text>
         </View>

         <View >
         <Text style={{fontWeight:'bold',fontSize:16}}>
          조건 :  
          <Text style={{fontWeight:'bold',fontSize:16,color:"#666"}}>없다  ( 100명 필요하다)</Text>
        </Text>

         
         </View>

         <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'row'}}>
            <MaterialIcons name="home-repair-service" size={20} color="black" />
          <Text>
             ..회사 
          </Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:10}}>
          <MaterialCommunityIcons name="google-maps" size={20} color="black" />
          <Text>
             ..대전 
          </Text>
          </View>

          
          

         </View>


            </View>                  
      </View>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({})