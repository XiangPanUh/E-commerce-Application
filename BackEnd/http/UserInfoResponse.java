package com.mercury.http;
import com.mercury.bean.User;


public class UserInfoResponse extends Response {

    private User user;

    public UserInfoResponse(boolean success, User user) {
        super(success);
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}