package com.mercury.controller;

import com.mercury.bean.Account;
import com.mercury.bean.Game;
import com.mercury.http.Response;
import com.mercury.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/games")
public class GameController {
    @Autowired
    GameService gameService;

    @GetMapping
    public List<Game> getAll() {return gameService.getAll();}
    @GetMapping("/games/{gameId}")
    public Game getGameById(@PathVariable Integer gameId) {
        return gameService.getGameById(gameId);
    }
    @GetMapping("/name/{name}")
    public Game getGameByName(@PathVariable String name) {
        return gameService.getGameByName(name);
    }
    @PostMapping
    public Response addGame(@RequestBody Game game) {
        return gameService.addNewGame(game);
    }
    @GetMapping("/game/{boxId}")
    public List<Game> getGamesByBoxId(@PathVariable Integer boxId) {
        return gameService.getGamesByBoxId(boxId);
    }
}
