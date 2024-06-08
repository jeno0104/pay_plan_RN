import {useNavigation, useNavigationState} from '@react-navigation/native';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function NotMakeMission() {
  useEffect(() => {
    if (navigationState) {
      // 네비게이션 객체가 준비되었으므로 로그인 버튼 클릭 시 홈 화면으로 이동할 수 있습니다.
      console.log('Navigation is ready!');
    } else {
      console.log('Navigation is not ready yet.');
    }
  }, [navigationState]);
  const onClick = () => {
    // 백 소통 후
    // 로그인 성공
    navigation.navigate('Challenge');
    // 로그인 실패
  };
  const navigation = useNavigation();
  const navigationState = useNavigationState(state => state);

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={{backgroundColor: 'red'}}>
          <Image
            style={styles.chart_img}
            source={require('../../../../assets/images/percentage.png')}
          />
        </View>
        <View style={styles.plusBtn}>
          <View>
            <TouchableOpacity style={styles.btn} onPress={onClick}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.challengeText}>챌린지 추가하기</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoText}>
        <View>
          <Text style={styles.textOne}>
            돈이 한정되어 있거나 소비를 줄여야하나요?
          </Text>
        </View>
        <View>
          <Text style={styles.textTwo}>목표 기간과 금액을 설정해 보세요.</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoText: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  textOne: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textTwo: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: 18,
  },
  chart_img: {
    backgroundColor: 'red',
  },
  plusBtn: {
    position: 'absolute',
    left: '22%',
    top: '38%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  btn: {
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderRadius: 10,
  },
  plusText: {
    fontSize: 25,
    color: 'black',
  },
  challengeText: {
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: 'bold',
  },
});
