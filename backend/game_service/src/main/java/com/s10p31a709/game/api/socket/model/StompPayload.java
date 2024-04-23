package com.s10p31a709.game.api.socket.model;

import lombok.Data;

import java.util.Map;

@Data
public class StompPayload<T> {

    private String type;
    private String roomId;
    private String sender;
    private T data;

}
