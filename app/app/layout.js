import { Flex } from '@radix-ui/themes';
import SideBar from '@/components/side-bar';
import { ServerProjectsProvider } from '@/contexts/projects/server-provider';

export default function RootLayout({ children }) {
  return (
    <ServerProjectsProvider>
      <Flex style={{ height: '100vh', width: '100vw' }}>
        <SideBar />

        {children}
      </Flex>
    </ServerProjectsProvider>
  );
}
