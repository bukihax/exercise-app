import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

export default function RepetitionExercise({ navigation, route }) {
  const { exercise, exercises } = route.params;
  const [count, setCount] = useState(0);

  const suggested = exercises.find((e) => e.id === exercise.suggestedId);

  const navigateToSuggested = () => {
    const screen =
      suggested.type === 'duration' ? 'DurationExercise' : 'RepetitionExercise';
    navigation.push(screen, { exercise: suggested, exercises });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.count}>Reps: {count}</Text>

      <Button
        title="Add Rep"
        onPress={() => setCount((c) => c + 1)}
        containerStyle={styles.button}
      />
      <Button
        title="Reset"
        onPress={() => setCount(0)}
        containerStyle={styles.button}
        type="outline"
      />

      {suggested && (
        <Button
          title={`Suggested: ${suggested.name}`}
          onPress={navigateToSuggested}
          containerStyle={styles.button}
          color="secondary"
        />
      )}

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
        containerStyle={styles.button}
        type="clear"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  count: {
    fontSize: 48,
    marginBottom: 24,
  },
  button: {
    width: 220,
    marginVertical: 6,
  },
});
