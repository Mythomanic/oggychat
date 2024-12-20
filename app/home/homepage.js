import React from 'react';
import { View, FlatList, Text, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import ChatListItem from '../components/ChatListItem';
import styles, { gradientStart, gradientMiddle1 } from '../../App.styles';
import Toolbar from '../components/Toolbar';

const mockChats = [
    {
        id: '1',
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        time: '10:30 AM',
        avatar: 'https://i.pravatar.cc/150/10',
    },
    {
        id: '2',
        name: 'Jane Smith',
        lastMessage: 'The meeting is at 2 PM',
        time: '9:45 AM',
        avatar: 'https://i.pravatar.cc/150/11',
    },
    {
        id: '3',
        name: 'Alice Johnson',
        lastMessage: 'Are you coming to the party?',
        time: '8:00 PM',
        avatar: 'https://i.pravatar.cc/150/12',
    },
    {
        id: '4',
        name: 'Bob Brown',
        lastMessage: 'Let\'s meet for lunch',
        time: '12:00 PM',
        avatar: 'https://i.pravatar.cc/150/13',
    },
    {
        id: '5',
        name: 'Charlie Davis',
        lastMessage: 'How was your day?',
        time: '6:00 PM',
        avatar: 'https://i.pravatar.cc/150/14',
    },
    {
        id: '6',
        name: 'David Wilson',
        lastMessage: 'I need your help',
        time: '3:00 PM',
        avatar: 'https://i.pravatar.cc/150/15',
    },
    {
        id: '7',
        name: 'Eve Garcia',
        lastMessage: 'I miss you',
        time: '7:00 PM',
        avatar: 'https://i.pravatar.cc/150/16',
    },
    {
        id: '8',
        name: 'Frank Martinez',
        lastMessage: 'Let\'s go for a walk',
        time: '5:00 PM',
        avatar: 'https://i.pravatar.cc/150/17',
    },
    {
        id: '9',
        name: 'Grace Robinson',
        lastMessage: 'I have a surprise for you',
        time: '4:00 PM',
        avatar: 'https://i.pravatar.cc/150/18',
    },
    {
        id: '10',
        name: 'Henry Young',
        lastMessage: 'I need to talk to you',
        time: '2:00 PM',
        avatar: 'https://i.pravatar.cc/150/19',
    },
];

export default function HomePage() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1732861448032-fc1b14365bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={[styles.loginPageBackgroundImage, { flex: 1, }]}
        >
            <View style={[styles.loginPageBlurContainer, { height: "100%" }]}>
                <LinearGradient
                    colors={['rgba(16, 20, 40, 0.7)', 'rgba(32, 40, 80, 0.9)']}
                    style={[styles.loginPageGradient, { height: "100%" }]}
                >
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }} style={{}}>

                        <View style={{ padding: 15, marginTop: 10 }}>
                            <Text style={styles.HomePageTitle}>Messages</Text>
                        </View>
                        <FlatList
                            data={mockChats}
                            scrollEnabled={false}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={{ flexGrow: 1, marginBottom: 25 }}
                            renderItem={({ item }) => (
                                <ChatListItem
                                    chat={item}
                                    onPress={() => navigation.navigate('home/chatPage', { chat: item })}
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                </LinearGradient>
            </View>
            <Toolbar selectedMenu={1} />
        </ImageBackground>
    );
}