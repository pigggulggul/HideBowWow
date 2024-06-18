package com.s10p31a709.assign.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Setter
public abstract class BaseEntity {
	@Column(name = "created_time", updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@CreatedDate
	private LocalDateTime createdTime;

	@Column(name = "updated_time")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@LastModifiedDate
	private LocalDateTime updatedTime;

	private int state;

}
