package com.s10p31a709.assign.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Where;

import java.util.List;


@ToString
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Room extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private long roomId;

    private String title;

    private String password;

    private String map;

    @OneToMany(mappedBy = "room")
    private List<RoomMember> roomMembers;

}

