package com.sigma.sigma.repositories;

import com.sigma.sigma.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    User findOneUserByUsername(String username);

    User findByUsername(String username);
}
