import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import styles from '../../App.styles';

export default function EditProfilePage() {
    const navigation = useNavigation();
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software Developer | AI Enthusiast',
        location: 'San Francisco, CA',
        image: 'https://i.pravatar.cc/150'
    });

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfile(prev => ({ ...prev, image: result.assets[0].uri }));
        }
    };

    const handleSave = () => {
        // Here you would typically save the profile data to your backend
        // For now, we'll just go back to the profile page
        navigation.goBack();
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
                    <View style={styles.editProfileContainer}>
                        <Text style={styles.editProfileTitle}>Edit Profile</Text>

                        <View style={styles.editProfileImageContainer}>
                            <Image
                                source={{ uri: profile.image }}
                                style={styles.profileImage}
                            />
                            <TouchableOpacity 
                                style={styles.editProfileImageButton}
                                onPress={pickImage}
                            >
                                <Text style={styles.editProfileImageButtonText}>Change Profile Picture</Text>
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={styles.editProfileInput}
                            value={profile.name}
                            onChangeText={(text) => setProfile(prev => ({ ...prev, name: text }))}
                            placeholder="Name"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        />

                        <TextInput
                            style={styles.editProfileInput}
                            value={profile.email}
                            onChangeText={(text) => setProfile(prev => ({ ...prev, email: text }))}
                            placeholder="Email"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            keyboardType="email-address"
                        />

                        <TextInput
                            style={[styles.editProfileInput, styles.editProfileBioInput]}
                            value={profile.bio}
                            onChangeText={(text) => setProfile(prev => ({ ...prev, bio: text }))}
                            placeholder="Bio"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            multiline
                        />

                        <TextInput
                            style={styles.editProfileInput}
                            value={profile.location}
                            onChangeText={(text) => setProfile(prev => ({ ...prev, location: text }))}
                            placeholder="Location"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        />

                        <TouchableOpacity 
                            style={styles.saveButton}
                            onPress={handleSave}
                        >
                            <Text style={styles.saveButtonText}>Save Changes</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </ImageBackground>
    );
} 