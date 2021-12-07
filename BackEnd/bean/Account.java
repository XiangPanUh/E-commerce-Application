package com.mercury.bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name ="FP_ACCOUNT")
public class Account implements UserDetails {

    @Id
    @SequenceGenerator(name = "fp_account_seq_gen", sequenceName = "FP_ACCOUNT_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "fp_account_seq_gen", strategy = GenerationType.AUTO)
    private int accountId;
    @Column
    private String accountEmail;
    @Column
    private String accountPassword;
    @Column
    private String accountType;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    private Member member;
//    @OneToOne
//    private User user;


    public Account() {
    }

    public Account(int accountId, String accountEmail, String accountPassword, String accountType, Member member, User user) {
        this.accountId = accountId;
        this.accountEmail = accountEmail;
        this.accountPassword = accountPassword;
        this.accountType = accountType;
        this.member = member;
//        this.user = user;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public String getAccountEmail() {
        return accountEmail;
    }

    public void setAccountEmail(String accountEmail) {
        this.accountEmail = accountEmail;
    }

    public String getAccountPassword() {
        return accountPassword;
    }

    public void setAccountPassword(String accountPassword) {
        this.accountPassword = accountPassword;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }


    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountId=" + accountId +
                ", accountEmail='" + accountEmail + '\'' +
                ", accountPassword='" + accountPassword + '\'' +
                ", accountType='" + accountType + '\'' +
                ", member=" + member +
//                ", user=" + user +
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<Member> m = new ArrayList<>();
        m.add(member);
        return m;
    }

    @Override
    public String getPassword() {
        return this.accountPassword;
    }

    @Override
    public String getUsername() {
        return this.accountEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}