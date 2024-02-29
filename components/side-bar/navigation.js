'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUser, FaCog, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { Button, Flex } from '@radix-ui/themes';
import { useFirebaseAuth } from '@/lib/firebase/app';

const items = [
  {
    label: 'Home',
    href: '/app',
    icon: FaHome,
  },
  {
    label: 'Profile',
    href: '/app/profile',
    icon: FaUser,
  },
  {
    label: 'Settings',
    href: '/app/settings',
    icon: FaCog,
  },
];

const buttonProps = {
  variant: 'outline',
  style: {
    justifyContent: 'left',
    boxShadow: 'none',
  },
};

export default function Navigation() {
  const { getFirebaseAuth } = useFirebaseAuth();
  const router = useRouter();

  async function handleSignOut() {
    await signOut(getFirebaseAuth());
    await fetch('/api/logout', { method: 'GET' });
    router.push('/auth/login');
  }

  return (
    <Flex direction="column">
      {items.map(({ label, href, icon: Icon }) => (
        <Button {...buttonProps} key={label} asChild>
          <Link href={href}>
            <Icon />

            <span className="ms-3">{label}</span>
          </Link>
        </Button>
      ))}

      <Button {...buttonProps} onClick={handleSignOut}>
        <FaSignOutAlt />

        <span className="ms-3">Sign out</span>
      </Button>
    </Flex>
  );
}
