import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import RepetitionExercise from './src/components/RepetitionExercise';
import DurationExercise from './src/components/DurationExercise';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['https://bukihax.github.io', 'http://localhost'],
  config: {
    screens: {
      Home: '',
      RepetitionExercise: 'repetition',
      DurationExercise: 'duration',
    },
  },
};

class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error: error.message };
  }
  render() {
    if (this.state.error) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Something went wrong</Text>
          <Text style={{ color: 'red' }}>{this.state.error}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer linking={linking}>
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
    </ErrorBoundary>
  );
}
