import {StyleSheet, Text} from 'react-native';
import React, {Dispatch, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';
import {mvs} from '../Theme/Responsive';

interface PROPS {
  multiple?: boolean;
  top?: number;
  items?: Array<{label: string; value: string}>;
  setItems?: Dispatch<any>;
  placeholder?: string;
  value: any;
  setValue: Dispatch<string>;
  error?: any;
  zIndex?: number;
  header?: string;
  disable?: boolean;
}

const MyDropDown = ({
  multiple = false,
  value,
  disable,
  header,
  setValue,
  placeholder,
  top = 5,
  zIndex = 5,
  setItems,
  items = CITIES,
  error,
}: PROPS) => {
  const [open, setOpen] = useState(false);
  const handleChange = (v: {value: string}) => setValue(v?.value);
  const DropDownContainer = () => {
    return (
      <DropDownPicker
        searchable={true}
        theme="DARK"
        schema={{label: 'label', value: 'value'}}
        disabled={disable}
        open={open}
        placeholder={placeholder}
        value={value}
        items={items}
        style={styles.mainContainer}
        placeholderStyle={styles.placeholder}
        dropDownContainerStyle={styles.optionsContainer}
        textStyle={styles.text}
        listMode="SCROLLVIEW"
        onSelectItem={handleChange}
        setOpen={setOpen}
        itemKey="id"
      />
    );
  };
  return (
    <View style={{marginTop: mvs(20)}}>
      {header && <Text style={styles.bottomText}>{header + '*'}</Text>}
      {value ? <DropDownContainer /> : <DropDownContainer />}
    </View>
  );
};

export default MyDropDown;

const styles = StyleSheet.create({
  optionsContainer: {
    backgroundColor: '#1D1C26',
    zIndex: 100,
    borderWidth: 1,
    borderColor: '#523FD7',
  },
  placeholder: {color: '#FFFFFF', fontSize: mvs(17)},
  mainContainer: {
    height: mvs(60),
    zIndex: 100,
    borderRadius: mvs(12),
    backgroundColor: '#1D1C26',
    width: '99.5%',
    alignSelf: 'center',
    borderWidth: 0,
    borderColor: '#523FD7',
  },
  text: {
    color: '#FFFFFF',
  },
  bottomText: {
    fontWeight: '600',
    fontSize: mvs(14),
    color: '#000000',
  },
});

const CITIES = [
  {label: 'RYK', value: 'ryk'},
  {label: 'Lahore', value: 'lahore'},
  {label: 'Karachi', value: 'karachi'},
  {label: 'Fujariah', value: 'fujariah'},
  {label: 'Istanbul', value: 'istanbul'},
];
