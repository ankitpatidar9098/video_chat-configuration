import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
function Room() {
  const {roomID} = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
     const appID = 1038283829;
     const serverSecret = "e319687f8337012d5b3d67fd4eca3906";
     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "Ankit");
     const zp = ZegoUIKitPrebuilt.create(kitToken);
     zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:`http://localhost3000/room/${roomID}`
           
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  }
  return (
    <div ref={myMeeting}></div>
  )
}
export default Room