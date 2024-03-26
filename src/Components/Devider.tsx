import React from 'react';
import {View, StyleSheet} from 'react-native';
import {mvs} from '../Theme/Responsive';

const HorizontalDivider: React.FC = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#3A3940', // Change the color as needed
    borderBottomWidth: 1,
    marginVertical: mvs(30), // Adjust the spacing as needed
  },
});

export default HorizontalDivider;
