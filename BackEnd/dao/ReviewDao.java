package com.mercury.dao;

import com.mercury.bean.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

@Repository
public interface ReviewDao extends JpaRepository<Review, Integer> {
}
