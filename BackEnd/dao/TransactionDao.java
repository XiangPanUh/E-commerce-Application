package com.mercury.dao;

import com.mercury.bean.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionDao extends JpaRepository<Transaction, Integer> {
    List<Transaction> findAllByTransactionId(Integer transactionId);
}
