import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import RepetitionExercise from './src/components/RepetitionExercise';
import DurationExercise from './src/components/DurationExercise';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Exercise Tracker' }}
        />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepetitionExercise}
          options={({ route }) => ({ title: route.params.exercise.name })}
        />
        <Stack.Screen
          name="DurationExercise"
          component={DurationExercise}
          options={({ route }) => ({ title: route.params.exercise.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
