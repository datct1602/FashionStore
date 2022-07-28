import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ProductContext from '../ProductContext';

const Detail = (props) => {
  const {
    navigation,
    route: {
      params: { _id },
    },
  } = props;
  const { onGetProductById, product } = useContext(ProductContext);
  useEffect(async () => {
    await onGetProductById(_id);
    return () => { };
  }, []);

  return (
    <View style={styles.bodyView}>
      <View style={styles.bannerView}>
        <Text style={styles.backText} onPress = {() => navigation.navigate('Product')}>Back</Text>
      </View>
      <View style={styles.imageView}>
        <Image style={styles.imageProduct} source={{ uri: product.image }}></Image>
      </View>

      <View style = {styles.scrollView}>
        <View style = {styles.imageBodyView}>
        <ScrollView horizontal={true} >
          <View style = {styles.imageDetailView}>
            <Image style = {styles.imageDetail} source={require('../../../images/1.webp')}></Image>
          </View>

          <View style = {styles.imageDetailView}>
            <Image style = {styles.imageDetail} source={require('../../../images/3.webp')}></Image>
          </View>

          <View style = {styles.imageDetailView}>
            <Image style = {styles.imageDetail} source={require('../../../images/6.webp')}></Image>
          </View>

          <View style = {styles.imageDetailView}>
            <Image style = {styles.imageDetail} source={require('../../../images/2.webp')}></Image>
          </View>

          <View style = {styles.imageDetailView}>
            <Image style = {styles.imageDetail} source={require('../../../images/5.webp')}></Image>
          </View>

        </ScrollView>
        </View>
      </View>

      <View style={styles.informationView}>
        <View style={styles.napView}>
          <View style={styles.nameView}><Text style={styles.nameText}>{product.name}</Text></View>
          <View style={styles.priceView}><Text style={styles.priceText}>$ {product.price}</Text></View>
        </View>

        <View>
          <Text style={styles.generalText}>General introduction</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>

        <View style={styles.pressableView}>
          <View style={styles.heartView}><Pressable style={styles.heartPressable}><Image source={require('../../../images/heart.png')}></Image></Pressable></View>
          <View style={styles.buyView}><Pressable style={styles.buyPressableView}><Text style={styles.buyText}>Buy</Text></Pressable></View>
        </View>

      </View>
    </View>
  );
}

export default Detail

const styles = StyleSheet.create({
  bodyView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F6F6'
  },

  bannerView: {
    width: '100%',
    height: '10%',
    paddingLeft: 20,
    flexDirection: 'row'
  },

  backText: {
    width: 38,
    marginTop: 60,
    fontSize: 20,
    fontWeight: '600'
  },

  imageView: {
    width: '100%',
    height: '40%'
  },

  imageProduct: {
    width: '100%',
    height: '100%'
  },

  scrollView : {
    width: '100%',
    height: 130,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop : 30
  },

  imageBodyView : {
    width: 360,
    height: '100%',
    flexDirection: 'row',
    alignContent: 'center',
  },

  imageDetailView : {
    width: 100,
    height: 100,
    marginLeft: 15,
 
  },

  imageDetail :{
    width: '100%',
    height: '100%',
    borderRadius: 10
  },

  informationView: {
    width: '100%',
    height: '50%',
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: 'white',

  },

  napView: {
    width: '100%',
    flexDirection: 'row',
  },

  nameView: {
    width: '50%',
  },

  priceView: {
    width: '50%',
    alignItems: 'flex-end'
  },

  nameText: {
    fontSize: 25,
    fontWeight: '500',
  },

  priceText: {
    fontSize: 25,
    fontWeight: '500',
    justifyContent: 'flex-end'
  },

  generalText: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: '600'
  },

  descriptionText: {
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 30
  },

  pressableView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20
  },

  heartView: {
    width: '40%',
  },

  buyView: {
    width: '60%',
    alignItems: 'flex-end'
  },

  heartPressable: {
    width: '95%',
    height: 50,
    backgroundColor: "#F6F6F6",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  buyPressableView: {
    width: '95%',
    height: 50,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  buyText: {
    color: 'white',
    fontWeight: '600'
  }

});