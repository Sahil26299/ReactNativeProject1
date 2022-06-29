import { View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Login() {
  return (
    <View style={styles.Container}>
        <StatusBar backgroundColor={'#9C6DFF'}/>
        <View style={styles.section1}>
            <AntDesign name='left' size={25} color='white'/> 
            <Text style={styles.Heading}>Log In</Text>
        </View>

        <View style={styles.section2}>
            <TouchableOpacity style={styles.GoogleView}>
                <Text style={styles.GoogleText}>Login with Google</Text>
                <Image style={styles.GoogleImage} source={require('./Assets/Google.png')}/> 
                <AntDesign name='arrowright' style={{position:'absolute', right:10}} size={25} color='black'/> 
            </TouchableOpacity>
            <View style={{marginVertical:10}}>
                <Text style={styles.emailLabel}>Email Address</Text>
                <TextInput style={styles.emailInput} placeholder='Email Address'/>
                <Fontisto name='email' style={{position:'absolute', top:33, left:10 }} size={20} color='black'/>
            </View>
            <View style={{marginVertical:10}}>
                <Text style={styles.passLabel}>Password</Text>
                <TextInput style={styles.passInput} placeholder='Password'/>
                <Feather name='lock' style={{position:'absolute', top:33, left:10 }} size={20} color='black'/> 
            </View>
        </View>

        <View style={styles.section3}>
            <TouchableOpacity style={styles.LoginBtn}><Text style={styles.LoginText}>Log In</Text></TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#9C6DFF',
        flex:1
    },
    Heading:{
        color:'white',
        fontSize:25,
        fontWeight:'600'
    },
    section1:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20
    },
    section2:{
        flex:1,
        paddingHorizontal:width*0.1,
    },
    GoogleView:{
        backgroundColor:'white',
        width:width*0.8,
        height:height*0.07,
        borderRadius:12,
        justifyContent:'center',
        paddingHorizontal:45,
        marginBottom:25
    },
    GoogleImage:{
        position:'absolute',
        width:25,
        left:10,
        resizeMode:'contain'
    },
    GoogleText:{
        color:'black',
        fontWeight:'600'
    },
    section3:{
        flex:1,
        flexDirection:'column-reverse',
        alignItems:'center'
    },
    emailLabel:{
        color:'white',
        fontSize:14,
        fontWeight:'600',
        marginBottom:2
    },
    emailInput:{
        backgroundColor:'white',
        width:width*0.8,
        height:height*0.06,
        borderRadius:12,
        justifyContent:'center',
        paddingHorizontal:45,
    },
    passLabel:{
        color:'white',
        fontSize:14,
        fontWeight:'600',
        marginBottom:2
    },
    passInput:{
        backgroundColor:'white',
        width:width*0.8,
        height:height*0.06,
        borderRadius:12,
        justifyContent:'center',
        paddingHorizontal:45,
    },
    LoginBtn:{
        backgroundColor:'black',
        width:width*0.8,
        height:height*0.06,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
    },
    LoginText:{
        color:'white',
        fontSize:15,
        fontWeight:'700'
    },
})