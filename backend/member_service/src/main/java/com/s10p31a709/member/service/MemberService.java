package com.s10p31a709.member.service;

import com.s10p31a709.member.common.exception.CustomException;
import com.s10p31a709.member.entity.Member;
import com.s10p31a709.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Member getMember(String nickname){
        return memberRepository.findByNickname(nickname, Member.class).orElseThrow(() -> new CustomException(404, "존재하지 않는 아이디 입니다"));
    }

    public Member login(String nickname, String password){
        Member member = memberRepository.findByNickname(nickname, Member.class).orElseThrow(() -> new CustomException(404, "존재하지 않는 아이디 입니다"));
        boolean isMatch = bCryptPasswordEncoder.matches(password, member.getPassword());
        if(!isMatch) throw new CustomException(400, "비밀번호가 일치하지 않습니다");

        return member;
    }

    public Member guestLogin(String nickname){
        Member member = memberRepository.findByNickname(nickname, Member.class).orElse(null);
        if (member != null) throw new CustomException(409, "이미 사용중인 닉네임 입니다");
        member = memberRepository.save(new Member(nickname, ""));
        return member;
    }

    public Member registerMember(String nickname, String password){
        Member member = memberRepository.findByNickname(nickname, Member.class).orElse(null);
        if (member != null) {
            throw new CustomException(400, "이미 존재하는 아이디 입니다.");
        }
        password = bCryptPasswordEncoder.encode(password);
        return memberRepository.save(new Member(nickname, password));
    }

    @Transactional
    public void deleteMember(String nickname){
        Member member = memberRepository.findByNickname(nickname, Member.class).orElseThrow(() -> new CustomException(404, "유저를 찾을 수 없습니다"));
        memberRepository.delete(member);
    }

}
