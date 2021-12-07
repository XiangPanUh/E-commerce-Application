package com.mercury.service;

import com.mercury.bean.Account;
import com.mercury.bean.Game;
import com.mercury.dao.AccountDao;
import com.mercury.dao.GameDao;
import com.mercury.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameService {
    @Autowired
    private GameDao gameDao;


    // get all games information
    public List<Game> getAll() {return gameDao.findAll();}

    // find a game by it' game id
    public Game getGameById(Integer id) {
        return gameDao.findById(id).get();
    }

    // find a game by name
    public Game getGameByName(String name) {
        return gameDao.findByGameName(name);
    }
    // add new games
     public Response addNewGame(Game game) {
        gameDao.save(game);
        return new Response(true);
     }

     public List<Game> getGamesByBoxId(Integer id) {
        List<Game> games = gameDao.findAll();
        List<Game> newGames = new ArrayList<>();
        games.stream().filter(g -> (g.getMysteryBox().getMysteryBoxId())== (id)).forEach((g) -> newGames.add(g));
        return newGames;
     }

     public List<Game> getByLevel(String level) {
            List<Game> games = gameDao.findAll();
            List<Game> newGames = new ArrayList<>();
            for (Game g : games) {
                if (g.getGameLevel().equals(level)) {
                    newGames.add(g);
                }
            }
            return newGames;
     }
}
