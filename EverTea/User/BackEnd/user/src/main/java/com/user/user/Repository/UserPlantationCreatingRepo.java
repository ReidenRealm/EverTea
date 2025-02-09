package com.user.user.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.user.user.DTO.UserPlantationCreatingDTO;

@Repository
public class UserPlantationCreatingRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public UserPlantationCreatingDTO districtCheckerMain(String district) {
        String sqlQuery = "SELECT * FROM district WHERE districtname = ?"; // Check main districts

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                UserPlantationCreatingDTO plant = new UserPlantationCreatingDTO();
                plant.setDistrict(rs.getString("districtname"));
                System.out.println("District Found: " + district);
                return plant;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Invalid District: " + district);
            return null;
        }
    }
    
    public UserPlantationCreatingDTO recomendedTeaPlantMain(String district) {
        String sqlQuery = "SELECT mainplant FROM district WHERE districtname = ?"; // Check recommended TeaModels

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                UserPlantationCreatingDTO plantmain = new UserPlantationCreatingDTO();
                plantmain.setTeaNameMainDTO(rs.getString("mainplant"));
                return plantmain;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("No recommended TeaModels for: " + district);
            return null;
        }
    }

    public UserPlantationCreatingDTO recomendedTeaPlantSubs(String district) {
        String sqlQuery = "SELECT mainplant FROM district WHERE districtname = ?"; // Check recommended TeaModels

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                UserPlantationCreatingDTO plantmain = new UserPlantationCreatingDTO();
                plantmain.setTeaNameMainDTO(rs.getString("mainplant"));
                return plantmain;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("No recommended TeaModels for: " + district);
            return null;
        }
    }


    public UserPlantationCreatingDTO teaModelPrice(Integer teaModel){
        String sqlQuery = "SELECT price FROM teamodels WHERE teaid = ?"; // Check TeaModel Price

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{teaModel}, (rs, rowNum) -> {
                UserPlantationCreatingDTO teaModelPriceValue = new UserPlantationCreatingDTO();
                teaModelPriceValue.setTeaModelPrice(rs.getDouble("price"));
                return teaModelPriceValue;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Price for the teamodel: " );
            return null;
        }
    }

    public UserPlantationCreatingDTO avgPlantsForADistrict(String district){
        String sqlQuery = "SELECT avgplants FROM district WHERE districtname = ?"; // Check TeaModel Price
        UserPlantationCreatingDTO avgPlantsForADistrictValue = new UserPlantationCreatingDTO();

        try {
            return jdbcTemplate.queryForObject(sqlQuery, new Object[]{district}, (rs, rowNum) -> {
                avgPlantsForADistrictValue.setAvgPlantsForADistrict(rs.getInt("avgplants"));
                return avgPlantsForADistrictValue;
            });
        } catch (EmptyResultDataAccessException e) {
            System.out.println("Avg Plants for that district: " + avgPlantsForADistrictValue.getAvgPlantsForADistrict() );
            return null;
        }
    }

    
}
