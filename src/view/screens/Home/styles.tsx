import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

export default StyleSheet.create({
  leftIcon:{
    height:40,
    width:40,
    marginLeft:16,
  },
  centerIcon:{
    height:40,
    width:40,
  },
  mainContaine: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    marginHorizontal: 10,
    alignItems:"center",
    justifyContent:'center',
  },
  homeBtn:{
    height:40,
    width:200,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:'center',
    borderRadius:5,
  },
  text:{
    color:"white",
    fontSize:16,
  }
});
