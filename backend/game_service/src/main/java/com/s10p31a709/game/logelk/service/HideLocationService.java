package com.s10p31a709.game.logelk.service;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.common.config.GameProperties;
import com.s10p31a709.game.logelk.entity.HideLocation;
import com.s10p31a709.game.logelk.repository.HideLocationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class HideLocationService {

    private final HideLocationRepository hideLocationRepository;
    private final KafkaProducerService kafkaProducerService;
    private final GameProperties gameProperties;

    public List<HideLocation> findAll(){
        Iterable<HideLocation> iterable = hideLocationRepository.findAll();
        List<HideLocation> list = new ArrayList<>();
        for (HideLocation item : iterable) {
            list.add(item);
        }
        return list;
    }

    public List<HideLocation> findAllByMap(String map){
        return hideLocationRepository.findAllByMap(map);
    }

    public List<HideLocation> findN(int n, String map){
        List<HideLocation> list = findAllByMap(map);
        List<HideLocation> result = new ArrayList<>();

        while (n > 0){
            if(list.isEmpty()){
                result.add(new HideLocation("", "", new Double[]{0d, 0d, 0d}, new Double[]{0d, 0d, 0d}, new Random().nextInt(gameProperties.getObject().getMaxHiderIdx())));
            }else {
                int k = new Random().nextInt(list.size());
                result.add(list.remove(k));
            }
            n--;
        }

        return result;
    }



    public void save(HideLocation hideLocation){
        kafkaProducerService.createHideLocationLogDev(hideLocation);
    }

    public void sendHideLocation(Room room, Player player){
        if(room.getRoomState() != 2 && room.getRoomState() != 3) return;

        HideLocation hideLocation = new HideLocation();
        hideLocation.setMap(room.getRoomMap());
        hideLocation.setPosition(player.getPosition());
        hideLocation.setDirection(player.getDirection());
        hideLocation.setSelectedIndex(player.getSelectedIndex());

        save(hideLocation);
    }


}
