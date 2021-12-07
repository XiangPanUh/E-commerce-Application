package com.mercury.service;

import com.mercury.bean.MysteryBox;
import com.mercury.dao.MysteryBoxDao;
import com.mercury.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MysteryBoxService {
    @Autowired
    private MysteryBoxDao mysteryBoxDao;
    // get all mystery box info
    public List<MysteryBox> getAll() {
        return mysteryBoxDao.findAll();
    }

    // find a mystery box by id
    public MysteryBox getById(Integer id) {
        return mysteryBoxDao.findById(id).get();
    }

    // find all mystery box by level
    public List<MysteryBox> getAllByLevel(String level) {
        return mysteryBoxDao.findAllByMysteryBoxLevel(level);
    }

    // find all mystery box by price
    public List<MysteryBox> getAllByPrice(Integer price) {
        return mysteryBoxDao.findAllByMysteryBoxPrice(price);
    }


    // update mysteryBox info ADMIN ONLY
    public Response updateBox(MysteryBox mysteryBox) {
        try {
            MysteryBox m = (MysteryBox) mysteryBoxDao.findById(mysteryBox.getMysteryBoxId()).get();
            if (mysteryBox.equals(m)) {
                return new Response(false);
            } else {
                mysteryBoxDao.save(mysteryBox);
            }
            return new Response(true);
        } catch (Exception e) {
            return new Response(false);
        }
    }
}
