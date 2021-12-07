package com.mercury.service;
import com.mercury.bean.Game;
import com.mercury.bean.History;
import com.mercury.bean.MysteryBox;
import com.mercury.bean.Transaction;
import com.mercury.dao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class TransactionService {
    @Autowired
    TransactionDao transactionDao;
    @Autowired
    private MysteryBoxDao mysteryBoxDao;
    @Autowired
    private CartDao cartDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private GameDao gameDao;
    @Autowired
    private GameService gameService;
    @Autowired
    private HistoryDao historyDao;

    // get transactions by user id
    public List<Transaction> getByUserId(Integer id) {
        List<Transaction> newT = transactionDao.findAll();
        return newT.stream().filter(c -> c.getUser().getUserId() == id).collect(Collectors.toList());
    }

    // ADMIN can view all transactions
    public List<Transaction> getAllTransaction() {
        return transactionDao.findAll();
    }

    // get all transaction info by user's id
    public List<Transaction> getAllById(Integer id) {
        return transactionDao.findAllByTransactionId(id);
    }

    // after check out, add cart to transaction
    public void checkOut() {
        cartDao.findAll().stream().forEach(cart -> {
            Transaction transaction = new Transaction();
            // save all items in shopping cart to transaction
            transaction.setTransactionQuality(cart.getQuality());
            transaction.setMysteryBox(mysteryBoxDao.getById(cart.getMysteryBox().getMysteryBoxId()));
            transaction.setUser(userDao.getById(cart.getUser().getUserId()));
            transactionDao.save(transaction);

            // save the current data need in the future
            int transactionId = transaction.getTransactionId();
            MysteryBox box = transaction.getMysteryBox();
            String level = box.getMysteryBoxLevel();

            // after check out get games for user
            for(int x = 0;  x < transaction.getTransactionQuality(); x++) {
                History history = new History();
                history.setTransaction(transactionDao.getById(transactionId));
                history.setMysteryBox(box);

                int rate = (int)(Math.random() * 100);
                String gameLevel;
                if (level.equals("Gold")) {
                    if (rate < 51) {gameLevel = "GOLD";}
                        else if (rate < 81) {gameLevel ="SILVER";}
                            else {gameLevel = "BRONZE";}
                } else if (level.equals("Silver")) {
                    if (rate < 51) {gameLevel = "SILVER";}
                        else if (rate < 91) {gameLevel ="BRONZE";}
                            else {gameLevel = "GOLD";}
                } else {
                    if(rate < 71) {gameLevel = "BRONZE";}
                        else if( rate < 96) {gameLevel ="BRONZE";}
                            else {gameLevel = "GOLD";}
                }
                List<Game> gameList= gameService.getByLevel(gameLevel);
                Random r = new Random();
                int randNum = r.nextInt(gameList.size());
                int id = gameList.get(randNum).getGameId();
                history.setGames(gameDao.getById(id));
                historyDao.save(history);
            }
        });
    }
}
