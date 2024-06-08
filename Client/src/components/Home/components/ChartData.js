import {StyleSheet, Text, View} from 'react-native';
import UsedChart from '../../../shared/UsedChart';

export default function ChartData() {
  return (
    <View style={styles.data}>
      <View style={styles.goalInfoText}>
        <View>
          <Text style={styles.title}>월급날까지만 참자</Text>
        </View>
        <View>
          <Text style={styles.titleDate}>240606~240613</Text>
        </View>
      </View>
      <UsedChart percentage={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  goalInfoText: {
    position: 'absolute',
    left: '15%',
    top: '38%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#4A4A4A',
  },
  titleDate: {
    fontSize: 20,
    color: '#4A4A4A',
  },
});
