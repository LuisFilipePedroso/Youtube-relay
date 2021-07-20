import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import PostDetails from '../pages/PostDetails';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen key="home" name="Home" component={Home} />
      <Stack.Screen key="postDetails" name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
