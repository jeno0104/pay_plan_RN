import {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AddListModal from '../modal/AddListModal';
import UsedChart from '../../shared/UsedChart';

export default function HomeComponent({
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
  const clickBtn = () => {
    setIsClicked(curr => !curr);
    console.log(isClicked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View>
          <UsedChart percentage={percentage} />
        </View>
        <View style={styles.goal}>
          <Text>
            목표 금액의{' '}
            <Text style={styles.goalPercentageText}>{percentage}</Text>%를
            사용했어요!
          </Text>
        </View>
        <View>
          <Text>
            남은 일수: <Text style={styles.remainingDayText}>{goalDay}일</Text>{' '}
            / {remainingDay}일
          </Text>
          <Text>
            잔액: <Text style={styles.remainingPriceText}>{usedPrice} 원</Text>{' '}
            / {goalPrice} 원
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.plusBtn} onPress={clickBtn}>
        <Text style={styles.plusBtnColor}>+</Text>
      </TouchableOpacity>
      <AddListModal
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setUsedPrice={setUsedPrice}
        setPercentage={setPercentage}
        usedPrice={usedPrice}
        goalPrice={goalPrice}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '3%',
  },
  info: {
    width: '90%',
    height: '95%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#C5C4C4',
    gap: 30,
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
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
  },
  remainingPriceText: {
    fontWeight: '700',
    color: 'red',
  },
  remainingDayText: {
    fontWeight: '700',
    color: 'blue',
  },
  goalPercentageText: {
    fontWeight: '700',
    color: 'red',
  },
});
