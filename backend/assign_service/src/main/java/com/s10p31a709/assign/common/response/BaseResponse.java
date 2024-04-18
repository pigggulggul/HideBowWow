package com.s10p31a709.assign.common.response;

import lombok.Data;
import org.springframework.http.ResponseEntity;

@Data
public class BaseResponse<T> {

    private int status;
    private String message;
    private T data;

    private BaseResponse(int status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    private BaseResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public static ResponseEntity<?> success(int status, String message){
        return ResponseEntity.status(status).body(new BaseResponse<>(status, message));
    }

    public static <T> ResponseEntity<?> success(int status, String message, T data){
        return ResponseEntity.status(status).body(new BaseResponse<>(status, message, data));
    }

    public static ResponseEntity<?> error(int status, String message){
        return ResponseEntity.status(status).body(new BaseResponse<>(status, message));
    }

}
