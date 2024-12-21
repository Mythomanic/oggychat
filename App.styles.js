import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");
const primaryColor = "#20B2AA"
const secondaryColor = "#FFA07A"
const tertiaryColor = "#20B2AA"
const backgroundColor1 = "#D2B48C"
const backgroundColor2 = "#F5DEB3"

const gradientStart = "#DAA520"
const gradientMiddle1 = "#D2B48C"
const gradientMiddle2 = "#FFD700"
const gradientMiddle3 = "#FFA07A"
const gradientEnd = "#F5DEB3"
const mainBlue = "#20B2AA99"
const mainBlue2 = "#20B2AA"

export const mainPurple = "#202050";
export const mainPurple2 = "#324080";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },

    gradientBackground: {
        flex: 1,
    },

    loginPageBackgroundImage: {
        height: height,
        resizeMode: 'cover',
    },
    loginPageBlurContainer: {
        flex: 1,
    },
    loginPageGradient: {
        flex: 1,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    loginPageContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    loginPageTitle: {
        fontSize: 32,
        fontFamily: 'Font3',
        color: '#FFFFFF',
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    loginPageSubtitle: {
        fontSize: 16,
        color: '#E0E0E0',
        marginBottom: 32,
        textAlign: 'center',
        fontFamily: 'Font1',
    },
    loginPageInputContainer: {
        width: '100%',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
    },
    loginPageInput: {
        width: '100%',
        padding: 16,
        fontSize: 16,
        color: '#fff',
    },
    loginPageButton: {
        width: '100%',
        backgroundColor: primaryColor,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    loginPageButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginPageForgotPassword: {
        color: primaryColor,
    },
    loginPageSignupContainer: {
        flexDirection: 'row',
        marginTop: 32,
    },
    loginPageSignupText: {
        color: '#E0E0E0',
    },
    loginPageSignupLink: {
        color: primaryColor,
        fontWeight: 'bold',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000088',
    },
    modalContent: {
        backgroundColor: 'rgba(32, 40, 80, 0.9)',
        borderRadius: 20,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    modalScrollView: {
        width: '100%',
        marginBottom: 20,
    },
    modalText: {
        fontSize: 16,
        color: primaryColor,
        lineHeight: 24,
    },
    modalCloseButton: {
        backgroundColor: gradientStart,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    modalCloseButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    codeInput: {
        width: 40,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'center',
    },
    backButton: {
        marginTop: 20,
    },
    backButtonText: {
        color: primaryColor,
        fontSize: 16,
    },

    HomepageMainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    HomepageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },


    HomePageContainer: {
        flex: 1,
    },
    HomePageScrollContent: {
        flexGrow: 1,
        paddingBottom: 100, // Add padding to account for the toolbar
    },
    HomePageHeader: {
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 20,
    },
    HomePageTitle: {
        fontSize: 32,
        color: primaryColor,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontFamily: 'Font3',
    },
    HomePageSubtitle: {
        fontSize: 18,
        color: secondaryColor,
        marginTop: 5,
        fontFamily: 'Font3',
    },
    HomePageCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    HomePageCard: {
        width: '46%',
        aspectRatio: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    HomePageCardText: {
        color: primaryColor,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Font2',
        fontSize: 15,
    },
    HomePageFeaturedSection: {
        paddingHorizontal: 20,
    },
    HomePageFeaturedTitle: {
        fontSize: 23,
        color: tertiaryColor,
        marginBottom: 10,
        fontFamily: 'Font3',
    },
    HomePageFeaturedContent: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
    },
    HomePageFeaturedText: {
        color: primaryColor,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Font1',
        marginTop: 10,
        textAlign: 'justify',
    },
    MainToolbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: backgroundColor1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        columnGap: 10,
        width: "100%",
    },
    MainToolbarToolbarItem: {
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        flex: 1,
        paddingHorizontal: 10,
    },
    MainToolbarText: {
        color: primaryColor,
        fontSize: 12,
        marginTop: 4,
    },



    // Chat Styles
    chatContainer: {
        flex: 1,
        paddingBottom: 80,
    },
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        maxWidth: '80%',
        borderRadius: 15,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: mainBlue,
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    messageText: {
        color: primaryColor,
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: backgroundColor1,
        width: "100%",
        height: 60,
    },
    input: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: primaryColor,
        marginRight: 10,
        width: "100%"
    },
    sendButton: {
        backgroundColor: mainBlue,
        borderRadius: 20,
        padding: 10,
    },

    toolbarItem: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center', borderRadius: 10,
        padding: 10,
        gap: 5
    },

    toolbarItemText: {
        fontSize: 10,
        color: 'white',
        fontFamily: "Font1"
    },

    // Profile Page Styles
    profileContainer: {
        flex: 1,
        padding: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginTop: 40,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: primaryColor,
    },
    profileName: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: 'Font3',
        marginTop: 15,
    },
    profileBio: {
        fontSize: 16,
        color: secondaryColor,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'Font1',
    },
    editProfileButton: {
        backgroundColor: primaryColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 15,
    },
    editProfileButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Font2',
    },
    profileInfo: {
        marginTop: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
    },
    infoItem: {
        marginBottom: 15,
    },
    infoLabel: {
        color: secondaryColor,
        fontSize: 14,
        fontFamily: 'Font1',
        marginBottom: 5,
    },
    infoValue: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Font2',
    },

    // Edit Profile Page Styles
    editProfileContainer: {
        flex: 1,
        padding: 20,
    },
    editProfileTitle: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: 'Font3',
        marginBottom: 20,
        textAlign: 'center',
    },
    editProfileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    editProfileImageButton: {
        marginTop: 10,
    },
    editProfileImageButtonText: {
        color: primaryColor,
        fontSize: 14,
        fontFamily: 'Font1',
    },
    editProfileInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        padding: 15,
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Font1',
        marginBottom: 15,
    },
    editProfileBioInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: primaryColor,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Font2',
    },

    discoverContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
    },
    discoverTitle: {
        fontSize: 32,
        color: primaryColor,
        fontFamily: 'Font3',
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 50,
        color: '#FFFFFF',
        fontFamily: 'Font1',
        fontSize: 16,
    },
    userList: {
        paddingBottom: 100,
    },
    discoverUserCard: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    discoverUserAvatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: mainBlue,
    },
    discoverUserInfo: {
        flex: 1,
        marginLeft: 15,
    },
    discoverUserName: {
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Font2',
    },
    discoverUserUsername: {
        fontSize: 14,
        color: primaryColor,
        fontFamily: 'Font1',
        marginTop: 2,
    },
    discoverUserBio: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Font1',
        marginTop: 5,
    },

    userProfileContainer: {
        flex: 1,
        padding: 20,
    },

    userProfileInfo: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
        marginTop: 20,
    },

    userProfileBackButton: {
        position: 'absolute',
        top: 40,
        left: 5,
        zIndex: 1,
    },
    userProfileHeader: {
        alignItems: 'center',
        marginTop: 80,
    },
    userProfileImage: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 4,
        borderColor: primaryColor,
    },
    userProfileName: {
        fontSize: 28,
        color: '#FFFFFF',
        fontFamily: 'Font3',
        marginTop: 15,
    },
    userProfileUsername: {
        fontSize: 18,
        color: primaryColor,
        fontFamily: 'Font1',
        marginTop: 5,
    },
    userProfileBio: {
        fontSize: 16,
        color: secondaryColor,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Font1',
        paddingHorizontal: 20,
    },
    followButton: {
        backgroundColor: primaryColor,
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 25,
        marginTop: 20,
        minHeight: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    followingButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: primaryColor,
    },
    followButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Font2',
    },
    followingButtonText: {
        color: primaryColor,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25,
        paddingHorizontal: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'Font3',
    },
    statLabel: {
        fontSize: 14,
        color: secondaryColor,
        fontFamily: 'Font1',
        marginTop: 5,
    },

    chatHeader: {
        width: "100%",
        backgroundColor: '#1c273b',
        flexDirection: "row",
        alignItems: 'center',
        padding: 15,
        position: 'absolute',
        top: 0,
        zIndex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#1c273b',
    },
    chatUserInfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        gap: 10,
    },
    chatUserAvatar: {
        width: 45,
        height: 45,
        borderRadius: 23,
        borderWidth: 2,
        borderColor: primaryColor,
        marginLeft: 12,
    },
    chatUserName: {
        fontSize: 18,
        fontFamily: "Font2",
        color: '#FFFFFF',
    },
    chatUserStatus: {
        fontSize: 14,
        fontFamily: "Font1",
        color: primaryColor,
        marginTop: 2,
    },
    backButton: {
        padding: 8,
    },
    moreButton: {
        padding: 8,
    },

});

export {
    primaryColor, secondaryColor, tertiaryColor, backgroundColor1, backgroundColor2, gradientStart, gradientMiddle1, gradientMiddle2, gradientMiddle3, gradientEnd,
    mainBlue, mainBlue2
};
export default styles;

