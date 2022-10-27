import { useEffect } from 'react';
import { addDarkMode, removeDarkMode } from './utils/toggleDarkMode';
import { getDarkInLs } from './utils/localStorageUtil';

function CheckDarkMode() {
  useEffect(() => {
    const isDark = getDarkInLs();
    if (isDark) {
      addDarkMode();
    } else {
      removeDarkMode();
    }
  });
  return <></>;
}

export default CheckDarkMode;
