package com.mercury.controller;

import com.mercury.http.Response;
import com.mercury.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping("/checklogin")
    public Response checklogin(Authentication authentication) {
        return authService.checklogin(authentication);
    }
}