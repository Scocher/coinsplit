import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LedgerDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Ledger</Text>
        <Text style={styles.title}>Summer Trip</Text>

        <TouchableOpacity style={styles.primaryButton} onPress={() => router.push(`/ledger/${id}/expense/new`)}>
          <Text style={styles.primaryButtonLabel}>New Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={() => router.push(`/ledger/${id}/transfer/new`)}>
          <Text style={styles.primaryButtonLabel}>New Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push(`/ledger/${id}/settlement`)}>
          <Text style={styles.secondaryButtonLabel}>Settlement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push(`/ledger/${id}/edit`)}>
          <Text style={styles.secondaryButtonLabel}>Edit Ledger</Text>
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
  eyebrow: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#64748b',
  },
  title: { fontSize: 32, fontWeight: '700', color: '#0f172a', marginBottom: 8 },
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
