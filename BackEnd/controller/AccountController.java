package com.mercury.controller;

import com.mercury.bean.Account;
import com.mercury.http.Response;
import com.mercury.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

//    @PreAuthorize("permitAll()")
    @GetMapping
    public List<Account> getAll() {
        return accountService.getAll();
    }

//    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{id}")
    public Account getAccountById(@PathVariable Integer id) {
        return accountService.getAccountById(id);
    }

    @PostMapping
    public Response register(@RequestBody Account account) {
        return accountService.register(account);
    }

//    @PreAuthorize("hasRole('USER')")
    @PutMapping
    public Response changePassword(Account account, Authentication authentication) {
        return accountService.changePassword(account, authentication);
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping
    public Response  deleteUser(int id) {
        return accountService.deleteUser(id);
    }
}
