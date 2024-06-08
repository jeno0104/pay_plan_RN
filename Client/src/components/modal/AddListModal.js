import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';

export default function AddListModal({
  isClicked,
  setIsClicked,
  setUsedPrice,
  setPercentage,
  usedPrice,
  goalPrice,
}) {
  const [nowUsedPrice, setNowUsedPrice] = useState(0);
  let usedPricecurr = 0;
  const clickCloseBtn = () => {
    setUsedPrice(curr => curr + Number(nowUsedPrice));
    usedPricecurr = usedPrice + Number(nowUsedPrice);
    setPercentage((usedPricecurr / goalPrice) * 100);
    setIsClicked(!isClicked);
  };
  5000;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isClicked}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsClicked(!isClicked);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              {/* <View style={styles.usedPrice}>
                <Text style={styles.usedPriceText}>사용한 금액: </Text>
                <TextInput
                  style={styles.usedPriceInput}
                  placeholder="사용한 금액을 입력하세요."
                  keyboardType="numeric"
                  onChangeText={setNowUsedPrice}
                />
              </View> */}
              <View>
                <Text>챌린지 추가</Text>
              </View>
              <View>
                <View>
                  <Text>챌린지 이름</Text>
                </View>
                <View>
                  <TextInput />
                </View>
              </View>
              <View>
                <View>
                  <Text>목표 기간</Text>
                </View>
                <View></View>
              </View>
              <View>
                <View>
                  <Text>목표 금액</Text>
                </View>
                <View>
                  <TextInput />
                </View>
              </View>
            </View>
            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={clickCloseBtn}>
                <Text style={styles.textStyle}>확인</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'absolute',
    left: '5%',
    top: '10%',
  },
  modalView: {
    // height: '250%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 20,
  },
  button: {
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 50,
    width: 50,
    height: 30,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  usedPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  usedPriceText: {
    fontSize: 20,
  },
  usedPriceInput: {
    backgroundColor: '#C5C4C4',
    width: 170,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
