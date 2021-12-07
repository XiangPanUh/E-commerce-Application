package com.mercury.controller;

import com.mercury.bean.MysteryBox;
import com.mercury.service.MysteryBoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mysteryBoxes")
public class MysteryBoxController {
    @Autowired
    private MysteryBoxService mysteryBoxService;

    @GetMapping
    public List<MysteryBox> getAll() {
        return mysteryBoxService.getAll();
    }

    @GetMapping("/id/{id}")
    public MysteryBox getById(@PathVariable Integer id) {
        return mysteryBoxService.getById(id);
    }
}
