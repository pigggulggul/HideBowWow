package com.s10p31a709.game.api.room.repository;


import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

@Repository
public class RoomRepository {

    private final List<Room> rooms;

    @Autowired
    public RoomRepository() {
        this.rooms = new CopyOnWriteArrayList<>();
    }

    public List<Room> getRoomList(){
        return rooms;
    }

    public Room getRoom(String roomId){
        for (Room room : rooms){
            if(room.getRoomId().equals(roomId)) return room;
        }
        return null;
    }

    public Room addRoom(Room room){
        rooms.add(room);
        return room;
    }

    public void deleteRoom(String roomId){
        for (int i = 0; i <rooms.size() ; i++) {
            if(rooms.get(i).getRoomId().equals(roomId)){
                rooms.remove(i);
                return;
            }
        }
    }

    public Player addPlayer(String roomId, String nickname, String sessionId){
        for (Room room : rooms) {
            if (room.getRoomId().equals(roomId)) {
                Player player = new Player();
                player.setNickname(nickname);
                player.setSessionId(sessionId);
                room.getRoomPlayers().add(player);
                return player;
            }
        }
        return null;
    }

    public void deletePlayer(String roomId, String nickname){
        for (Room room : rooms) {
            if (room.getRoomId().equals(roomId)) {
                for (int i = 0; i <room.getRoomPlayers().size() ; i++) {
                    if (room.getRoomPlayers().get(i).getNickname().equals(nickname)) {
                        room.getRoomPlayers().remove(i);
                        return;
                    }
                }
            }
        }
    }

    public Map<String, String> deletePlayerBySessionId(String sessionId){
        for (Room room : rooms) {
            for (int j = 0; j < room.getRoomPlayers().size(); j++) {
                Player player = room.getRoomPlayers().get(j);
                if (player.getSessionId().equals(sessionId)) {
                    Map<String, String> map = new HashMap<>();
                    map.put("roomId", room.getRoomId());
                    map.put("nickname", room.getRoomPlayers().get(j).getNickname());
                    room.getRoomPlayers().remove(j);
                    return map;
                }
            }
        }
        return null;
    }

    public void movePlayer(String roomId, Player player){
        Room room = findRoomByRoomId(roomId);
        Player tmp = findPlayerByNickname(room.getRoomPlayers(), player.getNickname());
    }

    public Room findRoomByRoomId(String roomId){
        for (Room room : rooms){
            if(room.getRoomId().equals(roomId)) return room;
        }
        return null;
    }

    public Player findPlayerByNickname(List<Player> players, String nickname){
        for (Player player : players){
            if(player.getNickname().equals(nickname)) return player;
        }
        return null;
    }


}
