import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BodyText from '../../components/BodyText';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Title from '../../components/Title';
import { colors, spacing } from '../../theme';

const PLACEHOLDER_LEDGER_ID = 'placeholder';

export default function LedgerListScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: spacing.xl,
          paddingVertical: spacing.xxl,
          gap: spacing.md,
        }}
      >
        <Label>{t('ledgerList.appName')}</Label>
        <Title>{t('ledgerList.title')}</Title>

        <View
          style={{
            borderRadius: 20,
            padding: spacing.lg,
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <BodyText style={{ fontWeight: '600', marginBottom: spacing.xs }}>{t('ledgerList.empty.heading')}</BodyText>
          <BodyText style={{ color: colors.text.secondary, lineHeight: 24 }}>{t('ledgerList.empty.body')}</BodyText>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.surface,
            borderRadius: 14,
            paddingHorizontal: spacing.lg,
            paddingVertical: spacing.md,
            borderWidth: 1,
            borderColor: colors.border,
          }}
          onPress={() => router.push(`/ledger/${PLACEHOLDER_LEDGER_ID}`)}
        >
          <BodyText style={{ fontWeight: '500' }}>Summer Trip</BodyText>
          <BodyText style={{ fontSize: 22, color: colors.text.tertiary }}>›</BodyText>
        </TouchableOpacity>

        <Button
          label={t('ledgerList.newLedger')}
          style={{ marginTop: spacing.xs }}
          onPress={() => router.push('/ledger/new')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
