import {useNavigation, useNavigationState} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  Button,
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
  const onLogin = () => {
    // 백 소통 후
    // 로그인 성공
    navigation.navigate('Main');
    // 로그인 실패
  };
  const navigation = useNavigation();
  const navigationState = useNavigationState(state => state);

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
          <View>
            <Text>자동 로그인</Text>
          </View>
          <View style={styles.findInfo}>
            <Text>아이디</Text>
            <Text>/</Text>
            <Text>비밀번호</Text>
            <Text>찾기</Text>
          </View>
        </View>
        <View style={styles.clickMenu}>
          <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
            <Text style={styles.loginBtnText}>로그인</Text>
          </TouchableOpacity>
          <View style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>회원가입</Text>
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
    gap: 20,
  },
  logo: {},
  login: {
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 50,
  },
  signUp: {
    gap: 5,
  },
  idInput: {
    backgroundColor: '#dcdcdc',
  },
  pwInput: {
    width: 250,
    backgroundColor: '#dcdcdc',
  },
  findInfo: {
    flexDirection: 'row',
  },
  selectMenu: {
    flexDirection: 'row',
    gap: 30,
  },
  clickMenu: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  loginBtn: {
    width: 250,
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    color: 'white',
    fontWeight: '700',
  },
  signInBtn: {
    width: 250,
    height: 50,

    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
