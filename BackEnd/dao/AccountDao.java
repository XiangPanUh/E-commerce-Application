package com.mercury.dao;
import com.mercury.bean.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountDao extends JpaRepository<Account, Integer> {
    Account findByAccountEmail(String accountEmail);
}
