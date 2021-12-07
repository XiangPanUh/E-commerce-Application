package com.mercury.security.handler;

import com.mercury.bean.Account;
import com.mercury.bean.User;
import com.mercury.dao.AccountDao;
import com.mercury.http.AuthenticationSuccessResponse;
import com.mercury.http.Response;
import com.mercury.security.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class AuthenticationSuccessHandlerImpl extends SimpleUrlAuthenticationSuccessHandler {
    @Autowired
    private AccountDao accountDao;
    @Override                                       //provide by Spring MVC
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        // provide by spring security(username and permit after login)
                                        Authentication authentication) throws IOException, ServletException {
        Account u = accountDao.findByAccountEmail(authentication.getName());
        SecurityUtils.sendResponse(response, HttpServletResponse.SC_OK, "Login successfully.", null, u);
    }
    // return user's profile information
}

