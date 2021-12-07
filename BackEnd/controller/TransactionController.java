package com.mercury.controller;


import com.mercury.bean.History;
import com.mercury.bean.Transaction;
import com.mercury.http.Response;
import com.mercury.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> getAllTransaction() {
        List<Transaction> transactionList = transactionService.getAllTransaction();
        return transactionList;
    }
    @GetMapping("/TransactionId/{id}")
    public List<Transaction> getAllById(@PathVariable Integer id) {
        return transactionService.getAllById(id);
    }

    @GetMapping("/UserId/{id}")
    public List<Transaction> getByUserId(@PathVariable Integer id) {
        return transactionService.getByUserId(id);
    }
    @GetMapping("/checkout")
    public Response checkOut() {
        transactionService.checkOut();
        return new Response(true);
    }
}
