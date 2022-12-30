import { Text, StyleSheet, View, TouchableOpacity,TextInput,ScrollView } from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import List from "../List/List";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{  flex: 1 }}>
        {/* header */}
        <View style={{ height: 140, backgroundColor: "#5b1857",paddingTop:40 }}>
          <View
            style={{
              height: 45,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "white",
                  marginLeft: 10,
                  marginTop: 4,
                }}
              >
                KrJob
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", marginRight: 10, marginTop: 14 }}
            >
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="home"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ marginRight: 10 }}
                  name="face-recognition"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="wechat"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection:'row',marginLeft:10,marginRight:10}}>
              <View style={{flex:1,}}>
                  <TextInput style={{borderWidth:1,height:40,borderColor:'white',paddingLeft:20,color:'white',fontSize:16}} placeholder="Job List" placeholderTextColor={"white"} />
              </View>
              <View style={{marginLeft:20,marginRight:10}}>
              <FontAwesome5 name="user-cog" size={24} color="white" />
              </View>
          </View>
        </View>

{/* phan mini button */}
        <View style={{height:30,flexDirection:'row',justifyContent:"space-around",marginTop:4,marginRight:10}}>
          <TouchableOpacity >
            <Text style={{borderWidth:1,paddingTop:4,paddingLeft:10,paddingRight:10,borderRadius:10,marginLeft:10,paddingBottom:4}}>
              Part Time
            <AntDesign  name="caretdown" size={16} color="black" />
            </Text>
          </TouchableOpacity>
            
           <TouchableOpacity>
            <Text style={{borderWidth:1,paddingTop:4,paddingLeft:10,paddingRight:10,borderRadius:10,marginLeft:10,paddingBottom:4,}}>
             Đổi Visa
            <AntDesign name="caretdown" size={16} color="black" />
            </Text>
           </TouchableOpacity>
            
            <TouchableOpacity>
              <Text style={{borderWidth:1,paddingTop:4,paddingLeft:10,paddingRight:10,borderRadius:10,marginLeft:10,paddingBottom:4,}}>
              Full Time
            <AntDesign name="caretdown" size={16} color="black" />
            </Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Text style={{borderWidth:1,paddingTop:4,paddingLeft:10,paddingRight:10,borderRadius:10,marginLeft:10,paddingBottom:4,}}>
              Time 
            <AntDesign name="caretdown" size={16} color="black" />
            </Text>
            </TouchableOpacity>
            
        </View>
      
      {/* body */}
      <View style={{flex:1,marginTop:4}}>
        <ScrollView>
           <List />
           <List />
           <List />
           <List />
           <List />
           <List />
           <List />
           <List />
        </ScrollView>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
