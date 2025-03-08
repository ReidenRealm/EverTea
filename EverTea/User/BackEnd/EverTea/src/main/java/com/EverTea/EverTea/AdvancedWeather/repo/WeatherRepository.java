package com.EverTea.EverTea.AdvancedWeather.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public class WeatherRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean doesCityTableExist(String cityName){
        String tableName =  cityName
                .toLowerCase()
                .replaceAll("[^a-z0-9_]", "_")
                .replaceAll("_+","_")
                .replaceAll("^_|_$","")
                + "_weather";

        String sql = "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = ?";

        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, tableName);

        return count > 0;
    }

    public void createCityTableIfTableNotExist(String cityName){
        String tableName =  cityName
                .toLowerCase()
                .replaceAll("[^a-z0-9_]", "_")
                .replaceAll("_+","_")
                .replaceAll("^_|_$","")
                + "_weather";

        String createTableSql =    "CREATE TABLE IF NOT EXISTS " + tableName + " ("
                + "id INT AUTO_INCREMENT PRIMARY KEY, "
                + "city VARCHAR(100) NOT NULL, "
                + "date_time VARCHAR(50) NOT NULL, "
                + "cloud_cover VARCHAR(50), "
                + "current_temp DECIMAL(5,2), "
                + "maximum_temp DECIMAL(5,2), "
                + "minimum_temp DECIMAL(5,2), "
                + "day_light DECIMAL(5,2), "
                + "sun_shine DECIMAL(5,2), "
                + "uv_index_max DECIMAL(5,2),"
                + "precipitation_sum DECIMAL(5,2), "
                + "rain_sum DECIMAL(5,2), "
                + "wind_speed_max DECIMAL(5,2),"
                + "wind_direction VARCHAR(50)"
                + ")";

        System.out.println(tableName + " created");
        jdbcTemplate.execute(createTableSql);
    }

    public void insertWeatherData(String cityName, String dateTime, String cloud_cover, double currentTemp,double tempMax, double tempMin, long dayLight, long sunShine, double uvIndexSum, double precipitationSum, double rainSum,double windSpeedMax, String windDirection){
        String tableName =  cityName
                .toLowerCase()
                .replaceAll("[^a-z0-9_]", "_")
                .replaceAll("_+","_")
                .replaceAll("^_|_$","")
                + "_weather";

        String sql = "INSERT INTO "+ tableName + " (city, date_time,cloud_cover,current_temp, maximum_temp, minimum_temp, day_light, sun_shine, uv_index_max, precipitation_sum, rain_sum, wind_speed_max, wind_direction) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";

        jdbcTemplate.update(sql, cityName, dateTime, cloud_cover,currentTemp, tempMax, tempMin, dayLight, sunShine,uvIndexSum, precipitationSum, rainSum, windSpeedMax, windDirection);

    }
}
