import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExpenseFormScreen() {
  const { expenseId } = useLocalSearchParams<{ id: string; expenseId?: string }>();
  const isEdit = !!expenseId;
  const title = isEdit ? 'Edit Expense' : 'New Expense';

  function handleSave() {
    router.dismiss();
  }

  function handleCancel() {
    router.dismiss();
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
          <Text style={styles.primaryButtonLabel}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleCancel}>
          <Text style={styles.secondaryButtonLabel}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f8fafc' },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 12,
  },
  title: { fontSize: 28, fontWeight: '700', color: '#0f172a', marginBottom: 8 },
  spacer: { flex: 1 },
  primaryButton: {
    backgroundColor: '#0f172a',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonLabel: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  secondaryButton: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  secondaryButtonLabel: { color: '#0f172a', fontSize: 16, fontWeight: '500' },
});
