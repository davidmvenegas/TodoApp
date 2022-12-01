import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { deviceWidth } from '../../constants/Layout'
import MainLogo from '../../assets/images/MAIN_LOGO.png';

function LandingScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.logo_wrap}>
                <Image style={styles.logo} source={MainLogo} />
            </View>
            <View style={styles.description_wrap}>
                <Text style={styles.description_text_1}>Welcome</Text>
                <Text style={styles.description_text_2}>Track your todos and get things done.</Text>
            </View>

            <View style={styles.btn_wrap}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ ...styles.btn, backgroundColor: '#5B616A' }}>
                    <Text style={styles.btn_text}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ ...styles.btn, backgroundColor: '#363537' }}>
                    <Text style={styles.btn_text}> Register </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default  LandingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },
    logo_wrap: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
    },
    description_wrap: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: deviceWidth,
        marginLeft: 80,
    },
    description_text_1: {
        color: 'white',
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 50,
    },
    description_text_2: {
        color: 'white',
        fontSize: 18,
        fontWeight: '200',
        lineHeight: 25,
        marginRight: 20,
    },
    btn_wrap: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 300,
        padding: 17,
        margin: 8,
        borderRadius: 8,
    },
    btn_text: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
        border: '1px solid #fff',
        textAlign: 'center',
    },
});