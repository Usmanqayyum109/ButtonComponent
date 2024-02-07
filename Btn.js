import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {wp} from './Responsive';

import {Colors} from './Colors';

import {Fonts, FontsSize} from './Fonts';

export default function Btn(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props?.BtnContainer]}
      onPress={() => props?.onPress()}
      disabled={props?.indicator}>
      {props?.indicator ? (
        <ActivityIndicator size={'small'} color={Colors.bg} />
      ) : (
        <Text style={styles.text}>{props?.BtnText}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    backgroundColor: Colors.black,
    paddingVertical: wp(4.5),
    borderRadius: wp(7),
    alignItems: 'center',
  },
  text: {
    color: Colors.bg,
    fontFamily: Fonts.semiBold,
    fontSize: FontsSize.S,
  },
});
