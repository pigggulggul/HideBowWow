package com.s10p31a709.member.controller;

import com.s10p31a709.member.common.response.BaseResponse;
import com.s10p31a709.member.entity.Member;
import com.s10p31a709.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/{nickname}")
    @Operation(summary = "유저 정보 반환")
    public ResponseEntity<?> getMember(@PathVariable String nickname){
        return BaseResponse.success(200, "회원정보 반환 성공", memberService.getMember(nickname));
    }

    @PostMapping("/guest")
    @Operation(summary = "게스트 로그인", description = "nickname 을 보내주면 중복여부 확인")
    public ResponseEntity<?> guestLogin(@RequestBody Member member){
        return BaseResponse.success(200, "로그인 성공", memberService.guestLogin(member.getNickname()));
    }

    @PostMapping("/login")
    @Operation(summary = "로그인")
    public ResponseEntity<?> login(@RequestBody Member member){
        return BaseResponse.success(200, "로그인 성공", memberService.login(member.getNickname(), member.getPassword()));
    }
    
    @PostMapping
    @Operation(summary = "회원가입")
    public ResponseEntity<?> registerMember(@RequestBody Member member){
        return BaseResponse.success(201, "회원가입 성공", memberService.registerMember(member.getNickname(), member.getPassword()));
    }

    @DeleteMapping("/{nickname}")
    @Operation(summary = "회원탈퇴")
    public ResponseEntity<?> deleteMember(@PathVariable String nickname){
        memberService.deleteMember(nickname);
        return BaseResponse.success(200, "삭제 성공");
    }

}
