import {useNavigation, useNavigationState} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ChallengeFinish() {
  const navigation = useNavigation();
  const navigationState = useNavigationState(state => state);
  const onClick = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.challengeFinishText}>챌린지가 추가되었어요</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.backBtn} onPress={onClick}>
          <Text style={styles.backBtnText}>돌아가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  challengeFinishText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  backBtn: {
    backgroundColor: '#1AA9D6',
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
