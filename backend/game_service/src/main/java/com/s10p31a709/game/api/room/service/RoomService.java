package com.s10p31a709.game.api.room.service;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.room.repository.RoomRepository;
import com.s10p31a709.game.common.exception.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<Room> getRoomList(){
        return roomRepository.getRoomList();
    }

    public Room getRoom(String roomId){
        Room room = roomRepository.getRoom(roomId);
        if (room == null) throw new CustomException(404, "방이 존재하지 않습니다");

        return room;
    }

    public Room createRoom(Room room){
        room.setRoomId(UUID.randomUUID().toString());
        room.setRoomPlayers(new CopyOnWriteArrayList<>());
        return roomRepository.addRoom(room);
    }

    public void checkEnter(String roomId, String password, String nickname){
        Room room = roomRepository.getRoom(roomId);
        if(room == null) throw new CustomException(404, "방이 존재하지 않습니다");
        if(room.getRoomPlayers().size() > 6) throw new CustomException(400, "방이 가득 찼습니다.");
        if(!room.getIsPublic() && !room.getRoomPassword().equals(password)) throw new CustomException(400, "비밀번호가 틀렸습니다.");
    }

}
