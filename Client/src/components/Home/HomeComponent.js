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
import MadeMisison from './components/MadeMission';
import NotMakeMission from './components/NotMakeMission';

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
          {goalDay ? (
            <MadeMisison
              goalDay={goalDay}
              remainingDay={remainingDay}
              percentage={percentage}
              goalPrice={goalPrice}
              usedPrice={usedPrice}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              setUsedPrice={setUsedPrice}
              setPercentage={setPercentage}
            />
          ) : (
            <NotMakeMission />
          )}
        </View>
        {/* <View>
          {goalDay ? (
            <TouchableOpacity style={styles.plusBtn} onPress={clickBtn}>
              <Text style={styles.plusBtnColor}>기록하기</Text>
            </TouchableOpacity>
          ) : (
            ''
          )}
        </View> */}
      </View>

      {/* <AddListModal
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setUsedPrice={setUsedPrice}
        setPercentage={setPercentage}
        usedPrice={usedPrice}
        goalPrice={goalPrice}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },

  plusBtn: {
    width: 90,
    height: 30,

    backgroundColor: '#1AA9D6',
    borderRadius: 10,
  },
  plusBtnColor: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
