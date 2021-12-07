package com.mercury.bean;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name ="FP_MEMBER")
public class Member implements GrantedAuthority {
    @Id
    private int memberId;
    @Column
    private String memberType;

    public Member() {
    }

    public Member(int memberId, String memberType) {
        this.memberId = memberId;
        this.memberType = memberType;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    public String getMemberType() {
        return memberType;
    }

    public void setMemberType(String memberType) {
        this.memberType = memberType;
    }

    @Override
    public String toString() {
        return "Member{" +
                "memberId=" + memberId +
                ", memberType='" + memberType + '\'' +
                '}';
    }

    @Override
    public String getAuthority() {
        return memberType;
    }
}
