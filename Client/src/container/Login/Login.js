import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Login() {
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
            <TextInput style={styles.pwInput} placeholder="비밀번호" />
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
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>로그인</Text>
          </View>
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
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  logo: {},
  login: {
    width: 300,
    height: 300,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  signUp: {
    gap: 5,
  },
  idInput: {
    backgroundColor: '#dcdcdc',
    width: 200,
  },
  pwInput: {
    width: 200,
    backgroundColor: '#dcdcdc',
  },
  findInfo: {
    flexDirection: 'row',
  },
  selectMenu: {
    flexDirection: 'row',
    gap: 10,
  },
  clickMenu: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  loginBtn: {
    width: '80%',
    height: '25%',
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInBtn: {
    width: '80%',
    height: '25%',
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
