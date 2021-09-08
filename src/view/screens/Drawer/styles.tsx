import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

export default StyleSheet.create({
  mainContaine: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    marginHorizontal: 10,
    alignItems:"center",
  },
  homeBtn:{
    height:40,
    width:200,
    justifyContent:'center',
    borderRadius:5,
  },
  text:{
    fontSize:16,
  }
});
