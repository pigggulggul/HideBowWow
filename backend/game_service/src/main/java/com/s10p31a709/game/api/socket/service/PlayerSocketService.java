package com.s10p31a709.game.api.socket.service;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.repository.RoomRepository;
import com.s10p31a709.game.api.socket.model.StompPayload;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
@RequiredArgsConstructor
public class PlayerSocketService {
    private final Map<String, Map<String, String>> sessions = new ConcurrentHashMap<>();

    private final RoomRepository roomRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;

    public void setSessions(String session, Map<String, String> map){
        sessions.put(session, map);
    }

    public void exitPlayer(String sessionId){
        Map<String, String> map = roomRepository.deletePlayerBySessionId(sessionId);
        if(map == null) return;
        String roomId = map.get("roomId");
        String nickname = map.get("nickname");
        StompPayload<Player> payload = new StompPayload<>();
        payload.setType("player.exit");
        payload.setRoomId(roomId);
        payload.setSender("system");
        payload.setData(new Player(nickname, null, null, null, null, null));
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void enterPlayer(StompPayload<Player> message){
        roomRepository.addPlayer(message.getRoomId(), message.getData().getNickname(), message.getData().getSessionId());
    }

    public void movePlayer(StompPayload<Player> message){
        String roomId = message.getRoomId();
        Player player = message.getData();
    }

}
