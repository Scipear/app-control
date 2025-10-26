import { StyleSheet, Image, Text, View, ScrollView, Pressable } from 'react-native';
import backgroundImage from '../assets/background-image.jpg';
import LongInput from '../components/longInput.js';
import { Link } from 'expo-router';

export default function Login() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.imgColorDiv}>
            <Image source={backgroundImage} style={styles.backImg} />
            <View style={styles.textContainer}>
              <Text style={styles.nameStyle}>NOMBRE DE LA APP</Text>
            </View>
            <View style={styles.blueShape} />
            <View style={styles.whiteShape1} />
            <View style={styles.whiteShape2} />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputsContainer}>
              <LongInput 
                type="email-address"
                security={false}
                text="CORREO"/>

              <LongInput 
                type="default"
                security={true}
                text="CONTRASEÑA"/>

            </View>

            <View style={styles.buttonsContainer}>
              <Link asChild href="/Home">
                <Pressable
                  style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>INICIAR SESIÓN</Text>
                </Pressable>
              </Link>

              <Pressable style={({pressed}) => [
                  {opacity: pressed ? 0.7 : 1,}, 
                  styles.forgetButton
                ]}>
                <Text style={styles.textButton}>OLVIDÉ MIS DATOS</Text>
              </Pressable>
            </View>
          </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  imgColorDiv: {
    backgroundColor: '#275AA4',
  },

  textContainer:{
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    top: 60,
    paddingInline: 20,
    zIndex: 3,
  },
  
  nameStyle:{
    fontFamily: 'LeagueSpartanBold',
    color: '#fff',
    top: 10,
    textAlign: 'center',
    fontSize: 48,
  },
  
  backImg: {
    width: '100%',
    height: 325,
    resizeMode: 'cover',
    overflow: 'hidden',
    opacity: 0.50,
    zIndex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  blueShape: {
    position: 'absolute',
    top: 225,
    height: 100,
    width: '120%',
    backgroundColor: '#275AA4',
    transform: [{ translateY: 40 }, {translateX: -50}, { scaleY: 2 }, { skewY: '15deg' }],
    zIndex: 1,
  },

  whiteShape1: {
    position: 'absolute',
    top: 269,
    left: 50,
    width: 350,
    height: 350,
    backgroundColor: '#fff',
    transform: [{ rotate: '28deg' }],
    zIndex: 2,
  },

  whiteShape2: {
    position: 'absolute',
    top: 275,
    left: -69,
    width: 350,
    height: 350,
    backgroundColor: '#fff',
    transform: [{ rotate: '56deg' }],
    zIndex: 2,
  },

  paragraphContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 4,
  },

  sentenceStyle: {
    fontFamily: 'LeagueSpartanBold',
    textAlign: 'center',
    fontSize: 20,
    marginBlockEnd: -8,
  },

  formContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingInline: 35,
    zIndex: 4,
  },

  inputsContainer: {
    paddingBlockStart: 30,
    paddingBlockEnd: 50,
  },

  buttonsContainer: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
  },

  forgetButton: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: 'center',
  },

  textButton: {
    fontFamily: 'LeagueSpartan',
    textAlign: 'center',
    color: '#1D3557',
    fontSize: 20,
    borderBottomColor: '#1D3557',
    borderBottomWidth: 2,
    paddingBottom: 3,
    paddingHorizontal: 5,
  },

  buttonStyle:{
      backgroundColor: '#1D3557',
      height: 50,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
  },

  textStyle:{
      fontFamily: 'LeagueSpartanBold',
      fontSize: 20,
      color: '#fff'
  },

});