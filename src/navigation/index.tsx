import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import LinkingConfiguration from './NavigationMap';
import RootNavigator from './CoreStack';
import AuthNavigator from './AuthStack';

import { useAppSelector } from '../redux/hooks'
import type { RootState } from '../redux/store';

export default function Navigation() {
  const isLoggedIn = useAppSelector((store: RootState) => store.user.isLoggedIn)

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DarkTheme}>
      {isLoggedIn 
        ?
      <RootNavigator />
        :
      <AuthNavigator />
      }
    </NavigationContainer>
  );
}
