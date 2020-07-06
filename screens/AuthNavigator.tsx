import { createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './Loading';
import SignUpScreen from './SignUp';
import SignInScreen from './SignIn';

const AuthNavigator = createSwitchNavigator(
  {
    Loading: { screen: LoadingScreen },
    SignUp: { screen: SignUpScreen },
    SignIn: { screen: SignInScreen }
  },
  { initialRouteName: 'SignIn' }
);

export default AuthNavigator;
