import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newContainer: {
    paddingHorizontal: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  rightItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonStyles: {
    width: 102,
    height: 34,
  },
  navItem: {
    flexDirection: 'row',
  },
  NewContainer: {
    flex: 1,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  imgAuthor: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 4,
  },
  imgNew: {
    width: '100%',
    height: 248,
    borderRadius: 6,
  },
  bottom: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2, // Đặt giá trị âm để tạo đổ bóng phía trên
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  textArea: {
    fontFamily: fontFamilySetup.light,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    marginTop: 16,
  },
  titleNew: {
    fontFamily: fontFamilySetup.light,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 36,
    letterSpacing: 0.12,
    marginBottom: 16,
  },
  textAuthor: {
    fontFamily: fontFamilySetup.medium,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  time: {
    fontFamily: fontFamilySetup.light,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
  },
});
export default styles;
