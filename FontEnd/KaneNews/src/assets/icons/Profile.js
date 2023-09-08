import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Profile = () => {
  return (
    <View>
      <Svg width={24} height={25} viewBox="0 0 24 25">
        <Path
          d="M12 22.5C6.477 22.5 2 18.023 2 12.5C2 6.977 6.477 2.5 12 2.5C17.523 2.5 22 6.977 22 12.5C22 18.023 17.523 22.5 12 22.5ZM7.013 18.756C8.42855 19.8877 10.1877 20.5029 12 20.5C13.97 20.5 15.773 19.788 17.167 18.608C16.5157 17.9397 15.7371 17.4089 14.877 17.0468C14.017 16.6847 13.0931 16.4988 12.16 16.5C11.1926 16.4989 10.2355 16.6989 9.34947 17.0872C8.46343 17.4756 7.66778 18.0439 7.013 18.756ZM5.616 17.32C6.45645 16.4281 7.47067 15.7177 8.59614 15.2327C9.72161 14.7477 10.9345 14.4984 12.16 14.5C13.3417 14.4985 14.512 14.7304 15.6037 15.1824C16.6955 15.6344 17.6873 16.2976 18.522 17.134C19.3781 15.9291 19.8836 14.5106 19.9826 13.0359C20.0815 11.5612 19.77 10.0879 19.0825 8.77946C18.395 7.47102 17.3585 6.37862 16.088 5.62345C14.8174 4.86827 13.3625 4.47984 11.8846 4.50125C10.4067 4.52267 8.96366 4.95308 7.71552 5.74476C6.46738 6.53643 5.46296 7.6584 4.81369 8.9862C4.16442 10.314 3.89569 11.7957 4.03732 13.2669C4.17894 14.7382 4.72537 16.1414 5.616 17.321V17.32ZM12 13.5C10.9391 13.5 9.92172 13.0786 9.17157 12.3284C8.42143 11.5783 8 10.5609 8 9.5C8 8.43913 8.42143 7.42172 9.17157 6.67157C9.92172 5.92143 10.9391 5.5 12 5.5C13.0609 5.5 14.0783 5.92143 14.8284 6.67157C15.5786 7.42172 16 8.43913 16 9.5C16 10.5609 15.5786 11.5783 14.8284 12.3284C14.0783 13.0786 13.0609 13.5 12 13.5ZM12 11.5C12.5304 11.5 13.0391 11.2893 13.4142 10.9142C13.7893 10.5391 14 10.0304 14 9.5C14 8.96957 13.7893 8.46086 13.4142 8.08579C13.0391 7.71071 12.5304 7.5 12 7.5C11.4696 7.5 10.9609 7.71071 10.5858 8.08579C10.2107 8.46086 10 8.96957 10 9.5C10 10.0304 10.2107 10.5391 10.5858 10.9142C10.9609 11.2893 11.4696 11.5 12 11.5Z"
          fill="#4E4B66"
        />
      </Svg>
    </View>
  );
};

export default Profile;