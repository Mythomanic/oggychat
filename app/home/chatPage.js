import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import ChatBubble from '../components/ChatBubble';
import styles, { primaryColor } from '../../App.styles';

const mockMessages = [
    {
        id: '1',
        text: 'Hey, how are you?',
        time: '10:30 AM',
        isUser: false,
    },
    {
        id: '2',
        text: 'I\'m good, thanks! How about you?',
        time: '10:31 AM',
        isUser: true,
    },
];

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(mockMessages);

    const sendMessage = () => {
        if (message.trim()) {
            setMessages([
                ...messages,
                {
                    id: Date.now().toString(),
                    text: message,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isUser: true,
                },
            ]);
            setMessage('');
        }
    };

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1732861448032-fc1b14365bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={[styles.loginPageBackgroundImage, { flex: 1 }]}
        >
            <View style={[styles.loginPageBlurContainer, { height: "100%" }]}>
                <LinearGradient
                    colors={['rgba(16, 20, 40, 0.8)', 'rgba(32, 40, 80, 0.6)']}
                    style={[styles.loginPageGradient, { height: "100%" }]}
                >

                    <FlatList
                        data={messages}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ChatBubble message={item} isUser={item.isUser} />}
                        contentContainerStyle={{ paddingTop: 60, paddingBottom: 20 }}
                    />

                    <View style={[styles.inputContainer, { backgroundColor: 'rgba(255, 255, 255, 0.1)' }]}>
                        <TextInput
                            style={[styles.input, { backgroundColor: 'rgba(255, 255, 255, 0.1)' }]}
                            value={message}
                            onChangeText={setMessage}
                            placeholder="Type a message..."
                            placeholderTextColor={primaryColor}
                        />
                        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                            <Ionicons name="send" size={24} color={primaryColor} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </ImageBackground>
    );
}



/* 

import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import ChatBubble from '../components/ChatBubble';
import styles, { primaryColor } from '../../App.styles';
import io from 'socket.io-client'; // Import Socket.IO client

// Update to your local server URL or IP
const SOCKET_SERVER_URL = "http://localhost:3001";

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    // Initialize Socket.IO connection
    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);

        // Listen for messages from the server
        newSocket.on('receive_message', (data) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: Date.now().toString(),
                    text: data.text,
                    time: data.time,
                    isUser: false,
                },
            ]);
        });

        // Cleanup on component unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() && socket) {
            const newMessage = {
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };

            // Send the message to the server
            socket.emit('send_message', newMessage);

            // Add the message to the local state for immediate feedback
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: Date.now().toString(),
                    text: message,
                    time: newMessage.time,
                    isUser: true,
                },
            ]);

            setMessage('');
        }
    };

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1732861448032-fc1b14365bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={[styles.loginPageBackgroundImage, { flex: 1 }]}
        >
            <View style={[styles.loginPageBlurContainer, { height: "100%" }]}>
                <LinearGradient
                    colors={['rgba(16, 20, 40, 0.8)', 'rgba(32, 40, 80, 0.6)']}
                    style={[styles.loginPageGradient, { height: "100%" }]}
                >

                    <FlatList
                        data={messages}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ChatBubble message={item} isUser={item.isUser} />}
                        contentContainerStyle={{ paddingTop: 60, paddingBottom: 20 }}
                    />

                    <View style={[styles.inputContainer, { backgroundColor: 'rgba(255, 255, 255, 0.1)' }]}>
                        <TextInput
                            style={[styles.input, { backgroundColor: 'rgba(255, 255, 255, 0.1)' }]}
                            value={message}
                            onChangeText={setMessage}
                            placeholder="Type a message..."
                            placeholderTextColor={primaryColor}
                        />
                        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                            <Ionicons name="send" size={24} color={primaryColor} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </ImageBackground>
    );
}


*/