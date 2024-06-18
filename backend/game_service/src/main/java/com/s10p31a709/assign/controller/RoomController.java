package com.s10p31a709.assign.controller;

import com.s10p31a709.assign.common.response.BaseResponse;
import com.s10p31a709.assign.service.RoomService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/{roomId}")
    @Operation(summary = "방 정보 반환")
    public ResponseEntity<?> getRoomList(@PathVariable long roomId){
        return BaseResponse.success(200, "", roomService.getRoom(roomId));
    }

}
