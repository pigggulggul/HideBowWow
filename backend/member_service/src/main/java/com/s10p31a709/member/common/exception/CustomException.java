package com.s10p31a709.member.common.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class CustomException extends RuntimeException {
	private final int status;
	private final String message;

	public CustomException(int status, String message) {
		super(message);
		this.status = status;
		this.message = message;
	}
}
