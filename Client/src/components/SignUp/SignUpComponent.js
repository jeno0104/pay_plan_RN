import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BackBtn from '../../shared/BackBtn';

export default function SignUpComponent() {
  const navigation = useNavigation();
  const onSignUp = () => {
    // 서버 요청
    // 성공 -> login 컴포넌트로
    // 실패 -> id 존재, 다시 입력

    Alert.alert('회원 가입이 완료 되었습니다.');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <BackBtn root="Login" />
      <View>
        <Text style={styles.signUpText}>회원 가입</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.nickNameText}>닉네임</Text>
          </View>
          <View>
            <TextInput placeholder="8글자 이내" style={styles.nickNameInput} />
          </View>
        </View>

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.nickNameText}>아이디</Text>
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholder="아이디"
              style={styles.idInput}
            />
          </View>
        </View>

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.passWordText}>비밀번호</Text>
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholder="비밀번호 입력"
              style={styles.passWordInput}
            />
          </View>
        </View>

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.passWordCheckText}>비밀번호 확인</Text>
          </View>
          <View>
            <TextInput
              placeholder="비밀번호 확인"
              style={styles.passWordCheckInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.signUp}>
        <TouchableOpacity style={styles.signUpBtn} onPress={onSignUp}>
          <Text style={styles.signUpBtnText}>회원 가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    gap: 30,
  },
  form: {
    gap: 30,
  },
  signUpText: {
    fontSize: 20,
    color: '#1AA9D6',
  },
  nickNameText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A4A4A',
  },
  nickNameInput: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
  },
  idText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A4A4A',
  },
  idInput: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
  },
  passWordInput: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
  },
  passWordText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A4A4A',
  },
  passWordCheckInput: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
  },
  passWordCheckText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A4A4A',
  },
  formContainer: {
    gap: 10,
  },
  signUp: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpBtn: {
    backgroundColor: '#1AA9D6',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signUpBtnText: {
    color: 'white',
    fontSize: 18,
  },
});
