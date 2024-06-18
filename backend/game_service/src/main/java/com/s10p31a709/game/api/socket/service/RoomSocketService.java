package com.s10p31a709.game.api.socket.service;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.room.repository.RoomRepository;
import com.s10p31a709.game.api.socket.model.StompPayload;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

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

        StompPayload<Room> payload = new StompPayload<>("room.modify", message.getRoomId(), "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
    }

    public void gameInit(StompPayload<Room> message){
        Room room = roomRepository.findRoomByRoomId(message.getRoomId());
        room.setRoomTime(10);
        room.setRoomState(1);

        int seekerNumber = new Random().nextInt(room.getRoomPlayers().size());
        for (int i = 0; i < room.getRoomPlayers().size(); i++) {
            Player player = room.getRoomPlayers().get(i);
            player.setPosition(new Integer[]{0, 0, 0});
            player.setDirection(new Integer[]{0, 0, 0});
            player.setIsDead(false);
            player.setIsSeeker(i == seekerNumber);
        }

        StompPayload<Room> payload = new StompPayload<>("room.gameInit", message.getRoomId(), "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
    }

    public void hideStart(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomTime(30);
        room.setRoomState(2);

        StompPayload<Room> payload = new StompPayload<>("room.hideStart", roomId, "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void findStart(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomTime(90);
        room.setRoomState(3);

        StompPayload<Room> payload = new StompPayload<>("room.findStart", roomId, "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void seekerWin(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomTime(10);
        room.setRoomState(4);

        StompPayload<Room> payload = new StompPayload<>("room.seekerWin", roomId, "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void hiderWin(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomTime(10);
        room.setRoomState(5);

        StompPayload<Room> payload = new StompPayload<>("room.hiderWin", roomId, "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void backRoom(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomTime(0);
        room.setRoomState(0);

        StompPayload<Room> payload = new StompPayload<>("room.backRoom", roomId, "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void deleteRoom(String roomId){
        roomRepository.deleteRoomByRoomId(roomId);
    }

    public void changeAdmin(Room room){
        room.setRoomAdmin(room.getRoomPlayers().get(0).getNickname());

        StompPayload<Room> payload = new StompPayload<>("room.changeAdmin", room.getRoomId(), "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+room.getRoomId(), payload);
    }

    public void sendPosition(Room room){
        StompPayload<Room> payload = new StompPayload<>("room.gameState", room.getRoomId(), "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+room.getRoomId(), payload);
    }

}
