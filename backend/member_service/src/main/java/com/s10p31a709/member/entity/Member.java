package com.s10p31a709.member.entity;

import lombok.*;
import org.hibernate.annotations.Where;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;


@ToString
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Member extends BaseEntity {

    @Id
    private String nickname;

    private String password;

}

