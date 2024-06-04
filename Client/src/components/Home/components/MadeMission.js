import {StyleSheet, Text, View} from 'react-native';
import UsedChart from '../../../shared/UsedChart';

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
        <UsedChart percentage={percentage} />
      </View>
      <View style={styles.information}>
        <View style={styles.goal}>
          <Text style={styles.goalText}>
            목표 금액의{' '}
            <Text style={styles.goalPercentageText}>{percentage}</Text>%를
            사용했어요!
          </Text>
        </View>
        <View style={styles.infoText}>
          <Text style={styles.remainingDaysText}>
            남은 일수:{' '}
            <Text sty style={styles.remainingDayText}>
              {goalDay}일
            </Text>{' '}
            / {remainingDay}일
          </Text>
          <Text style={styles.remainingPriceText}>
            잔액: <Text style={styles.remainingPriceText}>{usedPrice} 원</Text>{' '}
            / {goalPrice} 원
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
    paddingTop: 30,
    gap: 30,
  },
  info: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#C5C4C4',
    gap: 30,
  },
  information: {
    gap: 10,
    backgroundColor: '#dcdcdc',
    width: 272,
    height: 105,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusBtn: {
    width: 50,
    height: 50,
    position: 'absolute',
    backgroundColor: 'blue',
    right: '3%',
    bottom: '-9%',
    borderRadius: 50,
    // padding: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  plusBtnColor: {
    fontSize: 33,
    color: 'white',
    textAlign: 'center',
  },

  remainingPriceText: {
    fontSize: 15,
    fontWeight: '700',
    // color: 'red',
  },
  remainingDaysText: {
    color: 'black',
  },
  remainingDayText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'blue',
  },
  goalPercentageText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1AA9D6',
  },
  goalText: {
    fontSize: 16,
    color: 'black',
  },
});
