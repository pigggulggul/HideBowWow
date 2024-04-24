package com.s10p31a709.game.api.socket.controller;

import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.socket.model.StompPayload;
import com.s10p31a709.game.api.socket.service.RoomSocketService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "RoomSocketController", description = "Room 객체가 수정되는 socket 요청 (swagger 에서 테스트 불가)")
@RequiredArgsConstructor
@RestController
public class RoomSocketController {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final RoomSocketService roomSocketService;


    @MessageMapping("/room") @DeleteMapping("/room")
    @Operation(summary = "범용적 테스트용", description = "받은 payload 를 그대로 방 사람들에게 전달한다.")
    public void roomBaseMessage(@Payload StompPayload<Room> message) {
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), message);
    }

    @MessageMapping("/room.modify") @DeleteMapping("/room.modify")
    @Operation(summary = "방 정보 수정", description = "title, password, public, time, map, roomState: {0:대기, 1:로딩, 2:게임중, 3:결과} 를 수정")
    public void roomModify(@Payload StompPayload<Room> message){
        roomSocketService.modifyRoom(message);
    }

    @MessageMapping("/room.start") @DeleteMapping("/room.start")
    @Operation(summary = "게임 시작", description = "요청만 보내주면 Players를 포함한 Room객체 반환 예정")
    public void roomStart(@Payload StompPayload<Room> message){
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), message);
    }

    @MessageMapping("/room.finish") @DeleteMapping("/room.finish")
    @Operation(summary = "게임 종료", description = "시간이 다되면 서버에서 종료메세지 전송")
    public void roomFinish(@Payload StompPayload<Room> message){
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), message);
    }

}
