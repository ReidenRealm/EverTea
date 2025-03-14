package com.EverTea.EverTea.AdvancedWeather.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

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

        service.getNotificationMessage(weatherDataList);

        return rows.stream()
                .map(row -> row.values().stream().toList())
                .toList();
    }
}
