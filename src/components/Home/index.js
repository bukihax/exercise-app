import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import exercises from '../../data/exercises';

function getScreenName(type) {
  return type === 'duration' ? 'DurationExercise' : 'RepetitionExercise';
}

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Exercise Tracker</Text>
      {exercises.map((item) => (
        <Button
          key={item.id}
          title={item.name}
          onPress={() =>
            navigation.navigate(getScreenName(item.type), {
              exercise: item,
              exercises,
            })
          }
          containerStyle={styles.buttonContainer}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 6,
  },
});
