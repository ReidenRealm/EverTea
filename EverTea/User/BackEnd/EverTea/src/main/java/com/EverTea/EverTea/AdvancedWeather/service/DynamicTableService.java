package com.EverTea.EverTea.AdvancedWeather.service;

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


    public DynamicTableService(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<List<Object>> getAllDataFromTable(String location){
        String sql = "SELECT * FROM "+ location;

        List<Map<String,Object>> rows = jdbcTemplate.queryForList(sql);

        List<List<Object>> weatherDataList =  rows.stream()
                .map(row -> row.values().stream().toList())
                .toList();

//        List<List<Integer>> convertedData = weatherDataList.stream()
//                        .map(row -> row.stream()
//                                .map(this::convertToCorrectType)
//                                .collect(Collectors.toList()))
//                .collect(Collectors.toList());
//
//        service.getNotificationMessage(convertedData);
//        System.out.println("Converted Data: "+convertedData);

        System.out.println("Weather Data in List: "+weatherDataList);
        service.getNotificationMessage(weatherDataList);

        return rows.stream()
                .map(row -> row.values().stream().toList())
                .toList();
    }

    public Integer convertToCorrectType(Object obj){
        if(obj instanceof Number){
            return ((Number) obj).intValue(); // works for Integer, Long, Double
        }else if(obj instanceof String){
            //System.out.println("Dynamic"+obj);
//            String[] parts = ((String) obj).split("[: ]");
//            String hour = parts[0];
//            String period = parts[2];
//            String str = hour + period;

            String str = ((String) obj).split(":")[0];

            if(str.matches("-?\\d+")){
                String[] parts = ((String) obj).split("[: ]");
                String hour = parts[0];
                String period = parts[2];
                String hourPeriod = hour + period;
                System.out.println("Time: "+ hourPeriod);
                return Integer.parseInt(hourPeriod);
            }else{
                return 0;
            }
        }else{
            throw new IllegalArgumentException("Unexpected data type: "+obj.getClass());
        }
    }
}
