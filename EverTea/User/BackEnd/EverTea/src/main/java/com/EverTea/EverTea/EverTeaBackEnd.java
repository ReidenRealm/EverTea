package com.EverTea.EverTea;

import com.EverTea.EverTea.Config.FireBaseConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableJpaRepositories(basePackages = {"com.EverTea.EverTea.PlantationJourneyInstructions.repo","com.EverTea.EverTea.GrowthTracker.repository","com.EverTea.EverTea.Authentication.repo","com.EverTea.EverTea.PlantationInstructionFCM.repo"})

/*@EnableScheduling is an annotation in Spring Framework that enables the scheduling of tasks.
It allows your application to run scheduled tasks automatically at defined intervals or specific times.*/
@Import(FireBaseConfig.class)
public class EverTeaBackEnd {

	public static void main(String[] args) {
		SpringApplication.run(EverTeaBackEnd.class, args);
		System.out.println("EverTea User Backend Started");
	}

//	@Bean
//	FirebaseMessaging firebaseMessaging() throws IOException {
//		System.out.println("firebaseMessaging method called");
//		GoogleCredentials googleCredentials = GoogleCredentials
//				.fromStream(new ClassPathResource("firebase-service-account.json").getInputStream());
//
//		GoogleCredentials googleCredentialsPlantationJourneyInstructions = GoogleCredentials
//				.fromStream(new ClassPathResource("plantation-journey-instruction-firebase-adminsdk-fbsvc-efffabe473.json").getInputStream());
//
//		FirebaseOptions firebaseOptions = FirebaseOptions.builder()
//				.setCredentials(googleCredentials).build();
//		FirebaseApp firebaseApp = FirebaseApp.initializeApp(firebaseOptions, "my-app");
//
//		FirebaseOptions firebaseOptionsPlantationJourneyInstructions = FirebaseOptions.builder()
//				.setCredentials(googleCredentialsPlantationJourneyInstructions).build();
//		FirebaseApp firebaseAppPlantationJourneyInstructions = FirebaseApp.initializeApp(firebaseOptions, "Plantation.Journey.Instructions");
//
//		return FirebaseMessaging.getInstance(firebaseApp);
//	}







}
