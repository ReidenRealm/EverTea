package com.EverTea.EverTea.PlantationInstructionFCM;

import com.EverTea.EverTea.Authentication.model.User;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class UserDevice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userDeviceId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "fcm_token")
    private String fcmToken;

    @Column(name = "device_type")
    private String deviceType;  // "Mobile", "Tablet", etc.

    @Column(name = "created_at")
    private String createdAt;  // Timestamp of when the device was registered

    @Column
    private String email;


    public Long getUserDeviceId() {
        return userDeviceId;
    }

    public void setUserDeviceId(Long userDeviceId) {
        this.userDeviceId = userDeviceId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getFcmToken() {
        return fcmToken;
    }

    public void setFcmToken(String fcmToken) {
        this.fcmToken = fcmToken;
    }

    public String getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(String deviceType) {
        this.deviceType = deviceType;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
