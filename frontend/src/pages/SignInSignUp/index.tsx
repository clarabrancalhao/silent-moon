import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import SvgUri from 'expo-svg-uri';
import Logo from '../../assets/logo.svg';
import Girl from '../../assets/girl.svg';
import Bg from '../../assets/bg1.png';

const SignInSignUp = () => {
  return (
    <View>
      <ImageBackground source={Bg} style={styles.bg}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Silent</Text>
          <SvgUri width="30" height="30" source={Logo} />
          <Text style={styles.logoText}>Moon</Text>
        </View>

        <SvgUri width="332" height="242" source={Girl} style={styles.image} />
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>We are what we do</Text>
        <Text style={styles.description}>
          Thousand of people are using silent moon for small meditation
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SING UP</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>ALREADY HAVE AN ACCOUNT?</Text>
        <Text
          onPress={() => Linking.openURL('http://google.com')}
          style={styles.link}>
          LOG IN
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bg: {
    resizeMode: 'cover',
    height: 500,
  },

  logoText: {
    fontSize: 16,
    fontFamily: 'FjallaOne_400Regular',
    letterSpacing: 2,
    paddingHorizontal: 8,
  },

  image: {
    marginTop: 80,
    alignItems: 'center',
  },

  content: {
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
    justifyContent: 'center',
    paddingHorizontal: 'auto',
    color: '#3F414E',
    paddingTop: 30,
  },

  description: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#A1A4B2',
    paddingHorizontal: 48,
    paddingTop: 15,
  },

  button: {
    marginTop: 56,
    paddingVertical: 24,
    marginHorizontal: 20,
    backgroundColor: '#8E97FD',
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
  },

  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  footerText: {
    color: '#A1A4B2',
    paddingRight: 5,
  },

  link: {
    color: '#8E97FD',
  },
});

export default SignInSignUp;
