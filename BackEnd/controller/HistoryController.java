package com.mercury.controller;


import com.mercury.bean.History;
import com.mercury.http.Response;
import com.mercury.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/histories")
public class HistoryController {
    @Autowired
    HistoryService historyService;
    @GetMapping
    public List<History> getAll() {
        return historyService.getAllHistory();
    }
    @GetMapping("/HistoryId/{id}")
    public History getById(@PathVariable Integer id) {
        return historyService.getHistoryById(id);
    }
    @DeleteMapping("/delete/{id}")
    public Response deleteHistory(@PathVariable Integer id) {
        return historyService.deleteHistory(id);
    }
    @GetMapping("/TransactionId/{id}")
    public List<History> getByTransactionId(@PathVariable Integer id) {
        return historyService.getByTransactionId(id);
    }
}
