import { useState, useEffect } from 'react';

export const UserDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');
  const userLogin = 'hh-haris';

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toISOString()
        .replace('T', ' ')
        .slice(0, 19);
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2 font-primary text-sm">
      <div className="text-muted-foreground">
        Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): {currentDateTime}
      </div>
      <div className="text-muted-foreground">
        Current User's Login: {userLogin}
      </div>
    </div>
  );
};
