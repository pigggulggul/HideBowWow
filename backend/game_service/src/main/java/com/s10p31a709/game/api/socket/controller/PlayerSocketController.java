package com.s10p31a709.game.api.socket.controller;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.socket.config.WebSocketEventListener;
import com.s10p31a709.game.api.socket.model.StompPayload;
import com.s10p31a709.game.api.socket.service.PlayerSocketService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Tag(name = "PlayerSocketController", description = "Player 객체가 수정되는 socket 요청 (swagger 에서 테스트 불가)")
@RequiredArgsConstructor
@RestController
public class PlayerSocketController {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final PlayerSocketService playerSocketService;


    @MessageMapping("/player") @DeleteMapping("/player")
    @Operation(summary = "범용적 테스트용", description = "받은 payload를 그대로 방 사람들에게 전달한다.")
    public void playerBaseMessage(@Payload StompPayload<Player> message) {
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), message);
    }

    @MessageMapping("/player.enter") @DeleteMapping("/player.enter")
    @Operation(summary = "플레이어 입장 처리")
    public void playerEnter(@Payload StompPayload<Player> message, SimpMessageHeaderAccessor headerAccessor){
        message.getData().setSessionId(headerAccessor.getSessionId());
        playerSocketService.enterPlayer(message);
    }

    @MessageMapping("/player.exit") @DeleteMapping("/player.exit")
    @Operation(summary = "플레이어 퇴장 처리")
    public void playerExit(@Payload StompPayload<Player> message, SimpMessageHeaderAccessor headerAccessor){
        String sessionId = headerAccessor.getSessionId();
        playerSocketService.exitPlayer(sessionId);
    }

    @MessageMapping("/player.move") @DeleteMapping("/player.move")
    @Operation(summary = "플레이어 이동", description = "Player의 좌표(position), 방향정보(direction) 수정")
    public void playerMove(@Payload StompPayload<Player> message) {
        playerSocketService.movePlayer(message);
    }

    @MessageMapping("/player.object") @DeleteMapping("/player.object")
    @Operation(summary = "플레이어의 object 변경", description = "Player의 objectType 정보 수정")
    public void playerObject(@Payload StompPayload<Player> message) {
        playerSocketService.objectPlayer(message);
    }

    @MessageMapping("/player.dead") @DeleteMapping("/player.dead")
    @Operation(summary = "플레이어 사망", description = "Player의 isDead 정보 수정")
    public void playerDead(@Payload StompPayload<Player> message) {
        playerSocketService.deadPlayer(message);
    }

    @MessageMapping("/player.choose") @DeleteMapping("/player.choose")
    @Operation(summary = "Object 선택", description = "0~19까지의 숫자중 3개 배열 리턴")
    public void playerChoose(@Payload StompPayload<Player> message) {
        playerSocketService.choosePlayer(message);
    }

}
