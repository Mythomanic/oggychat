import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets, } from 'react-native-safe-area-context';
import { useCallback, useEffect, useState } from 'react';

import { router, Stack, } from 'expo-router';
import { LogBox } from 'react-native';
import { usePathname } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { setStatusBarBackgroundColor, setStatusBarStyle, setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
import { LocaleConfig } from 'react-native-calendars';
import { primaryColor } from '../App.styles';
import Toolbar from './components/Toolbar';
import FlashMessage from 'react-native-flash-message';

export default function App() {
    const { top, bottom, left, right } = useSafeAreaInsets();
    const pathname = usePathname();
    const isIndexScreen = pathname === '/';

    useEffect(() => {
        setStatusBarBackgroundColor(primaryColor, true);
        setStatusBarStyle("light", true);
        setStatusBarTranslucent(true);
    }, [])

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/static/Montserrat-Regular.ttf'),
        'Font3': require('../assets/fonts/static/Montserrat-Bold.ttf'),
        'Montserrat-Black': require('../assets/fonts/static/Montserrat-Black.ttf'),
        'Montserrat-BlackItalic': require('../assets/fonts/static/Montserrat-BlackItalic.ttf'),
        'Montserrat-BoldItalic': require('../assets/fonts/static/Montserrat-BoldItalic.ttf'),
        'Montserrat-ExtraBold': require('../assets/fonts/static/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraBoldItalic': require('../assets/fonts/static/Montserrat-ExtraBoldItalic.ttf'),
        'Montserrat-ExtraLight': require('../assets/fonts/static/Montserrat-ExtraLight.ttf'),
        'Montserrat-ExtraLightItalic': require('../assets/fonts/static/Montserrat-ExtraLightItalic.ttf'),
        'Montserrat-Italic': require('../assets/fonts/static/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('../assets/fonts/static/Montserrat-Light.ttf'),
        'Montserrat-LightItalic': require('../assets/fonts/static/Montserrat-LightItalic.ttf'),
        'Font1': require('../assets/fonts/static/Montserrat-Medium2.ttf'),
        'Montserrat-MediumItalic': require('../assets/fonts/static/Montserrat-MediumItalic.ttf'),
        'Font2': require('../assets/fonts/static/Montserrat-SemiBold.ttf'),
        'Montserrat-SemiBoldItalic': require('../assets/fonts/static/Montserrat-SemiBoldItalic.ttf'),
        'Montserrat-Thin': require('../assets/fonts/static/Montserrat-Thin.ttf'),
        'Montserrat-ThinItalic': require('../assets/fonts/static/Montserrat-ThinItalic.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // This tells the splash screen to hide immediately
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    LocaleConfig.locales['tr'] = {
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        today: 'Bugün'
    };
    LocaleConfig.defaultLocale = 'tr';

    return (
        <NativeBaseProvider>
            <SafeAreaProvider style={isIndexScreen ? {} : { paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right }}>
                <StatusBar style='light' backgroundColor={primaryColor} />
                <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
                </ Stack>
            </SafeAreaProvider>
            <FlashMessage position="top" />
        </NativeBaseProvider>
    );
}

