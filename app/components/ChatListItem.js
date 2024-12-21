import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { primaryColor, mainBlue } from '../../App.styles';

const ChatListItem = ({ chat, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={{
                flexDirection: 'row',
                padding: 15,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                marginHorizontal: 10,
                marginVertical: 7,
                borderRadius: 15,
                alignItems: 'center',
            }}
        >
            <Image
                source={{ uri: chat.avatar }}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 15,
                }}
            />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: primaryColor, fontSize: 16, fontFamily: 'Font2' }}>
                        {chat.name}
                    </Text>
                    <Text style={{ color: mainBlue, fontSize: 12, fontFamily: 'Font1' }}>
                        {chat.time}
                    </Text>
                </View>
                <Text
                    numberOfLines={1}
                    style={{
                        color: primaryColor,
                        opacity: 0.7,
                        marginTop: 3,
                        fontFamily: 'Font1'
                    }}
                >
                    {chat.lastMessage}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ChatListItem;