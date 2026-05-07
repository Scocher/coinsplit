import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { colors, spacing } from '../../theme';

export default function ExpenseFormScreen() {
  const { expenseId } = useLocalSearchParams<{ id: string; expenseId?: string }>();
  const { t } = useTranslation();
  const isEdit = !!expenseId;

  function handleSave() {
    router.dismiss();
  }

  function handleCancel() {
    router.dismiss();
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
          {isEdit ? t('expenseForm.titleEdit') : t('expenseForm.titleNew')}
        </Title>
        <View style={{ flex: 1 }} />
        <Button label={t('common.save')} onPress={handleSave} />
        <Button label={t('common.cancel')} variant="secondary" onPress={handleCancel} />
      </ScrollView>
    </SafeAreaView>
  );
}
