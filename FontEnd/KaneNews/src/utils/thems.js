import Color from '../assets/Color';

export const generateStyles = getMode => {
  const viewStyle = {
    backgroundColor: getMode ? 'black' : 'white',
  };
  const buttonStyle = {
    borderColor: getMode ? 'white' : '#1877F2',
  };
  const textStyle = {
    color: getMode ? 'white' : '#4E4B66',
  };
  const textTitleStyle = {
    color: getMode ? 'white' : 'black',
  };
  return {viewStyle, buttonStyle, textStyle, textTitleStyle};
};
