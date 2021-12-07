package com.mercury.http;

import com.mercury.bean.Account;

public class Response {

    private boolean success;
    private int code;
    private String message;
    private Account account;

    public Response() {
        super();
    }

    public Response(boolean success) {
        super();
        this.success = success;
        this.code = success ? 200 : 400;
        this.message = "";

    }

    public Response(boolean success, String message) {
        super();
        this.success = success;
        this.code = success ? 200 : 400;
        this.message = message;
    }

    public Response(boolean success, int code, String message) {
        super();
        this.success = success;
        this.code = code;
        this.message = message;
    }
    public Response(boolean success, int code, String message, Account account) {
        super();
        this.success = success;
        this.code = code;
        this.message = message;
        this.account = account;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    @Override
    public String toString() {
        return "Response{" +
                "success=" + success +
                ", code=" + code +
                ", message='" + message + '\'' +
                ", account=" + account +
                '}';
    }
}