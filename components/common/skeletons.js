import React from "react";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { MyError, Spacer, StatusbarH, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';


export const RestaurantInfoSkeleton = ({ type }) => (
    <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item marginHorizontal={myWidth(4)} borderWidth={2} borderColor={myColors.divider}
            borderRadius={myWidth(3)} overflow='hidden' paddingBottom={myHeight(1.5)} marginVertical={myHeight(1.5)}>

            <SkeletonPlaceholder.Item width={'100%'} height={myHeight(15)} borderRadius={0} />
            <SkeletonPlaceholder.Item paddingHorizontal={myWidth(2)} marginTop={myHeight(1.5)}>
                <SkeletonPlaceholder.Item width={'70%'} height={myHeight(2)} borderRadius={100} />
                <SkeletonPlaceholder.Item width={'100%'} height={myHeight(2)} marginTop={myHeight(1)} borderRadius={100} />
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
)

export const RestaurantInfoSkeletonHHori = ({ type }) => (
    <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item marginHorizontal={myWidth(4)} borderWidth={2} borderColor={myColors.divider}
            borderRadius={myWidth(3)} overflow='hidden' paddingBottom={myHeight(1.5)} marginVertical={myHeight(1.5)}>

            <SkeletonPlaceholder.Item width={'100%'} height={myHeight(15)} borderRadius={0} />
            <SkeletonPlaceholder.Item paddingHorizontal={myWidth(2)} marginTop={myHeight(1.5)}>
                <SkeletonPlaceholder.Item width={'70%'} height={myHeight(2)} borderRadius={100} />
                <SkeletonPlaceholder.Item width={'100%'} height={myHeight(2)} marginTop={myHeight(1)} borderRadius={100} />
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
)