package com.mercury.dao;

import com.mercury.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    User findUserByUserName(String name);
}
