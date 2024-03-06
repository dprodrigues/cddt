import { Heading } from '@radix-ui/themes';
import useGreetings from '@/hooks/useGreetings';

export default function Greetings() {
  const message = useGreetings();

  return (
    <Heading as="h2" mb="8">
      {message}
    </Heading>
  );
}
