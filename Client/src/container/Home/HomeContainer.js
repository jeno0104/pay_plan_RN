import {Text, View} from 'react-native';
import HomeComponent from '../../components/Home/HomeComponent';
import {useState} from 'react';

export default function HomeContainer() {
  const [goalDay, setGoalDay] = useState(3);
  const [remainingDay, setRemainingDay] = useState(7);
  const [goalPrice, setGoalPrice] = useState(500000);
  const [usedPrice, setUsedPrice] = useState(0);
  const [percentage, setPercentage] = useState((usedPrice / goalPrice) * 100);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View>
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
