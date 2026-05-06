import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function ExpenseFormScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Expense Form</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f8fafc' },
  title: { fontSize: 24, fontWeight: '700', color: '#0f172a', padding: 24 },
});
