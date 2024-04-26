package com.s10p31a709.assign.service;


import com.s10p31a709.assign.common.exception.CustomException;
import com.s10p31a709.assign.entity.Room;
import com.s10p31a709.assign.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<Room> getRoomList(){

    }

    public List<Room> getRoom(long roomId){
        List<Room> list = roomRepository.findAllByRoomId(roomId);
        if (list.isEmpty()) throw new CustomException(404, "방이 존재하지 않습니다");

        return list;
    }

    public Room registerRoom(String nickname){
        return null;
    }

    public List<Room> enterRoom(Room room){
        return null;
    }

    public void exitRoom(Room room){
    }

}
