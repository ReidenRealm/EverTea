package com.EverTea.EverTea.AdvancedWeather.service;

import com.EverTea.EverTea.AdvancedWeather.webSocket.WeatherDataWebSocketHandler;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DynamicTableService {
    @Autowired
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    private WeatherNotificationService service;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private WeatherDataWebSocketHandler webSocketHandler;


    public DynamicTableService(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<List<Object>> getAllDataFromTable(String location){
        String sql = "SELECT * FROM "+ location;

        List<Map<String,Object>> rows = jdbcTemplate.queryForList(sql);

        List<List<Object>> weatherDataList =  rows.stream()
                .map(row -> row.values().stream().toList())
                .toList();


        System.out.println("Weather Data in List: "+weatherDataList);
        service.getNotificationMessage(weatherDataList);
        notifyWeatherDataWebSocket(weatherDataList);

        return rows.stream()
                .map(row -> row.values().stream().toList())
                .toList();
    }


    public void notifyWeatherDataWebSocket(List<List<Object>> data){
        try{
            //convert list to JSON String
            String dataJson = objectMapper.writeValueAsString(data);

            String messageJson = String.format("{\"type\": \"weather_update\", \"data\": %s}",dataJson);

            webSocketHandler.broadCast(messageJson);
            System.out.println("WeatherData sent successfully");

        }catch(Exception e){
            System.out.println("Error while notify the web socket: "+ e.getMessage());
        }
    }

}
