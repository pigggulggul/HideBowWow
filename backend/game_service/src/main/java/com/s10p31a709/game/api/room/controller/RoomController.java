package com.s10p31a709.game.api.room.controller;


import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.room.service.RoomService;
import com.s10p31a709.game.common.response.BaseResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rooms")
@Tag(name = "RoomController", description = "방을 관리하는 REST API")
public class RoomController {

    private final RoomService roomService;

    @GetMapping
    @Operation(summary = "방 목록 반환")
    public ResponseEntity<?> getRoomList(){
        return BaseResponse.success(200, "", roomService.getRoomList());
    }

    @GetMapping("{roomId}")
    @Operation(summary = "특정 방 정보 반환")
    public ResponseEntity<?> getRoom(@PathVariable("roomId") String roomId){
        return BaseResponse.success(200, "", roomService.getRoom(roomId));
    }

    @PostMapping
    @Operation(summary = "방 생성", description = "title, public, password 를 보내주세요")
    public ResponseEntity<?> createRoom(@RequestBody Room room){
        return BaseResponse.success(201, "", roomService.createRoom(room));
    }

    @PostMapping("/enter")
    @Operation(summary = "방 입장", description = "roomId, password, nickname을 json으로 보내주세요")
    public ResponseEntity<?> enterRoom(@RequestBody Map<String, String> map){
        String roomId = map.get("roomId");
        String password = map.get("password");
        String nickname = map.get("nickname");
        roomService.checkEnter(roomId, password, nickname);
        return BaseResponse.success(201, "", roomService.getRoom(roomId));
    }

}
