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
        Room room = new Room();
        room.setRoomId(UUID.randomUUID().variant());
        room.setNickname(nickname);
        return roomRepository.save(room);
    }

    public List<Room> enterRoom(Room room){
        List<Room> list = roomRepository.findAllByRoomId(room.getRoomId());
        if (list.isEmpty()) throw new CustomException(404, "방이 존재하지 않습니다");
        if (list.size() >= 6) throw new CustomException(400, "정원이 초과되었습니다");
        roomRepository.save(room);
        return roomRepository.findAllByRoomId(room.getRoomId());
    }

    public void exitRoom(Room room){
        room = roomRepository.findByRoomIdAndNickname(room.getRoomId(), room.getNickname());
        roomRepository.delete(room);
    }

}
