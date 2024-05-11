package com.s10p31a709.game.api.socket.service;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.room.repository.RoomRepository;
import com.s10p31a709.game.api.socket.model.StompPayload;
import com.s10p31a709.game.common.config.GameProperties;
import com.s10p31a709.game.logelk.entity.GameResult;
import com.s10p31a709.game.logelk.service.GameResultService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomSocketService {

    private final RoomRepository roomRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final PlayerSocketService playerSocketService;
    private final AIService aiService;
    private final GameProperties gameProperties;
    private final GameResultService gameResultService;


    public void modifyRoom(StompPayload<Room> message){
        Room room = roomRepository.findRoomByRoomId(message.getRoomId());

        if(message.getData().getIsPublic() != null) room.setIsPublic(message.getData().getIsPublic());
        if(message.getData().getRoomPassword() != null) room.setRoomPassword(message.getData().getRoomPassword());
        if(message.getData().getRoomMap() != null) room.setRoomMap(message.getData().getRoomMap());
        if(message.getData().getRoomAdmin() != null) room.setRoomAdmin(message.getData().getRoomAdmin());
        if(message.getData().getRoomTitle() != null) room.setRoomTitle(message.getData().getRoomTitle());
        if(message.getData().getComputers() != null) room.setComputers(message.getData().getComputers());

        StompPayload<Room> payload = new StompPayload<>("room.modify", message.getRoomId(), "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
    }

    public void gameInit(StompPayload<Room> message){
        Room room = roomRepository.findRoomByRoomId(message.getRoomId());
        room.setComputers(message.getData().getComputers());
        room.setRoomTime(gameProperties.getTime().getWaiting());
        room.setRoomState(1);

        // 맵 판단해서 적용
        GameProperties.RichHouse map = gameProperties.getMap().getRichHouse();


        int seekerNumber1 = new Random().nextInt(room.getRoomPlayers().size());
        int seekerNumber2 = (room.getRoomPlayers().size() >= 6)? new Random().nextInt(room.getRoomPlayers().size()): -1;
        while (seekerNumber2 != -1 && seekerNumber1 == seekerNumber2){
            seekerNumber2 = new Random().nextInt(room.getRoomPlayers().size());
        }
        log.info("room.getRoomPlayers().size(): {}", room.getRoomPlayers().size());
        log.info("seekerNumber1: {}", seekerNumber1);
        log.info("seekerNumber2: {}", seekerNumber2);

        for (int i = 0; i < room.getRoomPlayers().size(); i++) {
            Player player = room.getRoomPlayers().get(i);
            player.setPosition(new Double[]{map.getStartPoint().getX()+(i*0.5), map.getStartPoint().getY(), map.getStartPoint().getZ()+(i*0.5)});
            player.setDirection(new Double[]{0d, 0d, 0d});
            player.setIsDead(false);
            if(i == seekerNumber1 || i == seekerNumber2) {
                player.setIsSeeker(true);
                player.setSelectedIndex(new Random().nextInt(gameProperties.getObject().getMaxSeekerIdx()));
                log.info("seekerIdx: {}", i);
            }else {
                player.setIsSeeker(false);
                player.setSelectedIndex(null);
            }
            if (room.getComputers() != null && !room.getComputers().isEmpty()){
                log.info(room.getComputers().toString());
                List<Player> list = aiService.hideLocationComputer(room.getComputers().size(), room.getRoomMap());
                room.setComputers(list);
                log.info(list.toString());
            }else {
                room.setComputers(new ArrayList<>());
            }
        }

        StompPayload<Room> payload = new StompPayload<>("room.gameInit", message.getRoomId(), "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
        log.info(room.toString());
    }

    public void hideStart(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomTime(gameProperties.getTime().getHide());
        room.setRoomState(2);

        StompPayload<Room> payload = new StompPayload<>("room.hideStart", roomId, "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void findStart(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomTime(gameProperties.getTime().getSeek());
        room.setRoomState(3);

        StompPayload<Room> payload = new StompPayload<>("room.findStart", roomId, "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void seekerWin(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomState(4);

        // 게임 결과 log 전송
        gameResultService.sendGameResult(room);

        room.setRoomTime(gameProperties.getTime().getResult());
        StompPayload<Room> payload = new StompPayload<>("room.seekerWin", roomId, "system", room);
        simpMessagingTemplate.convertAndSend("/sub/room/"+roomId, payload);
    }

    public void hiderWin(String roomId){
        Room room = roomRepository.findRoomByRoomId(roomId);
        room.setRoomState(5);

        // 게임 결과 log 전송
        gameResultService.sendGameResult(room);

        room.setRoomTime(gameProperties.getTime().getResult());
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
