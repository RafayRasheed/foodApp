import React, { useEffect, useRef, useState } from 'react';
import {
  ScrollView, StyleSheet, TouchableOpacity, Image,
  View, Text, StatusBar,
  Linking, Platform, ImageBackground,
} from 'react-native';
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { ItemInfo } from './home.component/item_info';

export const RestaurantDetail = ({ navigation, route }) => {
  const restaurant = route.params.item;
  const catRef = useRef(null)
  const { foodCategory } = restaurant;
  const [mainScroll, setMainScroll] = useState(true)
  const [selectCat, setSelectCat] = useState(null);
  const [currentItem, setCurrentItems] = useState([]);
  const [AllItem, setAllItems] = useState([]);
  function doThos() {

    const url = "https://www.google.com/maps/place/Millennium+Mall/@24.9094679,67.0433966,13z/data=!3m1!5s0x3eb339223612bfc7:0xc67329732f68fc6e!4m6!3m5!1s0x3eb33922488f3725:0x3bfde63eb356ebc0!8m2!3d24.901187!4d67.1155004!16s%2Fg%2F11bv1cb635?entry=ttu";

    // var splitUrl = url.split('!3d');
    // var latLong = splitUrl[splitUrl.length - 1].split('!4d');
    // var longitude;

    // var regex = new RegExp('@(.*),(.*),');                         
    // var lat_long_match = url.match(regex);
    // var lat = lat_long_match[1];
    // var long = lat_long_match[2];
    var longlat = /\/\@(.*),(.*),/.exec(url);

    const long = longlat[1]; //63.6741553
    const lat = longlat[2]; //-164.9587713
    console.log(lat, long)
    const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    const url2 = `https://www.google.com/maps/dir/?api=1&destination=${long},${lat}&dir_action=navigate`;

    Linking.openURL(url2);
  }

  return (
    <View style={{ flex: 1, backgroundColor: myColors.background }}>
      <ImageBackground style={{
        width: '100%',
        height: myHeight(30),

        borderBottomLeftRadius: myWidth(4),
        borderBottomRightRadius: myWidth(4),
        overflow: 'hidden',
      }} source={restaurant?.images[0]}>

        {/* Back */}
        <TouchableOpacity
          style={{
            backgroundColor: myColors.background,
            padding: myHeight(1),
            borderRadius: myHeight(5),
            position: 'absolute',
            top: StatusBar.currentHeight,
            left: myWidth(4),
          }}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: myHeight(2.6),
              height: myHeight(2.6),
              resizeMode: 'contain',
            }}
            source={require('../assets/home_main/home/back.png')}
          />
        </TouchableOpacity>

        {/* Search */}
        <TouchableOpacity
          style={{
            backgroundColor: myColors.background,
            padding: myHeight(1),
            borderRadius: myHeight(5),
            position: 'absolute',
            top: StatusBar.currentHeight,
            right: myWidth(4),
          }}
          activeOpacity={0.8}
          onPress={null}>
          <Image
            style={{
              width: myHeight(2.6),
              height: myHeight(2.6),
              resizeMode: 'contain',
            }}
            source={require('../assets/home_main/home/search.png')}
          />
        </TouchableOpacity>

      </ImageBackground>

      {/* Content */}
      <View style={{}}>
        {/* Restuarant Info */}
        <TouchableOpacity activeOpacity={0.96} onPress={() => navigation.navigate('RestaurantMoreDetails', { restaurant: restaurant })}
          style={{
            // height:'100%',
            //    position:'absolute', left:0,
            backgroundColor: myColors.background,
            marginTop: -myHeight(3),
            borderRadius: myHeight(3),
            borderTopStartRadius: myHeight(3),
            borderTopEndRadius: myHeight(3),
            marginHorizontal: myWidth(3.5),
            elevation: 10,
            paddingHorizontal: myWidth(4),

            //    backgroundColor:'#ffffff30'
          }}>
          {/* Icon */}
          <Image
            style={{
              width: myHeight(6.5),
              height: myHeight(6.5),
              resizeMode: 'contain',
              borderRadius: myHeight(6),
              borderWidth: myHeight(0.15),
              marginTop: -myHeight(3),
              borderColor: myColors.primaryT,
              alignSelf: 'center',
            }}
            source={restaurant.icon}
          />
          <Spacer paddingT={myHeight(0.3)} />
          {/* name */}
          <Text
            numberOfLines={2}
            style={[
              styles.textCommon,
              {
                textAlign: 'center',
                fontSize: myFontSize.medium0,
                fontFamily: myFonts.heading,
              },
            ]}>
            {restaurant.name}
          </Text>
          <Spacer paddingT={myHeight(1)} />

          {/* Rating & Rate Us */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}>
            {/* Rating */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* Star */}
              <Image
                style={{
                  width: myHeight(2.1),
                  height: myHeight(2.1),
                  resizeMode: 'contain',
                }}
                source={require('../assets/home_main/home/star.png')}
              />
              <Spacer paddingEnd={myWidth(1.2)} />
              {/* Rating */}
              <Text
                numberOfLines={2}
                style={[
                  styles.textCommon,
                  {
                    fontSize: myFontSize.body2,
                    fontFamily: myFonts.heading,
                    color: myColors.text,
                  },
                ]}>
                {`${restaurant.rating}  `}
              </Text>
              {/* Rate us */}
              <TouchableOpacity activeOpacity={1} onPress={() => null}>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.textCommon,
                    {
                      fontSize: myFontSize.body2,
                      fontFamily: myFonts.heading,
                      color: myColors.textL4,
                    },
                  ]}>
                  {`Reviews (${restaurant.noOfRatings})`}
                </Text>
              </TouchableOpacity>
            </View>

            {/*more */}
            <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
              <Text
                numberOfLines={2}
                style={[
                  styles.textCommon,
                  {
                    fontSize: myFontSize.body2,
                    fontFamily: myFonts.body,
                    color: myColors.text,
                  },
                ]}>
                {'Tap for more info'}
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer paddingT={myHeight(0.8)} />

          {/*Img Loc & Location */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: myHeight(2.5),
                height: myHeight(2.5),
                resizeMode: 'contain',
              }}
              source={require('../assets/home_main/home/loc.png')}
            />
            <Spacer paddingEnd={myWidth(0.8)} />
            <Text
              numberOfLines={2}
              style={[
                styles.textCommon,
                {
                  fontSize: myFontSize.body2,
                  fontFamily: myFonts.bodyBold,
                  color: myColors.text,
                },
              ]}>
              {'item location near bahadurabad'}
            </Text>
          </View>
          <Spacer paddingT={myHeight(2)} />
        </TouchableOpacity>

        <View ref={catRef}>
          <Spacer paddingT={myHeight(1.5)} />
        </View>
        {/*Text Categories*/}
        {/* <Text
          style={[
            styles.textCommon,
            {
              fontSize: myFontSize.xxBody,
              fontFamily: myFonts.bodyBold,
              paddingHorizontal: myWidth(3),
            },
          ]}>
          Categories
        </Text> */}

        {/* <Spacer paddingT={myHeight(0.3)} /> */}

        {/* Food Category */}
        <ScrollView showsVerticalScrollIndicator={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: myWidth(1) }}>

          <View
            style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: myWidth(4) }}>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setSelectCat(null)
                  setCurrentItems([])
                }}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: myHeight(15),
                  backgroundColor: selectCat == null ? myColors.primaryL : myColors.background,
                  // backgroundColor:myColors.primaryL,
                  paddingVertical: myHeight(1.5),
                  paddingHorizontal: myWidth(4),
                  marginEnd: myWidth(2.7),
                  elevation: 8,
                }}>
                <Text
                  style={[
                    styles.textCommon,
                    {
                      fontSize: myFontSize.body2,
                      fontFamily: myFonts.heading,
                    },
                  ]}>
                  {'All'}
                </Text>
                <Spacer paddingEnd={myWidth(2.7)} />
              </TouchableOpacity>
            </View>
            {foodCategory?.map((cat, i) => {
              return (
                <View
                  key={i}
                  style={{ padding: myHeight(1.4), paddingEnd: myWidth(2) }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setSelectCat(i)
                      setCurrentItems(cat.items)
                    }}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: myHeight(15),
                      backgroundColor: selectCat == i ? myColors.primaryL : myColors.background,
                      // backgroundColor:myColors.primaryL,
                      paddingVertical: myHeight(1.5),
                      paddingHorizontal: myWidth(4),
                      elevation: 8,
                    }}>
                    <Text
                      style={[
                        styles.textCommon,
                        {
                          fontSize: myFontSize.body2,
                          fontFamily: myFonts.heading,
                        },
                      ]}>
                      {cat?.name}
                    </Text>
                    <Spacer paddingEnd={myWidth(2.7)} />
                  </TouchableOpacity>
                </View>
              )
            }

            )}

          </View>

        </ScrollView>

      </View>

      {/* HAnde items */}
      <ScrollView
        scrollEnabled
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: myWidth(4)
        }}>
        <View>
          {currentItem.length ?
            <View>
              {
                currentItem?.map((item, i) => {
                  return (
                    <TouchableOpacity
                      style={{


                      }}
                      key={i} activeOpacity={0.9} onPress={() => null}>

                      <ItemInfo item={item} />


                    </TouchableOpacity>
                  )

                })
              }

            </View>
            :
            <View>
              {
                foodCategory.map((subCat, ind) => {
                  const items = subCat.items
                  return (
                    <View key={ind}>
                      {items?.map((item, i) =>
                        <TouchableOpacity
                          style={{

                          }}
                          key={i} activeOpacity={0.9} onPress={() => null}>

                          <ItemInfo item={item} />


                        </TouchableOpacity>
                      )
                      }
                    </View>
                  )


                }

                )
              }
            </View>
          }
        </View>
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.background,
  },

  //Text
  textCommon: {
    color: myColors.text,
    letterSpacing: myLetSpacing.common,
    includeFontPadding: false,
    padding: 0,
  },
});
