import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function NotMakeMission() {
  return (
    <View style={styles.container}>
      <View style={styles.notMakeMission}>
        <Text style={styles.notMakeMissionText}>생성된 미션이 없어요!</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>플랜 생성</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notMakeMissionText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 300,
    height: 100,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  btnText: {
    fontSize: 30,
    color: 'white',
  },
});
