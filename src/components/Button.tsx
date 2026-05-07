import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { buttons } from '../theme';

type Props = TouchableOpacityProps & {
  label: string;
  variant?: 'primary' | 'secondary';
};

export default function Button({ label, variant = 'primary', style, ...rest }: Props) {
  const styles = buttons[variant];
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
