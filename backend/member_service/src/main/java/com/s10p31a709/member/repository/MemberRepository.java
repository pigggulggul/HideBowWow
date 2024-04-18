package com.s10p31a709.member.repository;

import com.s10p31a709.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, String> {

    <T> Optional<T> findByNickname(String nickname, Class<T> type);

}
