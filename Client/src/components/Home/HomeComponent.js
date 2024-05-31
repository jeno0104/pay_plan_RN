import {StyleSheet, Text, View} from 'react-native';

export default function HomeComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View>
          <Text>이미지</Text>
        </View>
        <View style={styles.goal}>
          <Text>목표 금액의 00%를 사용했어요!</Text>
        </View>
        <View>
          <Text>
            남은 일수: <Text>3일</Text>/7일
          </Text>
          <Text>
            잔액: <Text>120,000원</Text>/300,000원
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#C5C4C4',
  },
});
