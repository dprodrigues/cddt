import { Button, Text } from '@radix-ui/themes';

export const SocialButton = ({ label, icon, provider, onLogin }) => {
  return (
    <Button onClick={onLogin(provider)} size="4" variant="outline">
      {icon}

      <Text align="center" size="2" style={{ width: '100%' }}>
        {label}
      </Text>
    </Button>
  );
};
