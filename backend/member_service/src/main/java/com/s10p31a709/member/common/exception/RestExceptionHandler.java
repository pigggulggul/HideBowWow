package com.s10p31a709.member.common.exception;

import com.s10p31a709.member.common.response.BaseResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class RestExceptionHandler {

	@ExceptionHandler(CustomException.class)
	public ResponseEntity<?> customExceptionHandler(CustomException exception, HttpServletRequest request) {
		log.error("Exception: {}", exception.toString());
		return BaseResponse.error(exception.getStatus(), exception.getMessage());
	}

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> runtimeExceptionHandler(RuntimeException exception, HttpServletRequest request) {
		log.error("Exception: {}", exception.toString());
		return BaseResponse.error(HttpStatus.BAD_REQUEST.value(), exception.getMessage());
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> unhandledExceptionHandler(Exception exception, HttpServletRequest request) {
		log.error("Exception: {}", exception.toString());
		return BaseResponse.error(HttpStatus.INTERNAL_SERVER_ERROR.value(), exception.getMessage());
	}

}
