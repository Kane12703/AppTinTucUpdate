import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Time = () => {
  return (
    <View>
      <Svg width={14} height={14} viewBox="0 0 14 14">
        <Path
          d="M7 12.8334C3.77826 12.8334 1.16667 10.2218 1.16667 7.00008C1.16667 3.77833 3.77826 1.16675 7 1.16675C10.2218 1.16675 12.8333 3.77833 12.8333 7.00008C12.8333 10.2218 10.2218 12.8334 7 12.8334ZM7 11.6667C8.23768 11.6667 9.42467 11.1751 10.2998 10.2999C11.175 9.42474 11.6667 8.23776 11.6667 7.00008C11.6667 5.7624 11.175 4.57542 10.2998 3.70025C9.42467 2.82508 8.23768 2.33341 7 2.33341C5.76233 2.33341 4.57534 2.82508 3.70017 3.70025C2.825 4.57542 2.33334 5.7624 2.33334 7.00008C2.33334 8.23776 2.825 9.42474 3.70017 10.2999C4.57534 11.1751 5.76233 11.6667 7 11.6667ZM7.58334 7.00008H9.91667V8.16675H6.41667V4.08341H7.58334V7.00008Z"
          fill="#4E4B66"
        />
      </Svg>
    </View>
  );
};

export default Time;
