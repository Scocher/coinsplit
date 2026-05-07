export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const colors = {
  background: '#ffffff',
  surface: '#f5f5f5',
  border: '#d4d4d4',
  text: {
    primary: '#000000',
    secondary: '#525252',
    tertiary: '#a3a3a3',
    inverse: '#ffffff',
  },
} as const;

export const typography = {
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: colors.text.primary,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    color: colors.text.primary,
  },
  label: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.text.secondary,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
  },
} as const;

export const buttons = {
  primary: {
    container: {
      backgroundColor: '#000000',
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xl,
      borderRadius: 16,
      alignItems: 'center' as const,
    },
    label: {
      fontSize: 16,
      fontWeight: '600' as const,
      color: '#ffffff',
    },
  },
  secondary: {
    container: {
      backgroundColor: '#ffffff',
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xl,
      borderRadius: 16,
      alignItems: 'center' as const,
      borderWidth: 1,
      borderColor: '#000000',
    },
    label: {
      fontSize: 16,
      fontWeight: '500' as const,
      color: '#000000',
    },
  },
} as const;
