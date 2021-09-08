import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";

const Drawer = ({navigation}) => {
  const onBtn = () => {
  }
  return (
    <View style={styles.mainContaine}>
      <TouchableOpacity style={styles.homeBtn} onPress={onBtn}>
        <Text style={styles.text}>My Teams</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Drawer;
