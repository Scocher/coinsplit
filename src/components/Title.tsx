import { Text, TextProps } from 'react-native';
import { typography } from '../theme';

export default function Title({ style, ...rest }: TextProps) {
  return <Text style={[typography.title, style]} {...rest} />;
}
