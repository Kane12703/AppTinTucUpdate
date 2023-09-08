import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../../hook/hookRedux';
import {generateStyles} from '../../../utils/thems';
import {Time} from '../../../assets/icons';
import styles from './styles';

const NewsItem = ({item, handleItemPress}) => {
  const windowWidth = Dimensions.get('window').width;
  //mode
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  //style mode
  const {viewStyle, textStyle, textTitleStyle} = generateStyles(getMode);

  //cắt chữ ...
  const truncateTextByLines = (text, maxLines) => {
    const maxChars = maxLines * Math.floor(windowWidth / 8); // Giả sử 8 là kích thước của ký tự
    const ellipsis = '...';
    if (text.length <= maxChars) {
      return text;
    } else {
      let truncatedText = text.slice(0, maxChars - ellipsis.length);
      // Tìm vị trí cuối cùng của dấu cách trong chuỗi cắt
      const lastSpaceIndex = truncatedText.lastIndexOf(' ');
      if (lastSpaceIndex !== -1) {
        truncatedText = truncatedText.slice(0, lastSpaceIndex);
      }
      return truncatedText + ellipsis;
    }
  };

  const {title, category, _id, image, author} = item;

  let nameCategory = category.name;
  let nameAuthor = author.name;
  let imgAuthor = author.image;
  let truncatedTitle = truncateTextByLines(title, 2);

  return (
    <TouchableOpacity style={styles.newContainer} onPress={handleItemPress}>
      <View style={styles.imgNewContainer}>
        <Image style={styles.imgNew} source={{uri: image}} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.textLight, textStyle]}>Europe</Text>
        <Text style={[styles.titleNew, textTitleStyle]} numberOfLines={2}>
          {truncatedTitle}
        </Text>
        <View style={styles.authorContainer}>
          <View style={styles.authorContent}>
            <Image style={styles.imgAuthor} source={{uri: imgAuthor}} />
            <Text style={[styles.nameAuthor, textStyle]}>{nameAuthor}</Text>
          </View>
          <View style={styles.authorContent}>
            <Time />
            <Text style={[styles.textLight, textStyle]}>15m ago</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
