import {useNavigation, useNavigationState} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackBtn from '../../../shared/BackBtn';

export default function Challenge() {
  const onBackBtn = () => {
    navigation.navigate('Main');
  };
  const navigation = useNavigation();
  const navigationState = useNavigationState(state => state);
  const onFinish = () => {
    navigation.navigate('ChallengeFinish');
  };
  return (
    <View style={styles.container}>
      <BackBtn root={'Main'} />
      <View>
        <Text style={styles.challengeAddText}>챌린지 추가</Text>
      </View>
      <View style={styles.nameContainer}>
        <View>
          <Text style={styles.name}>챌린지 이름</Text>
        </View>
        <View>
          <TextInput style={styles.nameInput} placeholder="8글자 이내" />
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.goalText}>목표 기간</Text>
        </View>
        <View></View>
      </View>
      <View>
        <Text style={styles.goalPrice}>목표 금액</Text>
      </View>
      <View>
        <TextInput style={styles.goalInput} placeholder="원" />
      </View>
      <View style={styles.finishContainer}>
        <TouchableOpacity style={styles.finishBtn} onPress={onFinish}>
          <Text style={styles.finishBtnText}>완 료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    gap: 30,
  },

  challengeAddText: {
    color: '#1AA9D6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameContainer: {
    gap: 10,
  },
  name: {
    fontSize: 20,
    color: '#4A4A4A',
  },
  nameInput: {
    width: 356,
    height: 40,
    backgroundColor: '#c0c4cd',
    borderRadius: 10,
  },
  goalText: {
    color: '#4A4A4A',
    fontSize: 20,
  },
  goalPrice: {
    color: '#4A4A4A',
    fontSize: 20,
  },
  goalInput: {
    width: 356,
    height: 40,
    backgroundColor: '#c0c4cd',
    borderRadius: 10,
    textAlign: 'right',
    paddingRight: 20,
  },

  finishContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  finishBtn: {
    backgroundColor: '#1AA9D6',
    width: 133,
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishBtnText: {
    color: 'white',
    fontSize: 20,
  },
});
