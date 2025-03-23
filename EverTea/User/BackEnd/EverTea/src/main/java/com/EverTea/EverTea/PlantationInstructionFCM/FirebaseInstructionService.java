package com.EverTea.EverTea;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import com.EverTea.EverTea.FireBaseConfig;  // Your Firebase config class

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class FirebaseInstructionService {

    @Autowired
    private FireBaseConfig fireBaseConfig; // Firebase Config Bean

    @Qualifier("firebaseMessagingPlantation") // Ensure that you are autowiring the correct Firebase instance
    @Autowired
    private FirebaseMessaging firebaseMessaging;  // FirebaseMessaging Bean for Plantation Journey Instructions

    // This method will receive instruction details and send it to the respective user/device
    public String sendInstructionNotification(String token, String plantationName, String action, String details) {

        // Build the notification message payload
        String title = plantationName + " Instruction: " + action + "!";
        String body = details + "\nPlease proceed with the task.";

        Notification notification = Notification.builder()
                .setTitle(title)
                .setBody(body)
                .build();

        // Create the message with token
        Message message = Message.builder()
                .setToken(token) // Token of the device
                .setNotification(notification) // Notification content
                .putAllData(createInstructionData(plantationName, action, details))  // Add additional data if needed
                .build();

        // Send the message through FirebaseMessaging
        try {
            firebaseMessaging.send(message);
            return "Instruction notification sent successfully!";
        } catch (FirebaseMessagingException e) {
            e.printStackTrace();
            return "Error sending instruction notification!";
        }
    }

    // You can add extra data to the message if needed (example: plantation ID, or other details)
    private Map<String, String> createInstructionData(String plantationName, String action, String details) {
        Map<String, String> data = new HashMap<>();
        data.put("plantationName", plantationName);
        data.put("action", action);
        data.put("details", details);
        return data;
    }
}
