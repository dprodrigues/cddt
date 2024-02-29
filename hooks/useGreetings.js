'use client';

import { useState, useEffect } from 'react';

export default function useGreetings() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const now = new Date().getHours();

    if (now >= 6 && now < 12) {
      setMessage('Good morning!');
      return;
    }

    if (now >= 12 && now < 18) {
      setMessage('Good afternoon!');
      return;
    }

    setMessage('Good evening!');
  }, []);

  return message;
}
