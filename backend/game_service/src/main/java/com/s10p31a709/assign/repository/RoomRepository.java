package com.s10p31a709.assign.repository;

import com.s10p31a709.assign.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findAllByRoomId(long roomId);

    Room findByRoomIdAndNickname(long roomId, String nickname);

}
