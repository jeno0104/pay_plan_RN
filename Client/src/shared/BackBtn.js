import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function BackBtn({root}) {
  const navigation = useNavigation();
  const onBackBtn = () => {
    navigation.navigate(root);
  };
  return (
    <View>
      <TouchableOpacity onPress={onBackBtn}>
        <Text style={styles.backBtn}>←</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  backBtn: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
});
