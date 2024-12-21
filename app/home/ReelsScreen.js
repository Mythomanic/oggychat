import React, { useState, useRef, useCallback } from 'react';
import { View, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import ReelItem from '../components/ReelItem';
import { primaryColor } from '../../App.styles';
import { useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const { height } = Dimensions.get('window');
const reelsData = [
    {
        id: '1',
        videoUri: require('../../assets/videos/video1.mp4'),
        user: 'User 1',
        description: 'Check out this amazing sunset view from my balcony! The colors are absolutely breathtaking today.'
    },
    {
        id: '2',
        videoUri: require('../../assets/videos/video2.mp4'),
        user: 'User 2',
        description: 'Just finished this incredible workout routine - feeling energized and motivated! Let me know if you want the full routine.'
    },
    {
        id: '3',
        videoUri: require('../../assets/videos/video3.mp4'),
        user: 'User 3',
        description: 'Made this delicious homemade pasta from scratch using my grandmother\'s secret recipe. The fresh herbs really make it special!'
    },
];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function ReelsScreen() {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);
    const scrollY = useSharedValue(0);

    const onViewableItemsChanged = useCallback(({ changed }) => {
        if (changed && changed.length > 0) {
            setCurrentIndex(changed[0].index);
        }
    }, []);

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    const renderItem = useCallback(({ item, index }) => (
        <ReelItem
            item={item}
            isActive={index === currentIndex}
            height={height}
            scrollY={scrollY}
            index={index}
        />
    ), [currentIndex, scrollY]);

    return (
        <GestureHandlerRootView style={styles.container}>
            <AnimatedFlatList
                ref={flatListRef}
                data={reelsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                snapToInterval={height}
                snapToAlignment="start"
                decelerationRate={0.9}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                getItemLayout={(data, index) => ({
                    length: height,
                    offset: height * index,
                    index,
                })}
                initialNumToRender={1}
                maxToRenderPerBatch={2}
                windowSize={3}
            />

            <View style={{ position: "absolute", top: 30, right: 20, zIndex: 1, }}>
                <TouchableOpacity onPress={() => { navigation.navigate("home/homepage") }}>
                    <FontAwesome name="arrow-right" size={28} color={primaryColor} />
                </TouchableOpacity>
            </View>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

