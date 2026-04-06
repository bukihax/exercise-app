import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

function pad2(n) {
  return String(n).padStart(2, '0');
}

export default function DurationExercise({ navigation, route }) {
  const { exercise, exercises } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const suggested = exercises.find((e) => e.id === exercise.suggestedId);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const navigateToSuggested = () => {
    const screen =
      suggested.type === 'duration' ? 'DurationExercise' : 'RepetitionExercise';
    navigation.push(screen, { exercise: suggested, exercises });
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.timer}>
        {pad2(minutes)}:{pad2(secs)}
      </Text>

      <Button
        title={running ? 'Stop' : 'Start'}
        onPress={() => setRunning((r) => !r)}
        containerStyle={styles.button}
        color={running ? 'warning' : 'primary'}
      />
      <Button
        title="Reset"
        onPress={handleReset}
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
  timer: {
    fontSize: 64,
    fontFamily: 'monospace',
    marginBottom: 24,
  },
  button: {
    width: 220,
    marginVertical: 6,
  },
});
