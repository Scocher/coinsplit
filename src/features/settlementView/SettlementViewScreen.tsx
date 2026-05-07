import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Title from '../../components/Title';
import { colors } from '../../theme';

export default function SettlementViewScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingVertical: 32, gap: 12 }}>
        <Label>{t('settlementView.label')}</Label>
        <Title style={{ marginBottom: 8 }}>{t('settlementView.title')}</Title>
        <Button label={t('settlementView.backToLedger')} variant="secondary" onPress={() => router.back()} />
      </ScrollView>
    </SafeAreaView>
  );
}
