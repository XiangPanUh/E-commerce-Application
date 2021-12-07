package com.mercury.dao;

import com.mercury.bean.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberDao extends JpaRepository<Member, Integer> {
}
