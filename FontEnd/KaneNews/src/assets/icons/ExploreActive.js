import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ExploreActive = () => {
  return (
    <View>
      <Svg width={24} height={25} viewBox="0 0 24 25">
        <Path
          d="M12 22.5C6.477 22.5 2 18.023 2 12.5C2 6.977 6.477 2.5 12 2.5C17.523 2.5 22 6.977 22 12.5C22 18.023 17.523 22.5 12 22.5ZM15.5 9L10.5 11L8.5 16L13.5 14L15.5 9Z"
          fill="#1877F2"
        />
      </Svg>
    </View>
  );
};

export default ExploreActive;
