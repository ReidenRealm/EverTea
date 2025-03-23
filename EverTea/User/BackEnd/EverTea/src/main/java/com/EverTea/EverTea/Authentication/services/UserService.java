package com.EverTea.EverTea.Authentication.services;

import com.EverTea.EverTea.Authentication.model.User;
import com.EverTea.EverTea.Authentication.repo.UserRepo;
import com.EverTea.EverTea.PlantationInstructionFCM.UserDevice;
import com.EverTea.EverTea.PlantationInstructionFCM.repo.UserDeviceRepository;
import com.EverTea.EverTea.PlantationInstructionFCM.repo.UserFCMRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);
    @Autowired
    private UserFCMRepo userFCMRepo;
    @Autowired
    private UserDeviceRepository userDeviceRepository;

    public User saveUser(User user){

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        System.out.println(user.getPassword());
        return userRepo.save(user);

    }


    // Delete a device
    public void deleteDevice(String fcmToken) {
        userDeviceRepository.deleteByFcmToken(fcmToken);
    }

    // Get all devices for a user
    public List<UserDevice> getUserDevices(String email) {
        User user = userFCMRepo.findByEmail(email);
        if (user != null) {
            return userDeviceRepository.findAll();
        } else {
            throw new RuntimeException("User not found");
        }
    }





    // Update User
    public void updateUser(User user) {
        User existingUser = userRepo.findByEmail(user.getEmail());
        if (existingUser != null) {
            existingUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword())); // Encrypt password
            existingUser.setEmail(user.getEmail());
            userRepo.save(existingUser);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    // Method to find a user by email
    public User findByEmail(String email) {
        return userRepo.findByEmail(email);
    }



    public void updateUserAsAdmin(int id, User user) {
        User existingUser = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        existingUser.setUserName(user.getUserName());
        existingUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword())); // Admin can update all details
        userRepo.save(existingUser);
    }

    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

}
