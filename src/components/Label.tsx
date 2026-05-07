import { Text, TextProps } from 'react-native';
import { typography } from '../theme';

export default function Label({ style, ...rest }: TextProps) {
  return <Text style={[typography.label, style]} {...rest} />;
}
