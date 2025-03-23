package com.EverTea.EverTea.PlantationJourneyInstructions.model;

import com.EverTea.EverTea.Authentication.model.User;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class UserDevice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "fcm_token")
    private String fcmToken;

    @Column(name = "device_type")
    private String deviceType;  // "Mobile", "Tablet", etc.

    @Column(name = "created_at")
    private String createdAt;  // Timestamp of when the device was registered
}
