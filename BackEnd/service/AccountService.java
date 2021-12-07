package com.mercury.service;

import com.mercury.bean.Account;
import com.mercury.bean.Member;
import com.mercury.bean.User;
import com.mercury.dao.AccountDao;
import com.mercury.dao.UserDao;
import com.mercury.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class AccountService {
    @Autowired
    private AccountDao accountDao;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserDao userDao;

    // user and admin both can get their account information
    public List<Account> getAll(){
        return accountDao.findAll();
    }

    // find one user's account info by id
    public Account getAccountById(Integer id) {
        return accountDao.findById(id).get();
    }

    // register for users
    public Response register(Account account) {
            account.setAccountPassword(passwordEncoder.encode(account.getAccountPassword()));
            account.setMember(new Member(1,"USER"));
            account.setAccountType("BRONZE");
            accountDao.save(account);
            User user = new User();
            user.setAccount(account);
            userDao.save(user);
            return new Response((true));
    }

    // change user's password
    public Response changePassword(Account account, Authentication authentication) {
        if(account.getAccountEmail().equals(authentication.getName()) || isAdmin(authentication.getAuthorities())) {
            Account a = accountDao.findByAccountEmail(account.getAccountEmail());
            a.setAccountPassword(passwordEncoder.encode(account.getAccountPassword()));
            accountDao.save(a);
        } else {
            return new Response(true);
        }
        return new Response(true);
    }
    // function to check is he an admin user
    public boolean isAdmin(Collection<?extends GrantedAuthority> members ) {
        boolean isAdmin = false;
        for (GrantedAuthority member : members) {
            if (member.getAuthority().equals("ADMIN")) {
                isAdmin = true;
            }
        }
        return isAdmin;
    }

    public Response  deleteUser(int id) {
        if (accountDao.findById(id).get() != null) {
            accountDao.deleteById(id);
            return new Response(true);
        } else {
            return new Response(false, "User is not found");
        }
    }
}
