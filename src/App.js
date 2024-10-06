import React, { useEffect, useState } from 'react';
import { MeetingProvider } from '@videosdk.live/react-sdk';

import MeetingView from './MeetingView';
import { generateToken } from './api';

window.onerror = function (message, source, lineno, colno, error) {
  console.error('An unhandled error occurred:', error.message);
  // Prevent the default error handling
  return true;
};

const App = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await generateToken();
        setToken(response);
      } catch (e) {
        console.log(e);
      }
    };
    getToken();
  }, []);

  if (!token) {
    return null;
  }

  return (
    <MeetingProvider
      config={{
        meetingId: 'kgew-ffog-wgxn',
        micEnabled: false,
        webcamEnabled: true,
        name: "Jennifer's Org",
      }}
      token={token}
    >
      <MeetingView />
    </MeetingProvider>
  );
};
export default App;
