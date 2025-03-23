package com.EverTea.EverTea.Authentication.repo;

import com.EverTea.EverTea.Authentication.model.User;
import com.EverTea.EverTea.PlantationInstructionFCM.UserDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDeviceRepo extends JpaRepository<UserDevice, Long> {

    UserDevice findByFcmToken(String fcmToken);  // Find a device by its FCM token
    void deleteByFcmToken(String fcmToken);      // Delete device by FCM token
    List<UserDevice> findByUser(User user);      // Find devices by user
}
