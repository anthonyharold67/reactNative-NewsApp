import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import newsData from './helper/news_data.json';
import NewsCard from './components/NewsCard';
import Banner from './components/Banner';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>News App</Text>
      {/* <FlatList
        data={newsData}
        renderItem={({item}) => <NewsCard news={item} />}
      />renderItemın içini bu şekilde yapmak performans olarak zayıflatıyor o nedenle aşaıdaki gibi yapıyoruz.  */}
      {/* <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        ListFooterComponent={() => (
          <ScrollView horizontal>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
                key={bannerNews.id}
              />
            ))}
          </ScrollView>
        )}
        data={newsData}
        renderItem={renderNews}
      /> */}
      <FlatList
        ListHeaderComponent={Banner}
        data={newsData}
        renderItem={renderNews}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});

export default App;

//Flatlist eğer data da id  id olarak vrsa yakalar ama id yoksa aynı map teki gibi kendimiz key tanımlamılıyız bunu da yapan bir yontem;
//keyExtractor={(item, index) => item.x.toString()}item datamızın her bir elemanı
