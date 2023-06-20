import React, {useEffect, useState, useContext} from 'react';
import {
  Image,
  View,
  Dimensions,
  Animated,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import {myColors} from '../../../ultils/myColors';
import {Spacer, myHeight, myWidth} from '../../common';
import {myFontSize, myFonts, myLetSpacing} from '../../../ultils/myFonts';

const wid = Dimensions.get('window').width;

export const ImagesShortViewer = ({navigate, images}) => {
  const i = 0;
  const [index, setIndex] = useState(i);
  // const [ratio, setRatio] = useState(1)
  const image = images[index];

  // const ratio=1
  const imgLength = images.length;
  const [animationX, setAnimationX] = useState(new Animated.Value(0));
  // const [showChange, setShowChange ] = useState(true)
  // const [toFalse, setToFalse ] = useState(true)
  // setRatio(Image.resolveAssetSource(image).height/Image.resolveAssetSource(image).width)

  function handlePressIn() {
    Animated.timing(animationX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  // Image.getSize(image, (width, height) => {
  //     console.log(width, height)

  //     setRatio(height/width)
  // })
  const ShortImage = ({image, i}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      key={i}
      onPress={() => setIndex(i)}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          margin: 3,
          borderRadius: myHeight(0.8),
          overflow: 'hidden',
          borderColor: i == index ? myColors.primaryT : 'transparent',
          // borderColor: i == index && myColors.primaryT : myColors.dot,

          borderWidth: myHeight(0.25),
        },
      ]}>
      <Image
        key={i}
        style={{
          width: myHeight(3.4),
          height: myHeight(3.4),
          resizeMode: 'cover',
        }}
        source={image}
      />
    </TouchableOpacity>
  );

  function onForward() {
    if (index < imgLength - 1) {
      Animated.timing(animationX, {
        toValue: -500,
        duration: 100,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        setIndex(index + 1);
        setAnimationX(new Animated.Value(500));
      }, 50);
    }
  }

  function onBack() {
    if (index > 0) {
      Animated.timing(animationX, {
        toValue: 500,
        duration: 100,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        setIndex(index - 1);
        setAnimationX(new Animated.Value(-500));
      }, 50);
    }
  }

  // function change(){
  //     if(toFalse){
  //         setShowChange(!showChange)
  //         return
  //     }
  //     setToFalse(true)
  // }

  return (
    <>
      <View style={styles.container}>
      
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: myColors.background,
          }}>
          <Animated.View style={{transform: [{translateX: animationX}]}}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigate('ImagesViewer', {images, index})}>
              <Image
                onLoadEnd={handlePressIn}
                key={index}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: myHeight(30),

                  borderBottomLeftRadius: myWidth(3),
                  borderBottomRightRadius: myWidth(3),
                }}
                source={image}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Spacer paddingT={myHeight(0.7)} />

        {/* Short Image & Info */}

        {images.length > 1 && (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              position: 'absolute',
              marginTop: myHeight(3),
              paddingVertical: myHeight(0.5),
              paddingHorizontal: myWidth(3),
              borderRadius: 20,
              backgroundColor: '#ffffff90',
              zIndex: 10,
            }}>
            {images.map((image, i) => (
              <ShortImage key={i} image={image} i={i} />
            ))}
          </View>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.background,
    overflow: 'visible',
  },

  topBar: {
    width: wid,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerChangeImage: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    position: 'absolute',
    top: 50,
    zIndex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  containerChangeLeft: {
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    left: 0,
  },

  containerChangeRight: {
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    right: 0,
  },
  //Text
  textCommon: {
    color: myColors.text,
    letterSpacing: myLetSpacing.common,
    includeFontPadding: false,
    padding: 0,
  },
});
