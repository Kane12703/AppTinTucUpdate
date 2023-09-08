import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const HearActive = () => {
  return (
    <View>
      <Svg width={24} height={25} viewBox="0 0 24 25">
        <Path
          d="M17 3C20.038 3 22.5 5.5 22.5 9C22.5 16 15 20 12.5 21.5C10 20 2.5 16 2.5 9C2.5 5.5 5 3 8 3C9.86 3 11.5 4 12.5 5C13.5 4 15.14 3 17 3Z"
          fill="#ED2E7E"
        />
      </Svg>
    </View>
  );
};

export default HearActive;
