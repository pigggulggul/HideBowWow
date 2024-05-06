package com.s10p31a709.game.api.socket.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "index_name")
@Data
public class GameResult {

    @Id
    private Integer gameId;
    private String map;
    private Integer seekerCount;
    private Integer hiderCount;
    private Boolean isSeekerWin;
    private Integer endTime;

}
