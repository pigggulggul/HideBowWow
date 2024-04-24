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
    @Operation(summary = "범용적 테스트용", description = "받은 payload 를 그대로 방 사람들에게 전달한다. roomState: {0:대기, 1:로딩, 2:게임중, 3:결과}")
    public void roomBaseMessage(@Payload StompPayload<Room> message) {
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), message);
    }

    @MessageMapping("/room.modify") @DeleteMapping("/room.modify")
    @Operation(summary = "방 정보 수정(클라 요청 필요)", description = "title, password, public, time, map 을 수정")
    public void roomModify(@Payload StompPayload<Room> message){
        roomSocketService.modifyRoom(message);
    }

    @MessageMapping("/room.changeAdmin") @DeleteMapping("/room.changeAdmin")
    @Operation(summary = "방장 자동 위임(서버 판단)", description = "바뀐 방의 정보를 Room객체로 전송")
    public void changeAdmin(@Payload StompPayload<Room> message){
        // 시스템에서 판단 후 전송
    }

    @MessageMapping("/room.gameInit") @DeleteMapping("/room.gameInit")
    @Operation(summary = "게임 입장(클라 요청 필요)", description = "요청만 보내주면 Players(술래여부, 생존여부, 초기위치, 방향)를 포함한 Room객체(시간:10, 룸상태:1)")
    public void gameInit(@Payload StompPayload<Room> message){
        roomSocketService.gameInit(message);
    }

    @MessageMapping("/room.gameStart") @DeleteMapping("/room.gameStart")
    @Operation(summary = "게임 시작(서버판단)", description = "Room객체 반환(시간:120, 룸상태:2)")
    public void gameStart(@Payload StompPayload<Room> message){
        // 시스템에서 판단 후 전송
    }

    @MessageMapping("/room.gameState") @DeleteMapping("/room.gameState")
    @Operation(summary = "게임중 플레이어 위치정보 및 시간 반환", description = "Room객체 반환")
    public void gameState(@Payload StompPayload<Room> message){
        // 시스템에서 판단 후 전송
    }

    @MessageMapping("/room.gameFinish") @DeleteMapping("/room.finish")
    @Operation(summary = "게임 종료(서버판단)", description = "Room객체 반환(시간:10, 룸상태:3)")
    public void gameFinish(@Payload StompPayload<Room> message){
        // 시스템에서 판단 후 전송
    }

    @MessageMapping("/room.backRoom") @DeleteMapping("/room.backRoom")
    @Operation(summary = "대기실로 되돌아가기(서버판단)", description = "Room객체 반환(시간:0, 룸상태:0)")
    public void backRoom(@Payload StompPayload<Room> message){
        // 시스템에서 판단 후 전송
    }

}
