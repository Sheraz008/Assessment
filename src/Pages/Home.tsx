import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ContentTypeBtns from '../Components/ContentTypeBtns';
import CustomButton from '../Components/CustomButton';
import HorizontalDivider from '../Components/Devider';
import Header from '../Components/Header';
import MyDropDown from '../Components/MyDropDown';
import Stepper from '../Components/Stepper';
import {contentTypes} from '../Helpers/dummyData';
import {mvs} from '../Theme/Responsive';
import AppSlider from '../Components/AppSlider';

const Home = () => {
  const [selectedType, setselectedType] = useState('Fun');
  const [value, setvalue] = useState('');
  const [category, setCategory] = useState('Fun');
  const [valueSlider, setValueSlider] = useState(100);
  const handleSetType = (v: string) => {
    setselectedType(v);
    setvalue('');
    setCategory(v);
  };
  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: mvs(20)}}
        style={{marginHorizontal: mvs(16)}}>
        <Stepper />
        <View>
          <Text style={styles.topText}>Content type</Text>
          <Text style={styles.bottomText}>
            Choose a content type that best fits your needs.
          </Text>
        </View>
        <HorizontalDivider />
        <View>
          <Text style={[styles.topText, {fontSize: mvs(16)}]}>
            What type of content are you creating?
          </Text>
          <ContentTypeBtns value={selectedType} setValue={handleSetType} />
          <Text style={[styles.topText, {fontSize: mvs(16)}]}>
            {`What type of content are you " ${category} " creating?`}
          </Text>
          <View style={styles.dropdownStyle}>
            <MyDropDown
              placeholder="Select"
              items={contentTypes[selectedType]}
              value={value}
              setValue={setvalue}
            />
          </View>
          <Text
            style={[styles.topText, {fontSize: mvs(16), marginTop: mvs(30)}]}>
            {`Set the number of words for output text. (${valueSlider})`}
          </Text>
          <AppSlider />
          <CustomButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#12111A'},
  topText: {
    fontWeight: '500',
    fontSize: mvs(22),
    color: '#ffffff',
  },
  bottomText: {
    fontWeight: '300',
    fontSize: mvs(14),
    color: '#D0CFD1',
    top: 5,
  },
  dropdownStyle: {zIndex: 30000},
});
