package com.EverTea.EverTea.PlantationInstructionFCM;

import com.EverTea.EverTea.Authentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserFCMRepo extends JpaRepository <User, Integer>{
    User findByEmail(String email);  // Find a user by email
}
