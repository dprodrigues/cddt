import { ServerAuthProvider } from '@/contexts/auth/server-provider';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '@/styles/reset.css';
import '@/styles/main.css';

export const metadata = {
  title: 'cddt',
  description: 'ToDo APP',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-color-mode="light" suppressHydrationWarning>
      <body>
        <ServerAuthProvider>
          <Theme accentColor="gray" radius="large">
            <main>{children}</main>
          </Theme>
        </ServerAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
