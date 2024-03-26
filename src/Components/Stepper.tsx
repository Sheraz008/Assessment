import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {mvs} from '../Theme/Responsive';

const Stepper = () => {
  const labels = ['', '', '', '', ''];
  const icons = [
    require('../Assets/Icons/user.png'),
    require('../Assets/Icons/target.png'),
    require('../Assets/Icons/file.png'),
    require('../Assets/Icons/elements.png'),
    require('../Assets/Icons/info.png'),
  ];
  const [currentPosition, setCurrentPosition] = useState(2);
  const customStyles = {
    stepIndicatorSize: 40,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 5,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#513FD7',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#00B67A',
    stepStrokeUnFinishedColor: '#13111A',
    separatorFinishedColor: '#00B67A',
    separatorUnFinishedColor: '#3A3940',
    stepIndicatorFinishedColor: '#00B67A',
    stepIndicatorUnFinishedColor: '#3A3940',
    stepIndicatorCurrentColor: '#513FD7',
    stepIndicatorLabelFontSize: 33,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
  };
  return (
    <View style={{marginVertical: 20, top: 10}}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        renderStepIndicator={({position, stepStatus}) => (
          <Image style={styles.imageStyle} source={icons[position]} />
        )}
      />
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  imageStyle: {
    height: mvs(20),
    width: mvs(20),
  },
});
