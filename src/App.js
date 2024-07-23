import React from 'react';
import { MeetingProvider } from '@videosdk.live/react-sdk';

import MeetingView from './MeetingView';

const App = () => {
  return (
    <MeetingProvider
      config={{
        meetingId: 'kgew-ffog-wgxn',
        micEnabled: true,
        webcamEnabled: true,
        name: "Jennifer's Org",
      }}
      token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhNWZkN2MwMy1iOGRmLTQ5OGUtYWZmMC0xNmZjZGYxY2UwNzkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyMTcyNDA3MywiZXhwIjoxNzIxODEwNDczfQ.rNzrSZQyuJJRA1pwHNoCWT8yik-WQqKdzGrHoMxTcJw'
    >
      <MeetingView />
    </MeetingProvider>
  );
};
export default App;
