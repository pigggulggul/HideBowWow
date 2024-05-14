/* eslint-disable @typescript-eslint/no-explicit-any */
import Stomp from '@stomp/stompjs';
import { Client } from '@stomp/stompjs';
import { useSelector } from 'react-redux';

let stompClient: Stomp.Client;

export const handshake = (channelIndex: any) => {
  stompClient = new Client({
    brokerURL: `${import.meta.env.VITE_REACT_WEBSOCKET_URL}` + "/ch/" + channelIndex + "/ws",
    // debug: function (str: any) {
    //   console.log(str);
    // },
    reconnectDelay: 5000,
  });

  return stompClient;
};