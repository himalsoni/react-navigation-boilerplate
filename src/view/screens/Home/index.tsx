import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "./styles";
import DefaultHeader from "../../elements/DefaultHeader";
import Images from '../../../constants/Images';

const Home = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => (
        <TouchableOpacity onPress={onMenu}>
          <Image source={Images.menu} resizeMode={'center'} style={styles.leftIcon} />
        </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <Image source={Images.home} resizeMode={'contain'} style={styles.centerIcon} />
      ),
      headerStyle: {
        backgroundColor: '#FFFFFF', //Set Header color
      },
      headerTitleAlign: 'center'
    });
  }, [navigation]);

  const onMenu = () => {
    navigation.navigate("Drawer")
  }

  const onBtn = () => {
    navigation.navigate("ManageLeads")
  }
  return (
    <View style={styles.mainContaine}>
      <TouchableOpacity style={styles.homeBtn} onPress={onBtn}>
        <Text style={styles.text}>Go to ManageLeads</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
