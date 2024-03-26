import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mvs} from '../Theme/Responsive';
import Icon from 'react-native-vector-icons/AntDesign'; // Assuming you want to use Ionicons

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.iconBackground}>
        <Image
          style={styles.imageStyle}
          source={require('../Assets/Icons/arrow-left.png')}
        />
      </View>
      <View>
        <Text style={styles.topText}>Media management</Text>
        <Text style={styles.bottomText}>Draft campaign</Text>
      </View>
      <View
        style={[
          styles.iconBackground,

          {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#513FD7',
          },
        ]}>
        <Image
          style={styles.userImage}
          source={require('../Assets/Images/User.png')}
        />
        <View
          style={{
            backgroundColor: '#513FD7',
            padding: 3,
            borderRadius: mvs(10),
            position: 'absolute',
            bottom: 0,
            right: 2,
          }}>
          <Icon name="caretdown" size={7} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: mvs(16),
  },
  iconBackground: {
    height: mvs(56),
    width: mvs(56),
    borderRadius: mvs(56),
    backgroundColor: '#3A3940',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: mvs(24),
    width: mvs(24),
  },
  topText: {
    fontWeight: '500',
    fontSize: mvs(16),
    color: 'white',
  },
  bottomText: {
    fontWeight: '300',
    fontSize: mvs(14),
    color: '#D0CFD1',
    textAlign: 'center',
    top: 3,
  },
  userImage: {
    height: mvs(42),
    width: mvs(42),
    borderRadius: mvs(42),
    borderWidth: 1,
    borderColor: '#000000',
  },
});
