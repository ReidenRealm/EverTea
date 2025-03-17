package com.EverTea.EverTea.AdvancedWeather.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.HashSet;
import java.util.List;

@Service
public class WeatherNotificationService {


    @Autowired
    private FirebaseMessagingService firebaseMessagingService;

    public void getNotificationMessage(List<List<Object>> weatherDataList){

        String message;
        String[][] messageQueue = new String[16][2];
        String[][] messageQueueRH = new String[16][2];
        String[][] messageQueueRP = new String[16][2];
        String[][] messageQueueWS = new String[16][2];
        String[][] messageQueueST = new String[16][2];
        String[][] messageQueueAC = new String[16][2];


        for(int i =0; i<=15; i++){

            int temp = ((Number) weatherDataList.get(i).get(3)).intValue();
            int relativeHumidity = ((Number) weatherDataList.get(i).get(4)).intValue();
            int precipitation = ((Number) weatherDataList.get(i).get(5)).intValue();
            int rain = ((Number) weatherDataList.get(i).get(6)).intValue();
            //int weatherCode = ((Number) weatherDataList.get(i).get(7)).intValue();
            int windSpeed = ((Number) weatherDataList.get(i).get(8)).intValue();
            //int windDirection = ((Number) weatherDataList.get(i).get(9)).intValue();
            int soilTemp = ((Number) weatherDataList.get(i).get(10)).intValue();
            String time = weatherDataList.get(i).get(2).toString().substring(0,2) + weatherDataList.get(i).get(2).toString().substring(5);

            if(temp > 35){
                message = "🔥 අධික තාප අනතුරු ඇඟවීම! "+time+".  වෙලාවට උෂ්ණත්වය 35°C ඉක්මවනු ඇත. ගස්පලාන් අධික තාපයෙන් රැකගන්න..";
                messageQueue[i][0] = time;
                messageQueue[i][1] = message;
                //System.out.println(message);
            }
            if(temp >= 30 && temp <= 35){
                message = "☀️ ඉහළ උෂ්ණත්වය පිළිබඳ අවවාදය! උෂ්ණත්වය °C 30-35ත් අතරේ "+time+". වේලාවේදී. සෙරෙන ස්ථානයකට යාම සහ ජලසම්පාදනය පිළිබඳව සැලකිල්ලට ගන්න";
                messageQueue[i][0] = time;
                messageQueue[i][1] = message;
                //System.out.println(message);
            }
            if(temp >= 25 && temp <= 30){
                message = "✅ Optimal temperature range for tea growth (25-30°C) at "+time+".";
                messageQueue[i][0] = time;
                messageQueue[i][1] = message;
                //System.out.println(message);
            }
            if(temp >= 20 && temp <= 25){
                message = "🍃 Mild temperature (20-25°C) at "+time+". Ideal conditions for tea growth.";
                messageQueue[i][0] = time;
                messageQueue[i][1] = message;
                //System.out.println(message);
            }
            if(temp >= 15 && temp <= 20){
                message = "❄️ Cool weather at "+time+". Monitor plant health.";
                messageQueue[i][0] = time;
                messageQueue[i][1] = message;
                //System.out.println(message);
            }
            if(temp >= 10 && temp <= 15){
                message = "❄️ Cold weather warning! Temperature dropping below 15°C at "+time+". Mulching recommended.";
                messageQueue[i][0] = time;
                messageQueue[i][1] = message;
                //System.out.println(message);
            }
            if(temp < 10){
                message = "⚠ ️Frost alert! Temperature below 10°C at "+time+". Protect young plants.";
                messageQueue[i][0] = time;
                messageQueue[i][1] = message;
                //System.out.println(message);
            }
            if(relativeHumidity > 90){
                message = "💧 Excessive humidity detected! High risk of fungal diseases. Ensure ventilation.";
                messageQueueRH[i][0] = time;
                messageQueueRH[i][1] = message;
                //System.out.println(message);
            }
            if(relativeHumidity >= 85 && relativeHumidity <= 90){
                message = "💦 High humidity at "+time+". Watch for fungal infections.";
                messageQueueRH[i][0] = time;
                messageQueueRH[i][1] = message;
                //System.out.println(message);
            }
            if(relativeHumidity >= 65 && relativeHumidity < 85){
                message = "✅ Optimal humidity range for tea plants (65-85%) at "+time+".";
                messageQueueRH[i][0] = time;
                messageQueueRH[i][1] = message;
                //System.out.println(message);
            }
            if(relativeHumidity >= 50 && relativeHumidity < 65){
                message = "🌵 Moderate humidity at "+time+". Monitor for dehydration symptoms.";
                messageQueueRH[i][0] = time;
                messageQueueRH[i][1] = message;
                //System.out.println(message);
            }
            if(relativeHumidity < 50){
                message = "🔥 Low humidity alert! Increased risk of leaf drying. Irrigation may be required.";
                messageQueueRH[i][0] = time;
                messageQueueRH[i][1] = message;
                //System.out.println(message);
            }
            // rain and precipitation conditions start
            if(rain > 20){
                message = "⚠️ Severe rainfall warning! Heavy rain expected at "+time+". Ensure drainage.";
                messageQueueRP[i][0] = time;
                messageQueueRP[i][1] = message;
                //System.out.println(message);
            }
            if(rain >= 10 && rain <= 20){
                message = "🌧️ Moderate rain forecasted at "+time+". Avoid applying fertilizers.";
                messageQueueRP[i][0] = time;
                messageQueueRP[i][1] = message;
                //System.out.println(message);
            }
            if(rain >= 5 && rain < 10){
                message = "🌦️ Light rain expected at "+time+". Adjust irrigation schedules.";
                messageQueueRP[i][0] = time;
                messageQueueRP[i][1] = message;
                //System.out.println(message);
            }
            if(rain < 5 && precipitation > 0){
                message = "🌧️ "+time+" වෙලාවට සුළු වැසි පැතිරෙනු ඇත. තෙතමන තරමක් වැඩි විය හැක.";
                messageQueueRP[i][0] = time;
                messageQueueRP[i][1] = message;
                //System.out.println(message);
            }
            if(rain == 0 && precipitation == 0){
                message = "☀️ No rain forecasted. Ensure proper irrigation.";
                messageQueueRP[i][0] = time;
                messageQueueRP[i][1] = message;
                //System.out.println(message);
            }
            if(windSpeed > 40){
                message = "🌪️ Storm alert! Extremely strong winds ("+windSpeed+" km/h) from "+weatherDataList.get(i).get(9)+" at "+time+". Secure plantations.";
                messageQueueWS[i][0] = time;
                messageQueueWS[i][1] = message;
            }
            if(windSpeed >= 30 && windSpeed <=40){
                message = "💨 Strong winds detected ("+windSpeed+" km/h) from "+weatherDataList.get(i).get(9)+" at "+time+". Protect crops.";
                messageQueueWS[i][0] = time;
                messageQueueWS[i][1] = message;
            }
            if(windSpeed >= 20 && windSpeed <30){
                message = "🌬️ Moderate wind at "+windSpeed+" km/h from "+weatherDataList.get(i).get(9)+". Monitor leaf damage";
                messageQueueWS[i][0] = time;
                messageQueueWS[i][1] = message;
            }
            if(windSpeed >= 10 && windSpeed < 20){
                message = "🍃 Mild wind conditions ("+windSpeed+" km/h) at "+time+". No major impact";
                messageQueueWS[i][0] = time;
                messageQueueWS[i][1] = message;
            }
            if(windSpeed < 10){
                message = "✅ Calm wind conditions at "+time+". No strong gusts expected";
                messageQueueWS[i][0] = time;
                messageQueueWS[i][1] = message;
            }
            if(soilTemp > 35){
                message = "☀️ High soil temperature detected ("+soilTemp+"°C). Increase irrigation.";
                messageQueueST[i][0] = time;
                messageQueueST[i][1] = message;
            }
            if(soilTemp >= 30 && soilTemp <= 35){
                message = "🔥 Warm soil conditions detected ("+soilTemp+"°C). Maintain hydration.";
                messageQueueST[i][0] = time;
                messageQueueST[i][1] = message;
            }
            if(soilTemp >= 20 && soilTemp <= 30){
                message = "✅ Optimal soil temperature for tea plants at "+soilTemp+" °C.";
                messageQueueST[i][0] = time;
                messageQueueST[i][1] = message;
            }
            if(soilTemp >= 15 && soilTemp < 20){
                message = "🌡️ Cool soil detected at "+soilTemp+" °C. Mulching can help retain warmth.";
                messageQueueST[i][0] = time;
                messageQueueST[i][1] = message;
            }
            if(soilTemp < 15){
                message = "❄️ Low soil temperature detected ("+soilTemp+" °C). Protect root systems.";
                messageQueueST[i][0] = time;
                messageQueueST[i][1] = message;
            }
            if(rain > 10 && windSpeed > 30){
                message = "⛈️ Severe weather alert! Heavy rain and strong winds expected at "+time+".";
                messageQueueAC[i][0] = time;
                messageQueueAC[i][1] = message;
            }
            if(relativeHumidity > 85 && temp > 28){
                message = "🔥 High humidity and heat detected! Risk of plant diseases";
                messageQueueAC[i][0] = time;
                messageQueueAC[i][1] = message;
            }

        }


        // customize current time to hour
        LocalTime truncatedTime = LocalTime.now().truncatedTo(ChronoUnit.HOURS);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh a");
        String formattedTime = truncatedTime.format(formatter);


        if(formattedTime.equals("04 AM") || formattedTime.equals("05 AM")){

            HashSet<String> set = new HashSet<>();


            for(int i =0; i <messageQueue.length; i++){

                //System.out.println(messageQueue[i][0].equals("06 AM"));
                if (    messageQueue[i][0].equals("06 AM") ||
                        messageQueue[i][0].equals("07 AM") ||
                        messageQueueRP[i][0].equals("06 AM") ||
                        messageQueueRP[i][0].equals("07 AM") ||
                        messageQueueRH[i][0].equals("06 AM") ||
                        messageQueueRH[i][0].equals("07 AM") ||
                        messageQueueWS[i][0].equals("06 AM") ||
                        messageQueueWS[i][0].equals("07 AM") ||
                        messageQueueST[i][0].equals("06 AM") ||
                        messageQueueST[i][0].equals("07 AM")

                ) {

                    set.add(messageQueue[i][1]);
                    set.add(messageQueueRP[i][1]);
                    set.add(messageQueueRH[i][1]);
                    set.add(messageQueueST[i][1]);
                    set.add(messageQueueWS[i][1]);

                }

            }

            for(String item : set){
                System.out.println(item);
                firebaseMessagingService.sendNotificationByToken(item);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }

        }else if(formattedTime.equals("06 AM") || formattedTime.equals("07 AM")){

            HashSet<String> set = new HashSet<>();

            for(int i=0; i<messageQueue.length; i++){

                if( messageQueue[i][0].equals("08 AM") ||
                    messageQueue[i][0].equals("09 AM") ||
                    messageQueueRH[i][0].equals("08 AM") ||
                    messageQueueRH[i][0].equals("09 AM") ||
                    messageQueueRP[i][0].equals("08 AM") ||
                    messageQueueRP[i][0].equals("09 AM") ||
                    messageQueueWS[i][0].equals("08 AM") ||
                    messageQueueWS[i][0].equals("09 AM") ||
                    messageQueueST[i][0].equals("08 AM") ||
                    messageQueueST[i][0].equals("09 AM")
                ){

                    set.add(messageQueue[i][1]);
                    set.add(messageQueueRP[i][1]);
                    set.add(messageQueueRH[i][1]);
                    set.add(messageQueueST[i][1]);
                    set.add(messageQueueWS[i][1]);
                }

            }

            for(String item: set){
                System.out.println(item);
                firebaseMessagingService.sendNotificationByToken(item);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }
        }else if(formattedTime.equals("08 AM") || formattedTime.equals("09 AM")){

            HashSet<String> set = new HashSet<>();

            for(int i=0; i< messageQueue.length; i++){
                if(
                    messageQueue[i][0].equals("10 PM") ||
                    messageQueue[i][0].equals("11 PM") ||
                    messageQueueRH[i][0].equals("10 PM") ||
                    messageQueueRH[i][0].equals("11 PM") ||
                    messageQueueRP[i][0].equals("10 PM") ||
                    messageQueueRP[i][0].equals("11 PM") ||
                    messageQueueWS[i][0].equals("10 PM") ||
                    messageQueueWS[i][0].equals("11 PM") ||
                    messageQueueST[i][0].equals("10 PM") ||
                    messageQueueST[i][0].equals("11 PM")
                ){
                    set.add(messageQueue[i][1]);
                    set.add(messageQueueRP[i][1]);
                    set.add(messageQueueRH[i][1]);
                    set.add(messageQueueST[i][1]);
                    set.add(messageQueueWS[i][1]);

                }
            }

            for(String item: set){
                System.out.println(item);
                firebaseMessagingService.sendNotificationByToken(item);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }
        }else if(formattedTime.equals("10 AM") || formattedTime.equals("11 AM")){
            System.out.println("Time is :"+ formattedTime);
            HashSet<String> set = new HashSet<>();

            for(int i=0; i< messageQueue.length; i++){
                if(
                    messageQueue[i][0].equals("12 PM") ||
                    messageQueue[i][0].equals("01 PM") ||
                    messageQueueRH[i][0].equals("12 PM") ||
                    messageQueueRH[i][0].equals("01 PM") ||
                    messageQueueRP[i][0].equals("12 PM") ||
                    messageQueueRP[i][0].equals("01 PM") ||
                    messageQueueWS[i][0].equals("12 PM") ||
                    messageQueueWS[i][0].equals("01 PM") ||
                    messageQueueST[i][0].equals("12 PM") ||
                    messageQueueST[i][0].equals("01 PM")
                ){
                    set.add(messageQueue[i][1]);
                    set.add(messageQueueRP[i][1]);
                    set.add(messageQueueRH[i][1]);
                    set.add(messageQueueST[i][1]);
                    set.add(messageQueueWS[i][1]);

                }
            }

            for(String item: set){
                System.out.println(item);
                firebaseMessagingService.sendNotificationByToken(item);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }
        }else if(formattedTime.equals("12 PM") || formattedTime.equals("01 PM")){
            HashSet<String> set = new HashSet<>();

            for(int i=0; i< messageQueue.length; i++){
                if(
                    messageQueue[i][0].equals("02 PM") ||
                    messageQueue[i][0].equals("03 PM") ||
                    messageQueueRH[i][0].equals("02 PM") ||
                    messageQueueRH[i][0].equals("03 PM") ||
                    messageQueueRP[i][0].equals("02 PM") ||
                    messageQueueRP[i][0].equals("03 PM") ||
                    messageQueueWS[i][0].equals("02 PM") ||
                    messageQueueWS[i][0].equals("03 PM") ||
                    messageQueueST[i][0].equals("02 PM") ||
                    messageQueueST[i][0].equals("03 PM")
                ){
                    set.add(messageQueue[i][1]);
                    set.add(messageQueueRP[i][1]);
                    set.add(messageQueueRH[i][1]);
                    set.add(messageQueueST[i][1]);
                    set.add(messageQueueWS[i][1]);

                }
            }

            for(String item: set){
                System.out.println(item);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }


        }else if(formattedTime.equals("02 PM") || formattedTime.equals("03 PM")){
            HashSet<String> set = new HashSet<>();

            for(int i=0; i< messageQueue.length; i++){
                if(
                    messageQueue[i][0].equals("04 PM") ||
                    messageQueue[i][0].equals("05 PM") ||
                    messageQueueRH[i][0].equals("04 PM") ||
                    messageQueueRH[i][0].equals("05 PM") ||
                    messageQueueRP[i][0].equals("04 PM") ||
                    messageQueueRP[i][0].equals("05 PM") ||
                    messageQueueWS[i][0].equals("04 PM") ||
                    messageQueueWS[i][0].equals("05 PM") ||
                    messageQueueST[i][0].equals("04 PM") ||
                    messageQueueST[i][0].equals("05 PM")
                ){
                    set.add(messageQueue[i][1]);
                    set.add(messageQueueRP[i][1]);
                    set.add(messageQueueRH[i][1]);
                    set.add(messageQueueST[i][1]);
                    set.add(messageQueueWS[i][1]);
                }
            }

            for(String item: set){
                System.out.println(item);
                firebaseMessagingService.sendNotificationByToken(item);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }

        }else if(formattedTime.equals("04 PM") || formattedTime.equals("05 PM")){
            HashSet<String> set = new HashSet<>();

            for(int i=0; i< messageQueue.length; i++){
                if(
                    messageQueue[i][0].equals("06 PM") ||
                    messageQueue[i][0].equals("07 PM") ||
                    messageQueueRH[i][0].equals("06 PM") ||
                    messageQueueRH[i][0].equals("07 PM") ||
                    messageQueueRP[i][0].equals("06 PM") ||
                    messageQueueRP[i][0].equals("07 PM") ||
                    messageQueueWS[i][0].equals("06 PM") ||
                    messageQueueWS[i][0].equals("07 PM") ||
                    messageQueueST[i][0].equals("06 PM") ||
                    messageQueueST[i][0].equals("07 PM")
                ){
                    set.add(messageQueue[i][1]);
                    set.add(messageQueueRP[i][1]);
                    set.add(messageQueueRH[i][1]);
                    set.add(messageQueueST[i][1]);
                    set.add(messageQueueWS[i][1]);
                }
            }

            for(String item : set){
                System.out.println(item);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }

        }else if(formattedTime.equals("06 PM") || formattedTime.equals("07 PM")){
            System.out.println("Time: "+ formattedTime);
            HashSet<String> set = new HashSet<>();

            for(int i=0; i< messageQueue.length; i++){
                if(
                    messageQueue[i][0].equals("08 PM") ||
                    messageQueue[i][0].equals("09 PM") ||
                    messageQueueRH[i][0].equals("08 PM") ||
                    messageQueueRH[i][0].equals("09 PM") ||
                    messageQueueRP[i][0].equals("08 PM") ||
                    messageQueueRP[i][0].equals("09 PM") ||
                    messageQueueWS[i][0].equals("08 PM") ||
                    messageQueueWS[i][0].equals("09 PM") ||
                    messageQueueST[i][0].equals("08 PM") ||
                    messageQueueST[i][0].equals("09 PM")
                ){
                    set.add(messageQueue[i][1]);
                    set.add(messageQueueRP[i][1]);
                    set.add(messageQueueRH[i][1]);
                    set.add(messageQueueST[i][1]);
                    set.add(messageQueueWS[i][1]);
                }
            }

            for(String item : set){
                System.out.println(item);
                firebaseMessagingService.sendNotificationByToken(item);
                try{
                    Thread.sleep(1000);
                }catch(InterruptedException e){
                    e.printStackTrace();
                }
            }
        }else{
            String notificationMessage = "Notification service temporary stopped until morning 4 AM\n Stay Tuned!";
            System.out.println(notificationMessage);
            firebaseMessagingService.sendNotificationByToken(notificationMessage);
        }


    }


}
