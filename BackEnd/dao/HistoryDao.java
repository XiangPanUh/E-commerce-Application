package com.mercury.dao;

import com.mercury.bean.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryDao extends JpaRepository<History, Integer> {
}
