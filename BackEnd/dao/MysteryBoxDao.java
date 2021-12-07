package com.mercury.dao;
import com.mercury.bean.MysteryBox;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MysteryBoxDao extends JpaRepository<MysteryBox, Integer> {
    List<MysteryBox> findAllByMysteryBoxLevel(String mysteryBoxLevel);
    List<MysteryBox> findAllByMysteryBoxPrice(Integer mysteryBoxPrice);

}
