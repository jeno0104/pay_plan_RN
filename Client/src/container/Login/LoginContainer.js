import {useNavigation, useNavigationState} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginContainer() {
  useEffect(() => {
    if (navigationState) {
      // 네비게이션 객체가 준비되었으므로 로그인 버튼 클릭 시 홈 화면으로 이동할 수 있습니다.
      console.log('Navigation is ready!');
    } else {
      console.log('Navigation is not ready yet.');
    }
  }, [navigationState]);
  const navigation = useNavigation();
  const navigationState = useNavigationState(state => state);
  const onLogin = () => {
    // 백 소통 후
    // 로그인 성공
    navigation.navigate('Main');
    // 로그인 실패
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/images/logo.png')} />
      </View>
      <View style={styles.login}>
        <View style={styles.signUp}>
          <View>
            <TextInput style={styles.idInput} placeholder="아이디" />
          </View>
          <View>
            <TextInput
              style={styles.pwInput}
              placeholder="비밀번호"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.selectMenu}>
          <View style={styles.findInfo}>
            <Text>아이디</Text>
            <Text>/</Text>
            <Text>비밀번호</Text>
            <Text>찾기</Text>
          </View>
        </View>
        <View style={styles.clickMenu}>
          <View>
            <TouchableOpacity style={styles.signUpBtn} onPress={onSignUp}>
              <Text style={styles.signUpBtnText}>sign up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
              <Text style={styles.loginBtnText}>login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {},
  login: {
    width: 350,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  signUp: {
    gap: 5,
  },
  idInput: {
    backgroundColor: '#dcdcdc',
    width: 245,
    height: 35,
    fontSize: 13,
    padding: 5,
    borderRadius: 10,
  },
  pwInput: {
    width: 245,
    fontSize: 13,
    height: 35,
    padding: 5,
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
  },
  findInfo: {
    flexDirection: 'row',
  },
  selectMenu: {
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  clickMenu: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  loginBtn: {
    width: 115,
    height: 30,
    backgroundColor: '#1AA9D6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  loginBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  signUpBtn: {
    width: 115,
    height: 30,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  signUpBtnText: {
    color: 'black',
    fontWeight: '700',
  },
});
