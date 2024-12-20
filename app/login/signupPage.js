import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform, Modal, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { gradientMiddle1, gradientStart, mainBlue, primaryColor } from '../../App.styles'
import styles from '../../App.styles'
import { Checkbox } from 'react-native-ui-lib'
import { useNavigation } from 'expo-router'
import { useToast } from 'native-base'
export default function SignupPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const navigation = useNavigation();
    const [showTermsModal, setShowTermsModal] = useState(false);
    const toast = useToast();
    const { width } = Dimensions.get("window")

    const handleConfirm = async () => {
        toast.show({
            title: "Başarılı",
            description: "Kayıt Başarılı!",
            bgColor: "#008200",
            color: "#fff",
            placement: "top",
            width: width,
        });
        navigation.navigate("login/loginPage")
    };

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1732861448032-fc1b14365bff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={styles.loginPageBackgroundImage}
        >
            <View style={styles.loginPageBlurContainer}>
                <LinearGradient
                    colors={['rgba(16, 20, 40, 0.8)', 'rgba(32, 40, 80, 0.2)']}
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
                                <Text style={styles.loginPageTitle}>Kayıt Ol</Text>

                                <View style={styles.loginPageInputContainer}>
                                    <TextInput
                                        style={styles.loginPageInput}
                                        placeholder="Adınız"
                                        placeholderTextColor="#dadada"
                                        value={name}
                                        onChangeText={setName}
                                        autoCapitalize="words"
                                    />
                                </View>

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

                                <View style={styles.loginPageInputContainer}>
                                    <TextInput
                                        style={styles.loginPageInput}
                                        placeholder="Şifreyi Onayla"
                                        placeholderTextColor="#dadada"
                                        secureTextEntry
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        autoCapitalize="none"
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20 }}>
                                    <Checkbox
                                        labelStyle={{ color: "#B0C4DE", marginLeft: 0 }}
                                        value={agreeTerms}
                                        onValueChange={setAgreeTerms}
                                        color={mainBlue}
                                        style={{ marginRight: 5 }}
                                    />

                                    <TouchableOpacity onPress={() => { setShowTermsModal(true) }}>
                                        <Text style={{ color: primaryColor, fontSize: 13, fontFamily: "Font1" }}><Text style={{ color: mainBlue }}>Kullanım şartları</Text>'nı kabul ediyorum</Text>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity onPress={handleConfirm} activeOpacity={0.7} style={styles.loginPageButton}>
                                    <Text style={styles.loginPageButtonText}>Kayıt Ol</Text>
                                </TouchableOpacity>

                                <View style={styles.loginPageSignupContainer}>
                                    <Text style={styles.loginPageSignupText}>Zaten hesabınız var mı? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('login/loginPage')}>
                                        <Text style={styles.loginPageSignupLink}>Giriş Yapın</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </View>

            <Modal
                visible={showTermsModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => { setShowTermsModal(false) }}
            >
                <View style={[styles.modalContainer, {}]}>
                    <TouchableOpacity style={{ flex: 1, width: "100%" }} onPress={() => setShowTermsModal(false)} />

                    <LinearGradient
                        colors={[gradientStart, gradientMiddle1]}
                        style={[styles.modalContent, { maxHeight: "85%" }]}
                    >
                        <Text style={styles.modalTitle}>Kullanım Şartları</Text>
                        <ScrollView style={styles.modalScrollView}>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nisl vel pretium lectus quam id leo in vitae turpis. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Sit amet cursus sit amet dictum sit amet justo donec.

                                Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nisl vel pretium lectus quam id leo in vitae turpis. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Sit amet cursus sit amet dictum sit amet justo donec.

                                Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nisl vel pretium lectus quam id leo in vitae turpis. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Sit amet cursus sit amet dictum sit amet justo donec.
                            </Text>
                        </ScrollView>
                        <TouchableOpacity
                            style={styles.modalCloseButton}
                            onPress={() => setShowTermsModal(false)}
                        >
                            <Text style={styles.modalCloseButtonText}>Kapat</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TouchableOpacity style={{ flex: 1, width: "100%" }} onPress={() => setShowTermsModal(false)} />
                </View>
            </Modal>

        </ImageBackground>
    )
}