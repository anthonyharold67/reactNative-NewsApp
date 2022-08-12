import {ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './Banner.style';
import news_banner_data from '../../helper/news_data.json';

const Banner = () => {
  return (
    <ScrollView horizontal>
      {news_banner_data.map(bannerNews => (
        <Image
          key={bannerNews.id}
          style={styles.banner_image}
          source={{uri: bannerNews.image}}
        />
      ))}
    </ScrollView>
  );
};

export default Banner;
