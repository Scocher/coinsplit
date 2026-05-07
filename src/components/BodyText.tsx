import { Text, TextProps } from 'react-native';
import { typography } from '../theme';

export default function BodyText({ style, ...rest }: TextProps) {
  return <Text style={[typography.body, style]} {...rest} />;
}
