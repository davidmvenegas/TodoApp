import { ComponentProps } from 'react';
import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import Components
import ModalScreen from '../screens/CoreScreens/ModalScreen';
import TabOneScreen from '../screens/CoreScreens/TabOneScreen';
import TabTwoScreen from '../screens/CoreScreens/TabTwoScreen';
// Import Assets
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{ tabBarActiveTintColor: Colors.tint }}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Tab One',
                    tabBarIcon: () => <TabBarIcon name="code" color="white" />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
                            <FontAwesome name="info-circle" size={25} color={Colors.text} style={{ marginRight: 15 }} />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{ title: 'Tab Two', tabBarIcon: () => <TabBarIcon name="code" color="white" /> }}
                />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: ComponentProps<typeof FontAwesome>['name'], color: string }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


export default RootNavigator;