import { useEffect, useState } from 'react';

/**
 - Persist entries per user in LocalStorage using key: entries_<userKey>
 - userKey preference: user.email -> user.id -> 'guest'
 */
export const useUserEntries = (user) => {
  const userKey = user?.email || user?.id || 'guest';

  const [entries, setEntries] = useState(() => {
    try {
      const raw = window.localStorage.getItem(`entries_${userKey}`);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed to load entries from LocalStorage', e);
      return [];
    }
  });

  // When user changes on (logout/login), reload that user's entries
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(`entries_${userKey}`);
      setEntries(raw ? JSON.parse(raw) : []);
    } catch (e) {
      console.error('Failed to switch user entries', e);
      setEntries([]);
    }
  }, [userKey]);

  // Persist on every change
  useEffect(() => {
    try {
      window.localStorage.setItem(`entries_${userKey}`, JSON.stringify(entries));
    } catch (e) {
      console.error('Failed to save entries to LocalStorage', e);
    }
  }, [entries, userKey]);

  return [entries, setEntries];
};
