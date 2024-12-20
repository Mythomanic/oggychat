import { showMessage } from 'react-native-flash-message';
import { mainBlue, mainPurple } from '../../App.styles';

export const Toast = (message, type, backgroundColor) => {
    showMessage({
        message: message,
        type: type ? type : "success",
        position: 'top',
        icon: 'auto',
        duration: 2500,
        floating: true,
        style: { backgroundColor: backgroundColor ? backgroundColor : "green" },
        textStyle: { color: 'white', fontFamily: 'Font1' },
        hideOnPress: true,
        animated: true,
    });
};