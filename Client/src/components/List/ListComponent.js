import {FlatList, StyleSheet, Text, View} from 'react-native';
import List from './List';

export default function ListComponent() {
  const data = [
    {
      id: 1,
      date: '05.21',
      name: '투썸플레이스',
      price: '3,850원',
      category: '카페',
    },
    {
      id: 2,
      date: '05.22',
      name: 'CU',
      price: '2,000원',
      category: '편의점',
    },
    {
      id: 3,
      date: '05.23',
      name: '짱구미용실',
      price: '13,000원',
      category: '미용',
    },
    {
      id: 4,
      date: '05.24',
      name: '세븐일레븐',
      price: '5,500원',
      category: '편의점',
    },
    {
      id: 5,
      date: '05.25',
      name: 'CU',
      price: '2,000원',
      category: '편의점',
    },
    {
      id: 6,
      date: '05.26',
      name: '빽다방',
      price: '1,500원',
      category: '카페',
    },
    {
      id: 7,
      date: '05.27',
      name: '투썸플레이스',
      price: '3,850원',
      category: '카페',
    },
    {
      id: 8,
      date: '05.28',
      name: 'CU',
      price: '57,500원',
      category: '식사',
    },
    {
      id: 9,
      date: '05.29',
      name: '투썸플레이스',
      price: '5,500원',
      category: '카페',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.totalUsedPrice}>
        <View>
          <Text style={styles.totalPriceText}>총 사용 금액</Text>
        </View>
        <View>
          <Text style={styles.price}>300,000원</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <List item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  totalUsedPrice: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalPriceText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  price: {
    fontWeight: '700',
    fontSize: 30,
    color: '#1AA9D6',
  },
});
