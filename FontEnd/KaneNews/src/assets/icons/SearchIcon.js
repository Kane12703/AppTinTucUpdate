import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = () => {
  
  return (
    <View>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
          fill="#4E4B66"
        />
      </Svg>
    </View>
  );
};

export default SearchIcon;
