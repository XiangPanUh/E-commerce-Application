package com.mercury.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name ="FP_USER")
public class User {
    @Id
    @SequenceGenerator(name = "fp_user_seq_gen", sequenceName = "FP_USER_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "fp_user_seq_gen", strategy = GenerationType.AUTO)
    private int userId;
    @Column
    private String userName;
    @OneToOne
    private Account account;

    public User() {
    }

    public User(int userId, String userName, int userPoints, Account account) {
        this.userId = userId;
        this.userName = userName;
        this.account = account;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    public Account getAccount() {
        return account;
    }
    @JsonIgnore
    public void setAccount(Account account) {
        this.account = account;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", account=" + account +
                '}';
    }
}
