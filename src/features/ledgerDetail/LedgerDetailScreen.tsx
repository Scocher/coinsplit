import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Title from '../../components/Title';
import { colors, spacing } from '../../theme';

export default function LedgerDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: spacing.xl,
          paddingVertical: spacing.xxl,
          gap: spacing.sm,
        }}
      >
        <Label>{t('ledgerDetail.label')}</Label>
        <Title style={{ marginBottom: spacing.xs }}>Summer Trip</Title>

        <Button label={t('ledgerDetail.newExpense')} onPress={() => router.push(`/ledger/${id}/expense/new`)} />
        <Button label={t('ledgerDetail.newTransfer')} onPress={() => router.push(`/ledger/${id}/transfer/new`)} />
        <Button
          label={t('ledgerDetail.settlement')}
          variant="secondary"
          onPress={() => router.push(`/ledger/${id}/settlement`)}
        />
        <Button
          label={t('ledgerDetail.editLedger')}
          variant="secondary"
          onPress={() => router.push(`/ledger/${id}/edit`)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
