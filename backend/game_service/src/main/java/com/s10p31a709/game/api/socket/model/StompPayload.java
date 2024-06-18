package com.s10p31a709.game.api.socket.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StompPayload<T> {

    private String type;
    private String roomId;
    private String sender;
    private T data;

}
