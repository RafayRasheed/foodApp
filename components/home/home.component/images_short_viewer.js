import React, { useEffect, useState,useContext } from 'react'
import { Image, View , Dimensions, Animated, StyleSheet, Platform, StatusBar, SafeAreaView, Text, Modal, TouchableOpacity, ScrollView} from 'react-native'
// import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { myColors } from '../../../ultils/myColors';
import { myHeight, myWidth } from '../../common';

const wid= Dimensions.get('window').width;


export const ImagesShortViewer =({navigate, images})=>{
    const i = 0
    const [index, setIndex]= useState(i)
    // const [ratio, setRatio] = useState(1)
    const image = images[index]
    // const ratio=1
    const imgLength = images.length
    const [animationX, setAnimationX]= useState(new Animated.Value(0));
    // const [showChange, setShowChange ] = useState(true)
    // const [toFalse, setToFalse ] = useState(true)
    // setRatio(Image.resolveAssetSource(image).height/Image.resolveAssetSource(image).width)

    function handlePressIn(){
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
    const ShortImage=({image, i})=>(
        <TouchableOpacity activeOpacity={0.6} key={i} onPress={()=>setIndex(i)}
            style={[styles.shortImage,{borderColor:i==index?myColors.primaryT:myColors.background,  borderWidth:i==index?myHeight(0.2): myWidth(0.2)}]}>
            <Image  
                key={i} resizeMode="cover"
                style={{width:35, height:35,}}
                source= {image}/>
        </TouchableOpacity>
    )

        
    
    
    function onForward(){
        if(index <imgLength-1){
            Animated.timing(animationX, {
                toValue: -500,
                duration: 100,
                useNativeDriver: true,
            }).start();

            setTimeout(()=>{
                setIndex(index+1)
                setAnimationX(new Animated.Value(500))
    
            },50)
        }
    }

    function onBack(){
        if(index>0){
            Animated.timing(animationX, {
                toValue: 500,
                duration: 100,
                useNativeDriver: true,
            }).start();

            setTimeout(()=>{
                setIndex(index-1)
                setAnimationX(new Animated.Value(-500))
            },50)
        }
    }

    // function change(){
    //     if(toFalse){
    //         setShowChange(!showChange)
    //         return
    //     }
    //     setToFalse(true)
    // }

    return(
        <View style={styles.container}>
            {/* <StatusBar  barStyle ="light-content" backgroundColor = {colors.black} /> */}

            {/* Forward */}
            {/* {imgLength>1  && (
                <View style={[styles.containerChangeImage, styles.containerChangeLeft]}>
                    <Ionicons 
                        style={{paddingVertical: 25, opacity: index==0? 0.3: 1}} 
                        name={"ios-chevron-back-sharp"} size={35} color="#fff" onPress={onBack}/>
                </View>)
            } */}


            {/* Previous */}
            {/* {imgLength>1  && (<View style={[styles.containerChangeImage, styles.containerChangeRight]}>
                <Ionicons 
                    style={{paddingVertical: 25,opacity: index==imgLength-1? 0.3: 1}} 
                    name={"ios-chevron-forward-sharp"} size={35} color="#fff" onPress={onForward} 
                />
                </View>)
            } */}


            {/* Back */}
            {/* {showChange && (
                <View style={styles.topBar}>
                <Ionicons name={"arrow-back"} size={30} color="#fff" onPress={()=>navigation.goBack()}/>
                {imgLength>1 && (<View style={{flexDirection: 'row'}}>
                    <Text style={{color: colors.dark3, fontSize: 25, alignSelf: 'center' }}>{index+1}/{imgLength}</Text>
                </View>)}
                <Ionicons name={"share-social"} size={25} color="#fff" />
                </View>
                )
            } */}
            
                   
                    
            <View style={{justifyContent: 'center', backgroundColor:myColors.background}} >
                <Animated.View  style={{transform: [{translateX: animationX}]}}>
                    <TouchableOpacity activeOpacity={0.9} onPress={()=>navigate('ImagesViewer', {images, index})}>
                        <Image onLoadEnd={handlePressIn} 
                            key={index} resizeMode="cover"
                            style={{width:'100%', height:myHeight(30),
                            borderBottomLeftRadius:myWidth(10),
                            borderBottomRightRadius:myWidth(10),
                        }}
                            source= {image}/>
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <View style={{
                width:'100%',height:'100%',
               justifyContent:'center',
               position:'absolute', left:0,
            //    backgroundColor:'#ffffff30'

                }}>
                    {images.map((image, i)=><ShortImage key={i} image={image} i={i}/>)}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
       backgroundColor:myColors.background, 
    },

    topBar:{
        width: wid,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    containerChangeImage: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        position: 'absolute',top:50,
        zIndex:1, alignItems: 'center',
        flexDirection: 'row',
    },

    containerChangeLeft:{
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        left: 0,
    },
    
    containerChangeRight:{
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        right: 0,
    },
    shortImage:{
        width:40, height:40,justifyContent:'center', 
        alignItems:'center',margin:5,borderRadius:5, 
       
    }
})