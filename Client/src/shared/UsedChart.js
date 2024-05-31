import AnimatedProgressWheel from 'react-native-progress-wheel';

export default function UsedChart({percentage}) {
  console.log(percentage);
  return (
    <AnimatedProgressWheel
      size={180}
      width={20}
      color={'red'}
      progress={percentage}
      backgroundColor={'green'}
    />
  );
}
