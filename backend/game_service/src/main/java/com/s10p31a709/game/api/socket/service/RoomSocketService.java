package com.s10p31a709.game.api.socket.service;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.room.repository.RoomRepository;
import com.s10p31a709.game.api.socket.model.StompPayload;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomSocketService {

    private final RoomRepository roomRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;


    public void modifyRoom(StompPayload<Room> message){
        Room room = roomRepository.findRoomByRoomId(message.getRoomId());

        if(message.getData().getIsPublic() != null) room.setIsPublic(message.getData().getIsPublic());
        if(message.getData().getRoomPassword() != null) room.setRoomPassword(message.getData().getRoomPassword());
        if(message.getData().getRoomMap() != null) room.setRoomMap(message.getData().getRoomMap());
        if(message.getData().getRoomAdmin() != null) room.setRoomAdmin(message.getData().getRoomAdmin());
        if(message.getData().getRoomTitle() != null) room.setRoomTitle(message.getData().getRoomTitle());
        if(message.getData().getRoomState() != null) room.setRoomState(message.getData().getRoomState());

        StompPayload<Room> payload = new StompPayload<>("room.modify", message.getRoomId(), "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
    }

    public void startRoom(Room room){
        // 방 상태 변경, 시간부여, 플레이어들에게 역할 부여
    }

    public void finishRoom(Room room){
        // 방정보를 확인 후 끝난 방의 상태를 변경하고, 결과 전송
    }

    public void sendRoomInfo(String RoomId){

    }

}
