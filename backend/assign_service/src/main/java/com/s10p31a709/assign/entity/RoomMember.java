package com.s10p31a709.assign.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Where;

@ToString
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class RoomMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long roomMemberId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Room room;

    private String nickname;

}
