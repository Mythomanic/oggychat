import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { primaryColor, } from '../../App.styles'
import styles from '../../App.styles'
import { Checkbox } from 'react-native-ui-lib'
import { useNavigation } from 'expo-router'
import { useToast } from 'native-base'
export default function LoginPage() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    const toast = useToast();

    const handleLogin = async () => {
        navigation.navigate('home/homepage');
    }

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1732861448032-fc1b14365bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={styles.loginPageBackgroundImage}
        >
            <View style={styles.loginPageBlurContainer}>
                <LinearGradient
                    colors={['rgba(16, 20, 40, 0.6)', 'rgba(32, 40, 80, 0.2)']}
                    style={styles.loginPageGradient}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.keyboardAvoidingView}
                    >
                        <ScrollView
                            contentContainerStyle={styles.scrollViewContent}
                            keyboardShouldPersistTaps="handled"
                        >
                            <View style={styles.loginPageContainer}>
                                <Text style={styles.loginPageTitle}>Giriş Yap</Text>

                                <View style={styles.loginPageInputContainer}>
                                    <TextInput
                                        style={styles.loginPageInput}
                                        placeholder="E-posta"
                                        placeholderTextColor="#dadada"
                                        keyboardType="email-address"
                                        value={email}
                                        onChangeText={setEmail}
                                        autoCapitalize="none"
                                    />
                                </View>

                                <View style={styles.loginPageInputContainer}>
                                    <TextInput
                                        style={styles.loginPageInput}
                                        placeholder="Şifre"
                                        placeholderTextColor="#dadada"
                                        secureTextEntry
                                        value={password}
                                        onChangeText={setPassword}
                                        autoCapitalize="none"
                                    />
                                </View>

                                <TouchableOpacity onPress={handleLogin} activeOpacity={0.7} style={styles.loginPageButton}>
                                    <Text style={styles.loginPageButtonText}>Giriş Yap</Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 20 }}>

                                    <Checkbox
                                        labelStyle={{ color: primaryColor, marginLeft: 0 }}
                                        value={rememberMe}
                                        onValueChange={setRememberMe}
                                        color={primaryColor}
                                        label="Beni Hatırla"
                                        style={{ marginRight: 5 }}
                                    />


                                    <TouchableOpacity onPress={() => navigation.navigate('login/forgotPasswordEmail')} activeOpacity={0.7}>
                                        <Text style={styles.loginPageForgotPassword}>Şifremi unuttum</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={styles.loginPageSignupContainer}>
                                    <Text style={styles.loginPageSignupText}>Hesabınız yok mu? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('login/signupPage')}>
                                        <Text style={styles.loginPageSignupLink}>Kayıt Olun</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </View>
        </ImageBackground>
    )
}