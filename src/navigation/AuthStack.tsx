import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types';
import LandingScreen from '../screens/AuthScreens/LandingScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Group screenOptions={{ headerShown: false }} >
                <AuthStack.Screen name="Landing" component={LandingScreen} />
                <AuthStack.Screen name="Login" component={LoginScreen} />
                <AuthStack.Screen name="Register" component={RegisterScreen} />
            </AuthStack.Group>
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;