import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ProfileActive = () => {
  return (
    <View>
      <Svg width={24} height={25} viewBox="0 0 24 25">
        <Path
          d="M12 2.5C17.52 2.5 22 6.98 22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5ZM6.023 15.916C7.491 18.106 9.695 19.5 12.16 19.5C14.624 19.5 16.829 18.107 18.296 15.916C16.6317 14.3606 14.4379 13.4968 12.16 13.5C9.88171 13.4966 7.68751 14.3604 6.023 15.916ZM12 11.5C12.7956 11.5 13.5587 11.1839 14.1213 10.6213C14.6839 10.0587 15 9.29565 15 8.5C15 7.70435 14.6839 6.94129 14.1213 6.37868C13.5587 5.81607 12.7956 5.5 12 5.5C11.2044 5.5 10.4413 5.81607 9.87868 6.37868C9.31607 6.94129 9 7.70435 9 8.5C9 9.29565 9.31607 10.0587 9.87868 10.6213C10.4413 11.1839 11.2044 11.5 12 11.5Z"
          fill="#1877F2"
        />
      </Svg>
    </View>
  );
};

export default ProfileActive;
