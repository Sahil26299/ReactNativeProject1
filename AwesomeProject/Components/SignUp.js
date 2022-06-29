import { View, ScrollView, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

var flagUserName=-1;
var flagEmail=-1;
var flagPassword=-1;
export default function SignUp({navigation}) {
    const [RegisterUserName, setRegisterUserName] = useState('');
    const [RegisterEmail, setRegisterEmail] = useState('');
    const [RegisterPassword, setRegisterPassword] = useState('');

    const [RegisterUserNameError, setRegisterUserNameError] = useState(null);
    const [RegisterEmailError, setRegisterEmailError] = useState(null);
    const [RegisterPasswordError, setRegisterPasswordError] = useState(null);

    const isUserNameValid=(userName)=>{
        var blank_space = /\s/;
        var cap_letter = /\b[A-Za-z]/;
        if(userName!=''){
            if(cap_letter.test(userName) && !blank_space.test(userName)){
                setRegisterUserNameError(null);
                flagUserName=1;
            }
            else{
                setRegisterUserNameError('Enter a valid username!');
                flagUserName=0;
            }
        }
        else{
            setRegisterUserNameError('Enter a username!');
            flagUserName=0;
        }
    }
    const isEmailEntered = (emailid) => {
        const re = /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
        const beg_spl = /^[0-9\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/; 
        if(emailid != ''){
            if(re.test(emailid) && !beg_spl.test(emailid)){
                setRegisterEmailError(null)
                flagEmail = 1
            }
            else{
                setRegisterEmailError('*Enter valid email')
                flagEmail = 0
            }
        }
        else{
            setRegisterEmailError(`*Please enter your Email ID!`);
            flagEmail = 0;
        }
    }
    const isPasswordEntered=(password)=>{
        var validationPassword = `*Password must be 8-16 characters long, Must contain atleast 1 uppercase character, Must contain atleast 1 lowercase character,  Must contain atleast 1 specialcase character, Must contain atleast 1 digit and must not contain any blank space.`
        var upper = /[A-Z]/g;
        var lower = /[a-z]/g;
        var digit = /[0-9]/g;
        var blank_space = /\s/g;
        var spl_char =/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\_\-]/g;
        if(password!=''){
            if(upper.test(password) && lower.test(password) && digit.test(password) && !blank_space.test(password) && spl_char.test(password))
            {    
                setRegisterPasswordError(null);
                flagPassword = 1;
            }
            else{
                setRegisterPasswordError(validationPassword);
                flagPassword = 0;
            }
        }
        else{
            setRegisterPasswordError('*Please enter your Password!');
            flagPassword = 0;
        }
    }
    const isAllValid = () => {
        var data = [];
        if(flagUserName==1 && flagEmail==1 && flagPassword==1){
            data.push({username:RegisterUserName, Email:RegisterEmail, Password:RegisterPassword})
            AsyncStorage.setItem("data", JSON.stringify(data));
            navigation.navigate('Login');
            flagUserName= -1;
            flagEmail = -1;
            flagPassword = -1;
            return true;
        }
        else{
            if(flagUserName!=1){
                setRegisterUserNameError('Enter a username!');
                flagUserName=0;
            }
            if(flagEmail!=1){
                flagEmail = 0;
                setRegisterEmailError('*Please enter your Email ID!');
            }
            if(flagPassword!=1){
                flagPassword=0;
                setRegisterPasswordError('*Please enter your Password!');
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
                flagUserName= -1;
                flagEmail = -1;
                flagPassword = -1;
                }}>
            <AntDesign name="left" size={25} color="white" />
            </TouchableOpacity>
            <Text style={styles.Heading}>Sign Up</Text>
        </View>

        <View style={styles.section2}>
            <View style={{marginVertical:10}}>
                <Text style={styles.emailLabel}>Username</Text>
                <TextInput style={styles.emailInput} placeholder='Username' value={RegisterUserName}
                onChangeText={(text)=>{
                    isUserNameValid(text)
                    setRegisterUserName(text)
                }} />
                <AntDesign name='user' style={{position:'absolute', top:32, left:10 }} size={20} color={flagUserName==0?'red':'black'}/>
                {RegisterUserNameError==null?<View></View>:<Text style={{color: "red",marginLeft: '5%'}}>{RegisterUserNameError}</Text>}
            </View>
            <View style={{marginVertical:10}}>
                <Text style={styles.emailLabel}>Email Address</Text>
                <TextInput style={styles.emailInput} placeholder='Email Address' value={RegisterEmail}
                onChangeText={(text)=>{
                    isEmailEntered(text);
                    setRegisterEmail(text);
                }}/>
                <Fontisto name='email' style={{position:'absolute', top:33, left:10 }} size={20} color={flagEmail==0?'red':'black'}/> 
                {RegisterEmailError==null?<View></View>:<Text style={{color: "red",marginLeft: '5%'}}>{RegisterEmailError}</Text>}
            </View>
            <View style={{marginVertical:10}}>
                <Text style={styles.passLabel}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.passInput} placeholder='Password' value={RegisterPassword}
                onChangeText={(text)=>{
                    isPasswordEntered(text);
                    setRegisterPassword(text);
                }} />
                <Feather name='lock' style={{position:'absolute', top:33, left:10 }} size={20} color={flagPassword==0?'red':'black'}/> 
                {RegisterPasswordError==null?<View></View>:<Text style={{color: "red",marginHorizontal: '5%', textAlign:'justify'}}>{RegisterPasswordError}</Text>}
            </View>
        </View>

        <View style={styles.section3}>
            <TouchableOpacity style={styles.LoginBtn} onPress={()=>isAllValid()}>
                <Text style={styles.LoginText}>Continue</Text></TouchableOpacity>
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