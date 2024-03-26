import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {mvs} from '../Theme/Responsive';
import Slider from '@react-native-community/slider';

const AppSlider = () => {
  const [valueSlider, setValueSlider] = useState(100);

  const handleValueChange = (val: any) => {
    const roundedValue = Math.round(val);
    setValueSlider(roundedValue);
  };
  return (
    <View
      style={{
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: mvs(20),
        justifyContent: 'space-between',
        paddingHorizontal: mvs(10),
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={[styles.bottomText, {top: 0, fontWeight: '500'}]}>
          100
        </Text>
        <Slider
          style={{
            width: '80%',
            height: 40,
            marginStart: mvs(10),
            transform: [{scaleY: 1}],
            borderRadius: 10,
          }}
          minimumValue={100}
          maximumValue={1000}
          onValueChange={(val: any) => handleValueChange(val)}
          minimumTrackTintColor={'rgb(81,63,215)'}
          maximumTrackTintColor="#3A3940"
          thumbImage={require('../Assets/Icons/thumb.png')}
        />
      </View>
      <Text style={[styles.bottomText, {top: 0, fontWeight: '500'}]}>1000</Text>
    </View>
  );
};

export default AppSlider;

const styles = StyleSheet.create({
  bottomText: {
    fontWeight: '300',
    fontSize: mvs(14),
    color: '#D0CFD1',
    top: 5,
  },
});
