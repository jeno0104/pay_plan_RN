import AnimatedProgressWheel from 'react-native-progress-wheel';

export default function UsedChart({percentage}) {
  console.log(percentage);
  return (
    <AnimatedProgressWheel
      size={250}
      width={20}
      color={'#1AA9D6'}
      progress={10}
      backgroundColor={'#dcdcdc'}
    />
  );
}
