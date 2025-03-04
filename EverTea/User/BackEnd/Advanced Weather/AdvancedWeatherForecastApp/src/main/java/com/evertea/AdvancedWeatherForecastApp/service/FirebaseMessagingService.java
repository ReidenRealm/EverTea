package com.evertea.AdvancedWeatherForecastApp.service;

import com.evertea.AdvancedWeatherForecastApp.DTO.LocationAndTokenReceiver;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class FirebaseMessagingService {

    String token;
    @Autowired
    private FirebaseMessaging firebaseMessaging;

    public void getTokenFromController(LocationAndTokenReceiver receiver){
        token = receiver.getFcmToken();
        System.out.println("Token from getTokenFromController: "+token);
    }

    public String sendNotificationByToken(String body){

        String title = "☁️ System Alert!" + String.valueOf(new Date());


        Notification notification = Notification.builder()
                .setTitle(title)
                .setBody(body)
                .build();

        Message message = Message.builder()
                .setToken(token)
                .setNotification(notification)
                .build();

        try{
            firebaseMessaging.send(message);
            return "Success sending notification";
        }catch (FirebaseMessagingException e){
            e.printStackTrace();
            return "Error sending notification";
        }


    }
}
