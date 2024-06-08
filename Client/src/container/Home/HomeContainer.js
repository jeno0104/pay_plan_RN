import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import HomeComponent from '../../components/Home/HomeComponent';
import {useState} from 'react';

export default function HomeContainer() {
  const [goalDay, setGoalDay] = useState(false);
  const [goalName, setGoalName] = useState('');
  const [goalPrice, setGoalPrice] = useState(0);
  const [remainingDay, setRemainingDay] = useState(7);
  const [usedPrice, setUsedPrice] = useState(0);
  const [percentage, setPercentage] = useState((usedPrice / goalPrice) * 100);
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setGoalDay(curr => !curr);
  };
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={onClick}>
          <Text>O</Text>
        </TouchableOpacity>
      </View>
      <HomeComponent
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
    </View>
  );
}

// 어제와의 비교 -> 어제보다 오늘 00원을 많이 사용하셨습니다.
// 리스트를 하단에!
