import {StyleSheet, Text, View} from 'react-native';

export default function List({item}) {
  return (
    <View style={styles.list}>
      <View style={styles.listInfo}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <View style={styles.listData}>
          <View style={styles.productAndPrice}>
            <View>
              <Text style={styles.productName}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.usedPrice}>{item.price}</Text>
            </View>
          </View>
          <View style={styles.productAndPrice}>
            <View>
              <Text style={styles.categories}></Text>
            </View>
            <View>
              <Text style={styles.categories}>{item.category}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    // width: '100%',
    height: 70,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  date: {
    // padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 20,
  },
  listData: {
    // backgroundColor: 'yellow',
    width: 350,
    padding: 10,
  },
  listInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  usedPrice: {
    fontWeight: '700',
    fontSize: 20,
    color: '#1AA9D6',
  },
  categories: {
    fontSize: 15,
    fontWeight: '700',
  },
});
