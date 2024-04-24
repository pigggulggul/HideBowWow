import { Client } from '@stomp/stompjs';
import { Dispatch, SetStateAction, useEffect } from 'react';


interface Prop {

    webSocketId: string;

}

/** 웹소켓 핸드쉐이크 및 수신 정보 처리 담당(채팅 제외)*/
export default function WebSocket(props: Prop) {
    const dispatch = useDispatch();
    //websocket
    //websocketId 받아오기 -> handshake
    useEffect(() => {
        getWebSocketId()
            .then((res) => {
                if (res.status === httpStatusCode.OK) {
                    const id = res.data.webSocketId;
                    console.log('websocketId : ' + id);
                    const client = handshake(id);
                    // console.log('websocketId : ' + id);
                    client.onConnect = () => {
                        //public subscribe
                        client.subscribe('/topic/public', (message) => {
                            const msg = JSON.parse(message.body);
                            // console.log(msg);
                            switch (msg.type) {
                                case 'GET_PUBLIC_EVENT':{}
                        });
                        //private channel 구독
                        client.subscribe(`/topic/private/${id}`, (message) => {
                            const msg = JSON.parse(message.body);
                            // console.log(msg);
                            switch (msg.type) {
                                case 'CHANGE_TITLE':}
                        });
                    };
                    client.activate();

                    props.setWebSocketId(id);
                    props.setWebSocketClient(client);
                }
            })
            .catch((err) => {
                // console.log(err);
            });
    }, []);

    //subscribe후 초기 정보 받아오기
    useEffect(() => {
        if (
            props.client &&
            props.client.connected &&
            props.webSocketId !== ''
        ) {
            //게임 초기정보 받아오기
            props.client.publish({
                destination: `/app/private/${props.webSocketId}`,
                body: JSON.stringify({
                    type: 'GET_TOTAL_INFO',
                    body: {},
                }),
            });
            //뉴스 정보 받아오기
            props.client.publish({
                destination: `/app/private/${props.webSocketId}`,
                body: JSON.stringify({
                    type: 'GET_NEWSPAPER',
                    body: {},
                }),
            });
            //지금 현재시간은?
            props.client.publish({
                destination: `/app/private/${props.webSocketId}`,
                body: JSON.stringify({
                    type: 'GET_INGAME_TIME',
                    body: {},
                }),
            });
            //지금 쉬는 시간인가?
            props.client.publish({
                destination: `/app/private/${props.webSocketId}`,
                body: JSON.stringify({
                    type: 'GET_BREAK_TIME',
                    body: {},
                }),
            });
        }
    }, [props.client, props.client.connected, props.webSocketId]);
    return <div className="hidden"></div>;
}
