package com.EverTea.EverTea.Config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
public class ThreadConfig {

    // TaskExecutor for plantation instruction feature
    @Bean(name = "plantationTaskExecutor")
    public TaskExecutor plantationTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(2); // Adjust according to your load
        executor.setMaxPoolSize(4);
        executor.setQueueCapacity(500);
        executor.setThreadNamePrefix("PlantationTask-");
        executor.initialize();
        return executor;
    }


    // TaskExecutor for weather task
    @Bean(name = "weatherTaskExecutor")
    public TaskExecutor weatherTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(2); // Adjust according to your load
        executor.setMaxPoolSize(4);
        executor.setQueueCapacity(500);
        executor.setThreadNamePrefix("WeatherTask-");
        executor.initialize();
        return executor;
    }

}
