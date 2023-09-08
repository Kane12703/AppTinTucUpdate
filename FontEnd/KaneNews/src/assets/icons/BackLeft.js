import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const BackLeft = () => {
  return (
    <View>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          d="M7.828 11.0002H20V13.0002H7.828L13.192 18.3642L11.778 19.7782L4 12.0002L11.778 4.22217L13.192 5.63617L7.828 11.0002Z"
          fill="#4E4B66"
        />
      </Svg>
    </View>
  );
};

export default BackLeft;
