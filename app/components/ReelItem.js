import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Video } from 'expo-av';
import Animated, {
    useAnimatedStyle,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';
import { primaryColor, secondaryColor } from '../../App.styles';
const { width } = Dimensions.get('window');

export default function ReelItem({ item, isActive, height, scrollY, index }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            videoRef.current?.playAsync();
        } else {
            videoRef.current?.pauseAsync();
        }
    }, [isActive]);

    const inputRange = [(index - 1) * height, index * height, (index + 1) * height];

    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            scrollY.value,
            inputRange,
            [0.8, 1, 0.8],
            Extrapolate.CLAMP
        );

        const opacity = interpolate(
            scrollY.value,
            inputRange,
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale }],
            opacity,
        };
    });

    return (
        <Animated.View style={[styles.container, { height }, animatedStyle]}>
            <Video
                ref={videoRef}
                source={item.videoUri}
                style={styles.video}
                resizeMode="cover"
                isLooping
                shouldPlay={isActive}
            />
            <View style={styles.overlay}>
                <View style={{ flexDirection: "row", alignItems: 'center', gap: 10, }}>
                    <Image
                        source={{ uri: "https://i.pravatar.cc/200" }}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                    />
                    <Text style={styles.username}>{item.user}</Text>

                </View>

                <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
    },
    video: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        padding: 20,
        paddingBottom: 35,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    username: {
        color: primaryColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        color: secondaryColor,
        fontSize: 16,
    },
});
