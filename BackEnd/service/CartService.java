package com.mercury.service;

import com.mercury.bean.Cart;
import com.mercury.bean.MysteryBox;
import com.mercury.bean.User;
import com.mercury.dao.CartDao;
import com.mercury.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Service
public class CartService {
    @Autowired
    private CartDao cartDao;
    @Autowired
    private AuthService authService;
    @Autowired
    private UserService userService;


    public Cart findByBoxId(Integer boxId) {
        List<Cart> carts = cartDao.findAll();

        Cart cart = new Cart();

        try {
            for (Cart c1: carts) {
                if (c1.getMysteryBox().getMysteryBoxId() == boxId) {
                    cart = c1;
                }
            }
            return cart;
        } catch (Exception e) {

        }
        return cart;
    }

    public Response removeCarts() {
        cartDao.deleteAll();
        return new Response(true);
    }

    public Response deleteCart(MysteryBox box) {
        Cart cart = new Cart();
        cart = findByBoxId(box.getMysteryBoxId());

        if (cart == null) {
            return new Response(false, "cart is empty");
        } else {
            int temp = cart.getQuality();
            if (temp > 1) {
                cart.setQuality(temp-1);
                cartDao.save(cart);
            } else {
                cartDao.delete(cart);
            }
        }
        return new Response(true);
    }

    public Response addCart(MysteryBox box, Authentication authentication) {
        Cart cur = findByBoxId(box.getMysteryBoxId());
        Cart cart = new Cart();
        boolean check = (authentication != null);
        // empty shopping cart and user logged in
        if (check == true) {
            if (cur.getMysteryBox() == null) {
                String email = authService.checklogin(authentication).getAccount().getAccountEmail();
                cart.setMysteryBox(box);
                cart.setQuality(1);
                User user = userService.getUserByEmail(email);
                cart.setUser(user);
                cartDao.save(cart);

                // not empty with user logged in
            } else if (cur.getMysteryBox() != null) {
                String email = authService.checklogin(authentication).getAccount().getAccountEmail();
                if (cur.getUser().getAccount().getAccountEmail().equals(email)) {
                    int temp = cur.getQuality();
                    cur.setMysteryBox(box);
                    cur.setQuality(temp + 1);
                    User user = userService.getUserByEmail(email);
                    cur.setUser(user);
                    cartDao.save(cur);
                } else {
                    cart.setMysteryBox(box);
                    cart.setQuality(1);
                    User user = userService.getUserByEmail(email);
                    cart.setUser(user);
                    cartDao.save(cart);
                }
            }
            return new Response(true);
        } else {
            return new Response(false, "You have to login before check out");
        }
    }


    // get cart info
    public List<Cart> getCarts(Authentication authentication) {
        if (authentication.getAuthorities() != null) {
            return cartDao.findAll();
        } else {
            return null;
        }
    }

    public List<Cart> getCartsByUser(Authentication authentication) {
        String email = authService.checklogin(authentication).getAccount().getAccountEmail();
        User user = userService.getUserByEmail(email);
        List<Cart> carts = cartDao.findAll();
        List<Cart> newCarts = new ArrayList<>();
        for (Cart c1: carts) {
            if (c1.getUser().getUserId() == user.getUserId()) {
                newCarts.add(c1);
            }
        }
        return newCarts;
        }
    }
