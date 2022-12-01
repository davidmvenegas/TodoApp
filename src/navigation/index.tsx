import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import LinkingConfiguration from './NavigationMap';
import RootNavigator from './CoreStack';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
