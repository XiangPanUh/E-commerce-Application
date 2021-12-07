package com.mercury.service;

import com.mercury.bean.*;
import com.mercury.dao.AccountDao;
import com.mercury.dao.CartDao;
import com.mercury.dao.PaymentDao;
import com.mercury.dao.UserDao;
import com.mercury.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private PaymentDao paymentDao;
    @Autowired
    private CartDao cartDao;
    @Autowired
    private AccountDao accountDao;
    @Autowired
    private AuthService authService;

    // update user's name USER ONLY
    public Response updateUserName(User user) {
        int id = user.getUserId();
        User old = userDao.findById(id).get();
        if (old.equals(user)) {
            return new Response(false);
        } else {
            userDao.save(user);
            return new Response(true);
        }
    }
    // get user by account Email
    public User getUserByEmail(String email) {
        List<User> users = userDao.findAll();
        User u1 = new User();
        for(User u: users){
            if(u.getAccount().getAccountEmail().equals(email)){
                u1= u;
            }
        }
        return u1;
    }


    // get all info by user's name USER
    public User getUserByUser(Authentication authentication) {
        String email;
        User u = new User();
        try{email = authService.checklogin(authentication).getAccount().getAccountEmail();
            u = getUserByEmail(email);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return u;
    }

    // get user by ID
    public User getUserById(Integer id) {return userDao.findById(id).get();}

    // get all user's info ADMIN ONLY
    public List<User> getAllUser() {
        return userDao.findAll();
    }

    //     get one user's payment USER ONLY
    public List<Payment> getPaymentByUserId(Integer id) {
        List<Payment> newP = paymentDao.findAll();
        newP.stream().filter(c -> c.getUser().getUserId() ==(id)).collect(Collectors.toList());
        return newP;
    }

    // get payment by id
    public Payment getPaymentById(Integer id) {
        return paymentDao.findById(id).get();
    }
    // update payment info
    public Response updatePayment(Payment payment) {
        try {
            Payment p = paymentDao.findById(payment.getPaymentId()).get();
            if (payment.equals(p)) {
                return new Response(false);
            } else {
                paymentDao.save(payment);
            }
            return new Response(true);
        } catch (Exception e) {
            return new Response(false);
        }
    }
    public Response addPayment(Payment payment ,Authentication authentication) {
        String email = authService.checklogin(authentication).getAccount().getAccountEmail();
        payment.setUser( getUserByEmail(email));
        paymentDao.save(payment);
        return new Response(true);
    }

    // User delete their payment info
    public Response deletePayment(Integer id) {
        paymentDao.delete(paymentDao.getById(id));
        return new Response(true);
    }

    public List<Payment> getAllPayments() {
        return paymentDao.findAll();
    }
    public Response addNewUser(User user) {
        userDao.save(user);
        return new Response(true);
    }

    public List<Payment> getPaymentsByUser(Authentication authentication) {
        String email = authService.checklogin(authentication).getAccount().getAccountEmail();
        User u = getUserByEmail(email);
        List<Payment> payments = paymentDao.findAll();
        List<Payment> newPayments = new ArrayList<>();
        payments.stream().forEach(p-> {
            if (p.getUser().getUserId() == u.getUserId()) {
                newPayments.add(p);
            }
        });
                return newPayments;
        }
}

