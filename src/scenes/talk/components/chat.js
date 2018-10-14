import * as React from "react"
import Twilio from "twilio-video"

const Chat: React.SFC<any> = (props) => {
  Twilio.Video.connect('$TOKEN', {name:'my-new-room'}).then((room:any) => {
    // tslint:disable-next-line:no-console
    console.log('Successfully joined a Room: ', room);
    room.on('participantConnected', (participant:any) => {
      // tslint:disable-next-line:no-console
      console.log('A remote Participant connected: ', participant);
    })
  }, (error:any) => {
      // tslint:disable-next-line:no-console
      console.error('Unable to connect to Room: ' +  error.message);
  });
 return <h1>Hello</h1>;
}



export default Chat;