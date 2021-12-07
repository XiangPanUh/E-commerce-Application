package com.mercury.controller;

import com.mercury.bean.Payment;
import com.mercury.bean.User;
import com.mercury.http.Response;
import com.mercury.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    UserService userService;


    @GetMapping("user/user/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.getUserById(id);
    }

    @PostMapping("/updateUsers")
    public Response updateUserName(@RequestBody User user) {
        return userService.updateUserName(user);
    }

    @GetMapping
    public List<User> getAll() {
        return userService.getAllUser();
    }

    @PostMapping("/updatePayment")
    public Response updateUserPayment(@RequestBody Payment payment) {
        return userService.updatePayment(payment);
    }

    @DeleteMapping("/{id}")
    public Response deletePayment(@PathVariable Integer id) {
        return new Response(true, "Payment: " + id + " is deleted!");
    }
    @GetMapping("/name")
    public User getByUser(Authentication authentication) {
        return userService.getUserByUser(authentication);
    }

    @GetMapping("/payment/user/{id}")
    public List<Payment> getPaymentByUserId(@PathVariable Integer id) {
        return userService.getPaymentByUserId(id);
    }

    @GetMapping("/payments")
    public List<Payment> getAllPayments() {
        return userService.getAllPayments();
    }

    @PostMapping("/addUser")
    public Response addUser(@RequestBody User user) {
        return userService.addNewUser(user);
    }

    @GetMapping("/payment/payment/{id}")
    public Payment getPaymentById(@PathVariable Integer id) {return userService.getPaymentById(id);}

    @PostMapping("/addPayment")
    public Response addPayment(@RequestBody Payment payment, Authentication authentication) {return userService.addPayment(payment,authentication );}

    @GetMapping("user/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @GetMapping("payments/userId")
    public List<Payment> getPaymentsByUser(Authentication authentication) {
        return userService.getPaymentsByUser(authentication);
    }
}
