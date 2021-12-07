package com.mercury.service;

import com.mercury.bean.History;
import com.mercury.dao.HistoryDao;
import com.mercury.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HistoryService {

    @Autowired
    private HistoryDao historyDao;

    // get all histories from all users ADMIN ONLY
    public List<History> getAllHistory() {
        return historyDao.findAll();
    }

    // get all histories from one user, USER ONLY
    public History getHistoryById(Integer id) {
        return historyDao.findById(id).get();
    }

    // user delete the history if he doesn't like the game
    public Response deleteHistory(Integer id) {
        historyDao.deleteById(id);
        return new Response(true);
    }

    // get history by transaction id
    public List<History> getByTransactionId(Integer id) {
        List<History> newH = historyDao.findAll();
        return newH.stream().filter(c->c.getTransaction().getTransactionId() == id).collect(Collectors.toList());
    }
}