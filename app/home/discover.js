
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import styles, { primaryColor, mainBlue } from '../../App.styles';
import Toolbar from '../components/Toolbar';

const mockUsers = [
    {
        id: '1',
        name: 'John Doe',
        username: '@johndoe',
        bio: 'Software Developer | AI Enthusiast',
        avatar: 'https://i.pravatar.cc/150/1'
    },
    {
        id: '2',
        name: 'Jane Smith',
        username: '@janesmith',
        bio: 'Digital Artist | Creative Mind',
        avatar: 'https://i.pravatar.cc/150/2'
    }
];
export default function DiscoverPage() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(mockUsers);
    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = mockUsers.filter(user =>
            user.name.toLowerCase().includes(text.toLowerCase()) ||
            user.username.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredUsers(filtered);
    };
    const renderUserItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('home/userProfile', { userId: item.id })}
            style={styles.discoverUserCard}
        >
            <Image
                source={{ uri: item.avatar }}
                style={styles.discoverUserAvatar}
            />
            <View style={styles.discoverUserInfo}>
                <Text style={styles.discoverUserName}>{item.name}</Text>
                <Text style={styles.discoverUserUsername}>{item.username}</Text>
                <Text style={styles.discoverUserBio} numberOfLines={2}>{item.bio}</Text>
            </View>
        </TouchableOpacity>
    );
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
                    <View style={styles.discoverContainer}>
                        <Text style={styles.discoverTitle}>Kişileri Keşfet</Text>

                        <View style={styles.searchContainer}>
                            <FontAwesome name="search" size={20} color={primaryColor} style={styles.searchIcon} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Kişileri Ara..."
                                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                value={searchQuery}
                                onChangeText={handleSearch}
                            />
                        </View>
                        <FlatList
                            data={filteredUsers}
                            renderItem={renderUserItem}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.userList}
                        />
                    </View>
                </LinearGradient>
            </View>
            <Toolbar selectedMenu={2} />
        </ImageBackground>
    );

}
