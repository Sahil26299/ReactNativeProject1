import { View, ScrollView, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
var flagEmail = -1;
var flagPassword = -1;
export default function Login({navigation}) {
    const [UserData, setUserData] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [loginEmailError, setLoginEmailError] = useState('');
    const [loginPasswordError, setLoginPasswordError] = useState('');

    const isEmailEntered = (emailid) => {
        const re = /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
        const beg_spl = /^[0-9\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/; 
        if(emailid != ''){
            if(re.test(emailid) && !beg_spl.test(emailid)){
                setLoginEmailError('')
                flagEmail = 1
            }
            else{
                setLoginEmailError('*Enter valid email')
                flagEmail = 0
            }
        }
        else{
            setLoginEmailError(`*Please enter your Email ID!`);
            flagEmail = 0;
        }
    }
    const isPasswordEntered=(password)=>{
        if(password!=''){
            setLoginPasswordError('');
            flagPassword = 1;
        }
        else{
            setLoginPasswordError('*Please enter your Password!');
            flagPassword = 0;
        }
    }
    AsyncStorage.getItem('data').then(value =>
       {setUserData(JSON.parse(value))}
      );
    const isAllValid = () => {
        if(flagEmail==1 && flagPassword==1){
            for(i=0; i<UserData.length; i++){
                if(UserData[i].Email==loginEmail){
                    if(UserData[i].Password==loginPassword){
                        navigation.navigate('Welcome');
                        flagEmail = -1;
                        flagPassword = -1;
                        return true;
                    }
                    else{
                        setLoginPasswordError('*Incorrect Password');
                        flagPassword = 0;
                    }
                }
                else{
                    setLoginEmailError('*User does not exists');
                    flagEmail = 0;
                }
            }
        }
        else{
            if(flagEmail!=1){
                flagEmail = 0;
                setLoginEmailError('*Please enter your Email ID!');
            }
            if(flagPassword!=1){
                flagPassword=0;
                setLoginPasswordError('*Please enter your Password!');
            }
            return false;
        }
    }

  return (
    <ScrollView style={styles.Container}>
        <StatusBar backgroundColor={'#9C6DFF'}/>
        <View style={styles.section1}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Welcome')
                flagEmail=-1
                flagPassword=-1
                }}>
            <AntDesign name="left" size={25} color= "white" />
            </TouchableOpacity>
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
                <TextInput style={styles.emailInput} placeholder='Email Address' value={loginEmail} 
                onChangeText={(inputValue)=>{
                    isEmailEntered(inputValue)
                    setLoginEmail(inputValue)
                }}/>
                <Fontisto name='email' style={{ position:'absolute', top:33, left:10 }} size={20} color={flagEmail==0?'red':'black'}/>
                <Text style={{marginHorizontal:10, color:'red'}}>{loginEmailError}</Text>
            </View>
            <View style={{marginVertical:10}}>
                <Text style={styles.passLabel}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.passInput} placeholder='Password' value = {loginPassword}
                onChangeText={(inputValue)=>{
                    isPasswordEntered(inputValue)
                    setLoginPassword(inputValue)
                }}/>
                <Feather name='lock' style={{position:'absolute', top:33, left:10 }} size={20} color={flagPassword==0?'red':'black'}/> 
                <Text style={{marginHorizontal:10, color:'red'}}>{loginPasswordError}</Text>
            </View>
        </View>

        <View style={styles.section3}>
            <TouchableOpacity style={styles.LoginBtn} onPress={()=>isAllValid()}><Text style={styles.LoginText}>Log In</Text></TouchableOpacity>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#3D67FF',
        flex:1
    },
    Heading:{
        color:'white',
        fontSize:25,
        fontWeight:'600'
    },
    section1:{
        height:height*0.3,
        justifyContent:'center',
        paddingHorizontal:20
    },
    section2:{
        height:height*0.3,
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
        height:height*0.3,
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