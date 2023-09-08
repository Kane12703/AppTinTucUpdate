import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Ring = () => {
  return (
    <View>
      <Svg width={18} height={22} viewBox="0 0 18 22">
        <Path
          d="M2 16.25H16V9.281C16 5.398 12.866 2.25 9 2.25C5.134 2.25 2 5.398 2 9.281V16.25ZM9 0.25C13.97 0.25 18 4.293 18 9.281V18.25H0V9.281C0 4.293 4.03 0.25 9 0.25ZM6.5 19.25H11.5C11.5 19.913 11.2366 20.5489 10.7678 21.0178C10.2989 21.4866 9.66304 21.75 9 21.75C8.33696 21.75 7.70107 21.4866 7.23223 21.0178C6.76339 20.5489 6.5 19.913 6.5 19.25Z"
          fill="black"
        />
      </Svg>
    </View>
  );
};

export default Ring;
