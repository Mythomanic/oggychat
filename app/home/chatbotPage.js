import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ImageBackground, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import ChatBubble from '../components/ChatBubble';
import styles, { primaryColor } from '../../App.styles';
import { useNavigation } from 'expo-router';
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_CHATBOT_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export default function ChatbotPage() {
    const navigation = useNavigation();
    const [message, setMessage] = useState('');

    const [messages, setMessages] = useState([
        {
            id: '1',
            text: 'Merhaba! Ben sizin yapay zeka asistanınızım. Size bugün nasıl yardımcı olabilirim?',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isUser: false,
        }
    ]);
    const sendMessage = async () => {
        if (message.trim()) {
            // Add user message
            const userMessage = {
                id: Date.now().toString(),
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isUser: true,
            };
            setMessages(prev => [...prev, userMessage]);
            const userInput = `Please respond in Turkish to the following message try to be friendly always use turkish language and try to keep the conversation short and concise also try to answer as a human not as a bot. Also be formal. ${message}`;
            setMessage('');
            try {
                const result = await model.generateContent(userInput);
                const response = await result.response;
                const text = response.text();

                const aiMessage = {
                    id: (Date.now() + 1).toString(),
                    text: text,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isUser: false,
                };
                setMessages(prev => [...prev, aiMessage]);
            } catch (error) {
                console.error('Error getting AI response:', error);
                const errorMessage = {
                    id: (Date.now() + 1).toString(),
                    text: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isUser: false,
                };
                setMessages(prev => [...prev, errorMessage]);
            }
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
                    <View style={styles.chatHeader}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.goBack()}
                        >
                            <FontAwesome name="arrow-left" size={24} color={primaryColor} />
                        </TouchableOpacity>
                        <View style={styles.chatUserInfo}>
                            <Image
                                source={{ uri: "https://media.istockphoto.com/id/1329751110/vector/chatbot-concept-dialogue-help-service.jpg?s=612x612&w=0&k=20&c=5aLsLEghDrDRjZ_bu-kAaSLU5dVv56g688HlCtR_TYA=" }}
                                style={styles.chatUserAvatar}
                            />
                            <View style={styles.chatUserTextContainer}>
                                <Text style={styles.chatUserName}>AI Assistant</Text>
                                <Text style={styles.chatUserStatus}>Her Zaman Çevrimiçi</Text>
                            </View>
                        </View>
                    </View>
                    <FlatList
                        data={messages}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ChatBubble message={item} isUser={item.isUser} />}
                        contentContainerStyle={{ paddingTop: 85, paddingBottom: 20 }}
                    />
                    <View style={[styles.inputContainer, { backgroundColor: 'rgba(255, 255, 255, 0.1)' }]}>
                        <TextInput
                            style={[styles.input, { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: "white" }]}
                            value={message}
                            onChangeText={setMessage}
                            placeholder="Bir mesaj yazın..."
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