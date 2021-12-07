package com.mercury.dao;

import com.mercury.bean.Game;
import org.springframework.data.jpa.repository.JpaRepository;


public interface GameDao extends JpaRepository<Game, Integer> {
    Game findByGameName(String GameName);
}
