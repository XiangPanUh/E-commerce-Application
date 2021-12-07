package com.mercury.controller;

import com.mercury.bean.Cart;
import com.mercury.bean.MysteryBox;
import com.mercury.http.Response;
import com.mercury.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping("/add")
    public Response addCart(@RequestBody MysteryBox box, Authentication authentication) {
        return cartService.addCart(box,authentication);
    }

    @GetMapping
    public List<Cart> getCart(Authentication authentication) {
        return cartService.getCartsByUser(authentication);
    }

    @PostMapping("/delete")
    public Response deleteCart(@RequestBody MysteryBox box) {
        return cartService.deleteCart(box);
    }

    @DeleteMapping
    public Response deleteAll() {
        return cartService.removeCarts();
    }
}
