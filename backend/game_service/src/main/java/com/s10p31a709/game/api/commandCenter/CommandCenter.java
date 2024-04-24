package com.s10p31a709.game.api.commandCenter;

import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.room.repository.RoomRepository;
import com.s10p31a709.game.api.socket.model.StompPayload;
import com.s10p31a709.game.api.socket.service.RoomSocketService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CommandCenter {

    private final RoomRepository roomRepository;
    private final RoomSocketService roomSocketService;
    private final SimpMessagingTemplate simpMessagingTemplate;

//    @Scheduled(fixedRate = 1000)
//    public void timeSchedule(){
//        List<Room> rooms = roomRepository.findAllRoom();
//        for (Room room : rooms){
//            if (room.getRoomState() != null && room.getRoomState().equals(2)) {
//                room.setRoomTime(room.getRoomTime()-1);
//                if (room.getRoomTime() <= 0){
//                    roomSocketService.finishRoom(room);
//                }
//            }
//        }
//        // 술래가 다 잡아서 게임이 끝났는지도 체크 해야 함
//    }
//
//
//    @Scheduled(fixedRate = 30)
//    public void positionSchedule(){
//        List<Room> rooms = roomRepository.findAllRoom();
//        for (Room room : rooms){
//            if (room.getRoomState() != null && room.getRoomState().equals(2)) {
//                StompPayload<Room> payload = new StompPayload<>("room.players", room.getRoomId(), "system", room);
//                simpMessagingTemplate.convertAndSend("/sub/room/"+room.getRoomId(), payload);
//            }
//        }
//    }

}
