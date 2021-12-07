package com.mercury.http;

import com.mercury.bean.Account;

public class AuthenticationSuccessResponse extends Response {

    private Account account;

    public AuthenticationSuccessResponse(boolean success, int code, String message, Account account) {
        super(success, code, message, account);
        this.account = account;
    }

    public Account getUser() {
        return account;
    }

    public void setUser(Account user) {
        this.account = account;
    }

}
