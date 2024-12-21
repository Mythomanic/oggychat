import React from 'react';
import { View, Text } from 'react-native';
import { mainBlue, primaryColor } from '../../App.styles';

const ChatBubble = ({ message, isUser }) => {
    return (
        <View
            style={{
                alignSelf: isUser ? 'flex-end' : 'flex-start',
                backgroundColor: isUser ? mainBlue : 'rgba(255, 255, 255, 0.1)',
                padding: 12,
                marginHorizontal: 10,
                marginVertical: 5,
                maxWidth: '80%',
                borderRadius: 15,
                borderTopRightRadius: isUser ? 5 : 15,
                borderTopLeftRadius: isUser ? 15 : 5,
            }}
        >
            <Text style={{ color: primaryColor, fontSize: 16, fontFamily: 'Font1' }}>
                {message.text}
            </Text>
            <Text
                style={{
                    color: primaryColor,
                    fontSize: 12,
                    alignSelf: 'flex-end',
                    marginTop: 5,
                    opacity: 0.7,
                    fontFamily: 'Font1'
                }}
            >
                {message.time}
            </Text>
        </View>
    );
};

export default ChatBubble;