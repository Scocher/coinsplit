import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function LedgerListScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Coinsplit</Text>
        <Text style={styles.title}>Ledger List</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>No ledgers yet</Text>
          <Text style={styles.cardBody}>
            Create a ledger to start tracking participants, expenses, and
            transfers for your next shared event.
          </Text>
        </View>
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
    justifyContent: 'center',
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
});
