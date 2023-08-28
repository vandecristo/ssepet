import React, { FC, useEffect, useState } from 'react'
import { SSEPanel } from './SSEPanel';

const sseUrl = 'http://localhost:3000/events';
// /sse-stream

export const Component: FC = () => {
  const [ message, setMessage] = useState<string>('waiting...');
  // const eventSource = new EventSource(sseUrl);

  const sseListen = () => {
    if (typeof(EventSource) !== 'undefined') {
      console.log('Works!')
    } else {
      console.log('Not working')
    }

    // eventSource.onmessage = (event) => {
    //   const eventData = JSON.parse(event.data);
    //   console.log('eventData', eventData);
    //   setMessage(eventData.message)
    // }
  };

  const sseClose = () => {
    // eventSource.close()
  };

  // useEffect(() => {
  //   sseListen();
  //   console.log('21212', 21212);

  //   return sseClose;
  // }, []);

  return (
    <div>
      <div>{message}</div>
      <h3>Docker sse:</h3> 
      <SSEPanel />
    </div>
  )
}
