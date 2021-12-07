package com.mercury.security;

import com.mercury.bean.Account;
import com.mercury.dao.AccountDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    @Autowired
    private AccountDao accountDao;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account u = accountDao.findByAccountEmail(email);
        if (u == null) {
            throw new UsernameNotFoundException(email + "not exist!");
        }
        return u;
    }
}

