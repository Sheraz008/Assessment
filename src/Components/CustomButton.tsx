import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {mvs} from '../Theme/Responsive';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.buttonLayout} activeOpacity={0.9}>
      <Text style={styles.bottomText}>Next</Text>
      <Image
        style={styles.imageStyle}
        source={require('../Assets/Icons/arrow-right.png')}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonLayout: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: mvs(20),
    alignItems: 'center',
    height: mvs(52),
    marginTop: mvs(26),
  },
  bottomText: {
    fontWeight: '400',
    fontSize: mvs(14),
    color: '#523FD7',
    textAlign: 'center',
  },
  imageStyle: {
    height: mvs(20),
    width: mvs(20),
  },
});
