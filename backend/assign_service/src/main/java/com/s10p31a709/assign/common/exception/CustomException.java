package com.s10p31a709.assign.common.exception;

import lombok.Getter;

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
