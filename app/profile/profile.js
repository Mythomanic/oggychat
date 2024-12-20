import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import styles, { primaryColor, secondaryColor } from '../../App.styles';
import Toolbar from '../components/Toolbar';

export default function ProfilePage() {
    const navigation = useNavigation();
    const [userProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software Developer | AI Enthusiast',
        location: 'San Francisco, CA',
        joinDate: 'January 2024'
    });

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
                    <View style={styles.profileContainer}>
                        <View style={styles.profileHeader}>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150' }}
                                style={styles.profileImage}
                            />
                            <Text style={styles.profileName}>{userProfile.name}</Text>
                            <Text style={styles.profileBio}>{userProfile.bio}</Text>

                            <TouchableOpacity
                                style={styles.editProfileButton}
                                onPress={() => navigation.navigate('profile/editProfile')}
                            >
                                <Text style={styles.editProfileButtonText}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.profileInfo}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Email</Text>
                                <Text style={styles.infoValue}>{userProfile.email}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Location</Text>
                                <Text style={styles.infoValue}>{userProfile.location}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Joined</Text>
                                <Text style={styles.infoValue}>{userProfile.joinDate}</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <Toolbar selectedMenu={4} />
        </ImageBackground>
    );
}