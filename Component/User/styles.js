import { Text, StyleSheet, View } from 'react-native'


const styles = StyleSheet.create({
    view:{
        flex:1
    },
    head:{
        borderBottomWidth:1,borderColor:"blue",flexDirection:'row'  
    },
    head_icon:{
        marginTop:1,marginLeft:5,marginRight:10,marginBottom:4
    },
    head_text:{
        marginTop:4    
    },
    body_head:{
        height:30,backgroundColor:"#444",flexDirection:'row',justifyContent:'space-between' 
    },
    body_head1:{
        flexDirection:'row',marginTop:4,marginLeft:10 
    },
    body_head1_text1:{
        color:'white',marginRight:10
    },
    body_head1_text2:{
        color:"white"
    },
    body_body:{
        flexDirection:'row',marginRight:10,marginTop:4   
    },
    body_body_text1:{
        color:'white',marginRight:10 
    },
    body_body_text2:{
        color:'yellow',marginLeft:10
    },
    body_body2:{
        backgroundColor:'#028bc7'
    },
    body_body21:{
       flexDirection:'row',
       paddingBottom:10,marginTop:4
    },
    body_body2_view:{
        flexDirection:'row',marginTop:10
    },
    body_body2_view_text:{
        color:'white',marginLeft:10,marginRight:10,width:45
    },
    body_body2_view_text1:{
        color:"white",marginRight:10,marginLeft:10,flex:1
    },
    footer:{
        backgroundColor:'#444'
    },
    footer_text:{
        marginTop:4,marginBottom:4,marginLeft:10 ,marginRight:10,color:'yellow'
    }
})


export {styles};