import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  FlatList,
  Modal,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import {
  Categories,
  Restaurants,
  bookNow,
  category,
  dailySpecial,
  nearDrivers,
  notifications,
  rewards,
} from './home_data';
import { ResturantH } from './home.component/resturant_hori';
import { Banners } from './home.component/banner';
import { ImagesShortViewer } from './home.component/images_short_viewer';
import { ItemInfo } from './home.component/item_info';

if (!ios && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export const RestaurantDetail = ({ navigation, route }) => {
  const restaurant = route.params.item;
  const catRef = useRef(null)
  const { foodCategory } = restaurant;
  const [mainScroll, setMainScroll] = useState(true)
  const [selectCat, setSelectCat] = useState(null);
  const [currentItem, setCurrentItems] = useState([]);
  const [AllItem, setAllItems] = useState([]);


  return (
    <View style={{ flex: 1, backgroundColor: myColors.background }}>
      <ImagesShortViewer images={restaurant.images} />

      {/* Content */}
      <View style={{}}>
        {/* Restuarant Info */}
        <View
          style={{
            // height:'100%',
            //    position:'absolute', left:0,
            backgroundColor: myColors.background,
            marginTop: -myHeight(3.5),
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
              <TouchableOpacity activeOpacity={0.7} onPress={() => null}>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.textCommon,
                    {
                      fontSize: myFontSize.body2,
                      fontFamily: myFonts.heading,
                      color: myColors.primary,
                    },
                  ]}>
                  {`Reviews (${restaurant.noOfRatings})`}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Rate us */}
            <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
              <Text
                numberOfLines={2}
                style={[
                  styles.textCommon,
                  {
                    fontSize: myFontSize.body2,
                    fontFamily: myFonts.heading,
                    color: myColors.primary,
                  },
                ]}>
                {'Contact Us'}
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
        </View>

        <View ref={catRef}>
          <Spacer paddingT={myHeight(3)} />
        </View>
        {/*Text Categories*/}
        <Text
          style={[
            styles.textCommon,
            {
              fontSize: myFontSize.xxBody,
              fontFamily: myFonts.bodyBold,
              paddingHorizontal: myWidth(3),
            },
          ]}>
          Categories
        </Text>

        <Spacer paddingT={myHeight(0.3)} />

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
                  setCurrentItems(null)
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


      <ScrollView
        scrollEnabled
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: myWidth(4)
        }}>
        <View>
          {currentItem ?
            <View>
              {
                currentItem?.map((item, i) => {
                  return (
                    <TouchableOpacity
                      style={{
                        backgroundColor: myColors.background,
                        elevation: 4, marginVertical: myHeight(1.5),
                        borderRadius: myWidth(2)
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
                foodCategory.map((subCat) => {
                  const items = subCat.items
                  return (
                    <>
                      {items?.map((item, i) =>
                        <TouchableOpacity
                          style={{
                            backgroundColor: myColors.background,
                            elevation: 4, marginVertical: myHeight(1.5),
                            borderRadius: myWidth(2)
                          }}
                          key={i} activeOpacity={0.9} onPress={() => null}>

                          <ItemInfo item={item} />


                        </TouchableOpacity>
                      )
                      }
                    </>
                  )


                }

                )
              }
            </View>
          }
        </View>
      </ScrollView>

      {/* Back */}
      <TouchableOpacity
        style={{
          backgroundColor: myColors.background,
          padding: myHeight(1),
          borderRadius: myHeight(5),
          position: 'absolute',
          top: myHeight(4),
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
          top: myHeight(4),
          right: myWidth(4),
        }}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}>
        <Image
          style={{
            width: myHeight(2.6),
            height: myHeight(2.6),
            resizeMode: 'contain',
          }}
          source={require('../assets/home_main/home/search.png')}
        />
      </TouchableOpacity>
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
