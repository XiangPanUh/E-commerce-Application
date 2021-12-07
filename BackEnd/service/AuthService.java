package com.mercury.service;

import com.mercury.dao.AccountDao;
import com.mercury.http.AuthenticationSuccessResponse;
import com.mercury.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private AccountDao accountDao;
    public Response checklogin(Authentication authentication) {
        if (authentication != null) {
            Response response = new AuthenticationSuccessResponse(true, 200, "Logged In!", accountDao.findByAccountEmail(authentication.getName()));
            return response;
        } else {
            return new Response(false);
        }
    }
}