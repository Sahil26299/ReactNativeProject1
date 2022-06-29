import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import React from 'react'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Welcome({navigation}) {
  return (
    <View style={styles.Container}>
        <StatusBar backgroundColor={'#9C6DFF'}/>
      <View style={styles.section1}>
        <Image source={require('./Assets/Logo.png')} style={styles.ImageStyle} />
      </View>
      <View style={styles.section2}>
        <Text style={styles.Welc}>Welcome to</Text>
        <Text style={styles.Title}>VarCode</Text>
      </View>
      <View style={styles.section3}>
        <View style={styles.subSection3}>
            <TouchableOpacity style={styles.SignUpBtn} onPress={()=>navigation.replace('SignUp')}>
                <Text style={styles.SignUpBtnText}>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity style={styles.LoginBtn} onPress={()=>navigation.replace('Login')} >
                <Text style={styles.LoginBtnText}>Log In</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#9C6DFF',
        flex:1
    },
    section1:{
        flex:1,
        alignItems:'center',
        flexDirection:'column-reverse'
    },
    section2:{
        flex:1,
        alignItems:'center',
    },
    section3:{
        flex:1,
        flexDirection:'column-reverse',
        alignItems:'center'
    },
    subSection3:{
        flexDirection:'row'
    },
    ImageStyle:{
        resizeMode:'contain',
        width:width*0.35
    },
    Welc:{
        marginTop:25,
        fontSize:16,
        color:'white',
        fontWeight:'600',
    },
    Title:{
        fontSize:50,
        color:'white',
        fontWeight:'600',
    },
    SignUpBtn:{
        backgroundColor:'white',
        width:width*0.4,
        height:height*0.05,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:20
    },
    SignUpBtnText:{
        color:'black',
        fontWeight:'700'
    },
    LoginBtn:{
        backgroundColor:'black',
        width:width*0.4,
        height:height*0.05,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:20
    },
    LoginBtnText:{
        color:'white',
        fontWeight:'700'
    },
})