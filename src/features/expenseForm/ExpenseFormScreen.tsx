import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { colors } from '../../theme';

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
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingVertical: 32, gap: 12 }}>
        <Title style={{ marginBottom: 8 }}>{isEdit ? t('expenseForm.titleEdit') : t('expenseForm.titleNew')}</Title>
        <View style={{ flex: 1 }} />
        <Button label={t('common.save')} onPress={handleSave} />
        <Button label={t('common.cancel')} variant="secondary" onPress={handleCancel} />
      </ScrollView>
    </SafeAreaView>
  );
}
