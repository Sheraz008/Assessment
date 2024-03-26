import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {mvs} from '../Theme/Responsive';

interface ContentTypeBtnsProps {
  value: string;
  setValue: any;
}
const ContentTypeBtns = ({value, setValue}: ContentTypeBtnsProps) => {
  return (
    <View style={styles.wrap}>
      {['Fun', 'News', 'Education', 'Investment', 'Sports', 'Facts'].map(
        (item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setValue(item)}
              key={index}
              style={[
                styles.typeBtn,
                value == item && {
                  backgroundColor: '#523FD7',
                  borderColor: '#523FD7',
                },
              ]}
              activeOpacity={0.9}>
              <Text style={styles.bottomText}>{item}</Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

export default ContentTypeBtns;

const styles = StyleSheet.create({
  typeBtn: {
    borderWidth: 1,
    borderColor: '#D0CFD1',
    paddingVertical: mvs(14),
    paddingHorizontal: mvs(28),
    borderRadius: mvs(30),
    marginBottom: mvs(16),
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: mvs(24),
  },
  bottomText: {
    fontWeight: '300',
    fontSize: mvs(14),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
