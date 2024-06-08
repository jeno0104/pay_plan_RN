import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UsedChart from '../../../shared/UsedChart';
import ChartData from './ChartData';

export default function MadeMisison({
  goalDay,
  remainingDay,
  percentage,
  goalPrice,
  usedPrice,
  isClicked,
  setIsClicked,
  setUsedPrice,
  setPercentage,
}) {
  return (
    <View style={styles.container}>
      <View>
        <ChartData />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.infoText}>
            목표 금액의 <Text style={styles.percentageText}>45%</Text>를
            사용했어요
          </Text>
        </View>
        <View>
          <View>
            <Text style={styles.dateText}>
              남은 일수 : <Text style={styles.dateTextTwo}>4일</Text> / 7일
            </Text>
          </View>
          <View>
            <Text style={styles.dateText}>
              잔액 : <Text style={styles.dateTextTwo}>135,000원</Text> /
              300,000원
            </Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.recordBtn}>
          <Text style={styles.recordText}>지출 기록하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    gap: 30,
    flex: 0.95,
  },
  info: {
    width: 400,
    gap: 20,
  },
  infoText: {
    fontSize: 20,
    textAlign: 'center',
  },
  percentageText: {
    fontSize: 20,
    color: '#1AA9D6',
  },
  dateText: {
    fontSize: 18,
    textAlign: 'center',
  },
  dateTextTwo: {
    fontSize: 19,
    color: '#1AA9D6',
  },
  recordBtn: {
    backgroundColor: '#1AA9D6',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  recordText: {
    fontSize: 20,
    color: 'white',
  },
});
