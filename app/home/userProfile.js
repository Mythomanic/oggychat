import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { inearGradient, LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import styles, { primaryColor, secondaryColor, mainBlue } from '../../App.styles';
import Toolbar from '../components/Toolbar';

export default function UserProfilePage() {
    const navigation = useNavigation();
    const params = useLocalSearchParams();
    const [isFollowing, setIsFollowing] = useState(false);

    const [userProfile, setUserProfile] = useState({
        id: params.userId,
        name: 'Jane Smith',
        username: '@janesmith',
        bio: 'Digital Artist | Creative Mind',
        location: 'New York, NY',
        joinDate: 'March 2024',
        followers: 1234,
        following: 567,
        posts: 89,
        avatar: 'https://i.pravatar.cc/150/2',
    });
    const handleFollowPress = () => {
        setIsFollowing(!isFollowing);
    };
    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1732861448032-fc1b14365bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={[styles.loginPageBackgroundImage, { flex: 1 }]}
        >
            <View style={[styles.loginPageBlurContainer, { height: "100%" }]}>
                <LinearGradient
                    colors={['rgba(16, 20, 40, 0.7)', 'rgba(32, 40, 80, 0.9)']}
                    style={[styles.loginPageGradient, { height: "100%" }]}
                >
                    <ScrollView style={styles.userProfileContainer}>
                        <TouchableOpacity
                            style={styles.userProfileBackButton}
                            onPress={() => navigation.goBack()}
                        >
                            <FontAwesome name="arrow-left" size={28} color={primaryColor} />
                        </TouchableOpacity>
                        <View style={styles.userProfileHeader}>
                            <Image
                                source={{ uri: userProfile.avatar }}
                                style={styles.userProfileImage}
                            />
                            <Text style={styles.userProfileName}>{userProfile.name}</Text>
                            <Text style={styles.userProfileUsername}>{userProfile.username}</Text>
                            <Text style={styles.userProfileBio}>{userProfile.bio}</Text>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={[
                                    styles.followButton,
                                    isFollowing && styles.followingButton
                                ]}
                                onPress={handleFollowPress}
                            >
                                <Text style={[
                                    styles.followButtonText,
                                    isFollowing && styles.followingButtonText
                                ]}>
                                    {isFollowing ? 'Following' : 'Follow'}
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.statsContainer}>
                                <View style={styles.statItem}>
                                    <Text style={styles.statNumber}>{userProfile.posts}</Text>
                                    <Text style={styles.statLabel}>Posts</Text>
                                </View>
                                <View style={styles.statItem}>
                                    <Text style={styles.statNumber}>{userProfile.followers}</Text>
                                    <Text style={styles.statLabel}>Followers</Text>
                                </View>
                                <View style={styles.statItem}>
                                    <Text style={styles.statNumber}>{userProfile.following}</Text>
                                    <Text style={styles.statLabel}>Following</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.userProfileInfo}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Location</Text>
                                <Text style={styles.infoValue}>{userProfile.location}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Joined</Text>
                                <Text style={styles.infoValue}>{userProfile.joinDate}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>


                <TouchableOpacity onPress={() => { navigation.navigate("home/chatbotPage") }} activeOpacity={0.6} style={{ position: "absolute", top: 30, right: 20, borderRadius: 100, padding: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: primaryColor }}>
                    <FontAwesome name="comment" size={24} color={"white"} />
                </TouchableOpacity>

            </View>
            <Toolbar selectedMenu={2} />
        </ImageBackground>
    );
}