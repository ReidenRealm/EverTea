package com.EverTea.EverTea.Authentication.services;

import com.EverTea.EverTea.Authentication.model.User;
import com.EverTea.EverTea.Authentication.repo.UserDeviceRepo;
import com.EverTea.EverTea.PlantationInstructionFCM.UserDevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DeviceService {

    @Autowired
    private UserDeviceRepo userDeviceRepo;

    // Method to register a device for a user
    public UserDevice registerDevice(User user, String fcmToken, String deviceType) {
        // Check if device with the same FCM token already exists for this user
        UserDevice existingDevice = userDeviceRepo.findByFcmToken(fcmToken);
        if (existingDevice != null) {
            return existingDevice; // Return the existing device if token already exists
        }

        // Create and save new device if the token doesn't exist
        UserDevice userDevice = new UserDevice();
        userDevice.setUser(user);
        userDevice.setFcmToken(fcmToken);
        userDevice.setDeviceType(deviceType);
        userDevice.setCreatedAt(LocalDateTime.now());  // Set the current timestamp

        return userDeviceRepo.save(userDevice);  // Save the device to the database
    }

    // Method to get all devices by user
    public List<UserDevice> getUserDevices(User user) {
        return userDeviceRepo.findByUser(user);
    }

    // Method to delete a device by FCM token
    public void deleteDevice(String fcmToken) {
        userDeviceRepo.deleteByFcmToken(fcmToken);
    }
}
