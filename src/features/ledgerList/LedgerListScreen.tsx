import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PLACEHOLDER_LEDGER_ID = 'placeholder';

export default function LedgerListScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Coinsplit</Text>
        <Text style={styles.title}>Ledgers</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>No ledgers yet</Text>
          <Text style={styles.cardBody}>
            Create a ledger to start tracking participants, expenses, and transfers for your next shared event.
          </Text>
        </View>

        <TouchableOpacity style={styles.placeholderRow} onPress={() => router.push(`/ledger/${PLACEHOLDER_LEDGER_ID}`)}>
          <Text style={styles.placeholderRowTitle}>Summer Trip</Text>
          <Text style={styles.placeholderRowChevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/ledger/new')}>
          <Text style={styles.primaryButtonLabel}>New Ledger</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 16,
  },
  eyebrow: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#64748b',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
  },
  card: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 16,
    lineHeight: 24,
    color: '#475569',
  },
  placeholderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  placeholderRowTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0f172a',
  },
  placeholderRowChevron: {
    fontSize: 22,
    color: '#94a3b8',
  },
  primaryButton: {
    backgroundColor: '#0f172a',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
