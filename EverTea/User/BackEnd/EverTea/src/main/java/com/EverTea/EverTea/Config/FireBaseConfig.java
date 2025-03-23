package com.EverTea.EverTea;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;

@Configuration
public class FireBaseConfig {

    // Firebase Messaging for Weather
    @Bean
    public FirebaseMessaging firebaseMessagingWeather() throws IOException {
        System.out.println("Initializing Firebase Messaging for Weather");

        GoogleCredentials googleCredentialsWeather = GoogleCredentials
                .fromStream(new ClassPathResource("firebase-service-account.json").getInputStream());

        FirebaseOptions firebaseOptionsWeather = FirebaseOptions.builder()
                .setCredentials(googleCredentialsWeather)
                .build();

        FirebaseApp firebaseAppWeather = FirebaseApp.initializeApp(firebaseOptionsWeather, "weatherApp");

        return FirebaseMessaging.getInstance(firebaseAppWeather); // Firebase messaging for weather
    }

    // Firebase Messaging for Plantation Journey Instructions
    @Bean
    public FirebaseMessaging firebaseMessagingPlantation() throws IOException {
        System.out.println("Initializing Firebase Messaging for Plantation Journey Instructions");

        GoogleCredentials googleCredentialsPlantation = GoogleCredentials
                .fromStream(new ClassPathResource("plantation-journey-instruction-firebase-adminsdk-fbsvc-efffabe473.json").getInputStream());

        FirebaseOptions firebaseOptionsPlantation = FirebaseOptions.builder()
                .setCredentials(googleCredentialsPlantation)
                .build();

        FirebaseApp firebaseAppPlantation = FirebaseApp.initializeApp(firebaseOptionsPlantation, "plantationApp");

        return FirebaseMessaging.getInstance(firebaseAppPlantation); // Firebase messaging for plantation journey instructions
    }
}
