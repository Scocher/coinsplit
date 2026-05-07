import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { colors, spacing } from '../../theme';

export default function LedgerFormScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { t } = useTranslation();
  const isEdit = !!id;

  function handleSave() {
    if (router.canDismiss()) {
      router.dismissAll();
    } else {
      router.replace('/');
    }
  }

  function handleCancel() {
    if (router.canDismiss()) {
      router.dismiss();
    } else {
      router.replace('/');
    }
  }

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
        <Title style={{ marginBottom: spacing.xs }}>
          {isEdit ? t('ledgerForm.titleEdit') : t('ledgerForm.titleNew')}
        </Title>
        <View style={{ flex: 1 }} />
        <Button label={t('common.save')} onPress={handleSave} />
        <Button label={t('common.cancel')} variant="secondary" onPress={handleCancel} />
      </ScrollView>
    </SafeAreaView>
  );
}
