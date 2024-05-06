package com.s10p31a709.game.api.socket.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "index_name")
@Data
public class HidePosition {

    @Id
    private Integer hidePositionId;
    private String map;
    private Double[] position;
    private Double[] direction;
    private Integer selectedIndex;
    private Integer time;

}
