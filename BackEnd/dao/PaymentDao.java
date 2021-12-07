package com.mercury.dao;
import com.mercury.bean.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface PaymentDao extends JpaRepository<Payment, Integer> {
    List<Payment> findAllByPaymentId(Integer paymentId);
}
