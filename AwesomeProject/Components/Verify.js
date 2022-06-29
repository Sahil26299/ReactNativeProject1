import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Verify({navigation}) {
  const [Dig1, setDig1] = useState('');
  const [Dig2, setDig2] = useState('');
  const [Dig3, setDig3] = useState('');
  const [Dig4, setDig4] = useState('');
  const Digit1 = useRef();
  const Digit2 = useRef();
  const Digit3 = useRef();
  const Digit4 = useRef();
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'#9C6DFF'} />
      <View style={styles.section1}>
        <AntDesign name="left" size={25} color="white" />
        <Text style={styles.Heading}>Verify</Text>
      </View>
      <Image
        style={{
          position: 'absolute',
          right: width * 0.25,
          top: 100,
          width: 180,
          resizeMode: 'contain',
        }}
        source={require('./Assets/MailNotificationImage.png')}
      />
      <View style={styles.section2}>
        <Text style={styles.emailLabel}>
          Please check your email for the verification code sent to you
        </Text>
        <View style={{flexDirection: 'row', paddingHorizontal: width * 0.035}}>
          <TextInput
            maxLength={1}
            keyboardType={'number-pad'}
            style={styles.OtpInput}
            onChangeText={() => Digit2.current.focus()}
          />
          <TextInput
            maxLength={1}
            ref={Digit2}
            keyboardType={'number-pad'}
            onChangeText={() => Digit3.current.focus()}
            style={styles.OtpInput}
          />
          <TextInput
            maxLength={1}
            ref={Digit3}
            keyboardType={'number-pad'}
            onChangeText={() => Digit4.current.focus()}
            style={styles.OtpInput}
          />
          <TextInput
            maxLength={1}
            ref={Digit4}
            keyboardType={'number-pad'}
            style={styles.OtpInput}
          />
        </View>
      </View>

      <View style={styles.section3}>
        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() => navigation.navigate('Verify')}>
          <Text style={styles.LoginText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#363F61',
    flex: 1,
  },
  Heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  section1: {
    height: height * 0.3,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#9C6DFF',
  },
  section2: {
    height: height * 0.3,
    paddingHorizontal: width * 0.1,
  },
  GoogleView: {
    backgroundColor: 'white',
    width: width * 0.8,
    height: height * 0.07,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 45,
    marginBottom: 25,
  },
  GoogleImage: {
    position: 'absolute',
    width: 25,
    left: 10,
    resizeMode: 'contain',
  },
  GoogleText: {
    color: 'black',
    fontWeight: '600',
  },
  section3: {
    height: height * 0.3,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  emailLabel: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
    marginHorizontal: 22,
    marginTop: 80,
  },
  OtpInput: {
    backgroundColor: 'white',
    width: width * 0.125,
    height: height * 0.06,
    borderRadius: 12,
    justifyContent: 'center',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  LoginBtn: {
    backgroundColor: 'black',
    width: width * 0.8,
    height: height * 0.06,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  LoginText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
});
