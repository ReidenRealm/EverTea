package com.EverTea.EverTea.PlantationJourneyInstructions.service;

import com.EverTea.EverTea.Authentication.model.User;
import com.EverTea.EverTea.PlantationInstructionFCM.FirebaseInstructionService;
import com.EverTea.EverTea.PlantationInstructionFCM.UserDevice;
import com.EverTea.EverTea.PlantationInstructionFCM.repo.UserDeviceRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.EverTea.EverTea.PlantationJourneyInstructions.model.Instruction;
import com.EverTea.EverTea.PlantationJourneyInstructions.model.InstructionExecution;
import com.EverTea.EverTea.PlantationJourneyInstructions.model.Plantation;
import com.EverTea.EverTea.PlantationJourneyInstructions.repo.InstructionExecutionRepository;
import com.EverTea.EverTea.PlantationJourneyInstructions.repo.InstructionRepository;
import com.EverTea.EverTea.PlantationJourneyInstructions.repo.TeaTypeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import com.EverTea.EverTea.PlantationJourneyInstructions.repo.PlantationRepository;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlantationService {

    @Autowired
    private PlantationRepository plantationRepository;

    @Autowired
    private TeaTypeRepository teaTypeRepository;

    @Autowired
    private InstructionRepository instructionRepository;

    @Autowired
    private InstructionExecutionRepository instructionExecutionRepository;

    @Autowired
    private ObjectMapper objectMapper;  //ObjectMapper is a Jackson library class used to convert JSON to Java objects

    @Autowired
    private FirebaseInstructionService firebaseInstructionService;
    @Autowired
    private UserDeviceRepository userDeviceRepository;

//    public void checkForWatering() {
//        List<Plantation> plantationList = plantationRepository.findAll();
//        for (Plantation plantation : plantationList) {
//            LocalDateTime startTime = plantation.getPlantationStartDateTime();
//            Duration duration = Duration.between(startTime, LocalDateTime.now());
//
//            if (duration.toHours() >= 72) { // Only plantations that need watering
//                System.out.println("Plantation " + plantation.getPlantationId() + " needs watering");
//            }
//
//        }
//    }

    // Retrieving plantation details from the database to determine which instructions should be executed
    public void scanPlantationsForInstructing(){
        List<Plantation> plantationList = plantationRepository.findAll(); //get all the plantations from plantation table and store a List.
        System.out.println(plantationList);
       // firebaseInstructionService.sendInstructionNotification("dqZ8jf9tQ7C0rsSlv3TO5L:APA91bEy0kSax2zyNfYjvtpv-X7g0FZg1sZUAbThaHqGvXZebf5LvWeVqxFyD4i4Y4Xn-UiYM13uCn39P5EBbLXuV21F88DegV7feZxf66UZ6VNFPjr30QY", "Nethum","fertilizing", "watering perfect");
        for(Plantation plantation : plantationList){

            System.out.println(plantation.getPlantationName());

            LocalDateTime startTime = plantation.getPlantationStartDateTime();  //get and initialize plantation start date and time.
            LocalDateTime currentTime = LocalDateTime.now();
            Duration duration = Duration.between(startTime, currentTime); //get difference between present time and plantation started time
//            System.out.println("The time between starting data and present  : "+duration.toDays());
            long ageofPlantation = duration.toDays();

            // Check if the plantation's trigger day has arrived
            // Assuming userToken is fetched from the database or user session



            List<Instruction>InstructionList = instructionRepository.findByTeaType_TeaTypeId(plantation.getTeaType().getTeaTypeId());

            for(Instruction instructionDay : InstructionList){
                System.out.println("Instruction ID : "+instructionDay.getInstructionId()+ " Checking........");

                if(ageofPlantation>=instructionDay.getStartDay() && ageofPlantation <= instructionDay.getEndDay()){
                    System.out.println("Instruction ID : "+instructionDay.getInstructionId()+ " still valid . Instruction not end.");
                    if(!isExecutedBefore(plantation.getPlantationId(), instructionDay.getInstructionId(),instructionDay.getRecurringFrequencyWeek(), currentTime)){

                        List<String> userTokens = getUserTokenForPlantation(plantation); // Get all FCM tokens associated with the user

                        executeInstruction(plantation,plantation.getPlantationName(), instructionDay.getAction(), instructionDay.getDetails(),userTokens);
                        markInstruction(instructionDay.getInstructionId(), plantation.getPlantationId(), LocalDateTime.now());
                    }
                }
                else {
//                    System.out.println("Instruction ID : "+instructionDay.getInstructionId()+ " not valid. ");
                }



            }
//
//
//            /**
//             * getTeaTypeId() will return Teatypes associated with given id and it store by Optional with TeaType instance
//             * if there is tea type associate with teaTypeId return TeaType if not return null.
//             */
//            Optional<TeaType> teaTypeOptional = teaTypeRepository.findById(plantation.getTeaType().getTeaTypeId());
//
//
//            if(teaTypeOptional.isPresent()){    //if TeaTypeOptional is not null it will be executed code in if
//                TeaType teaType = teaTypeOptional.get();    //Retrieve actual object in teaTypeOptional after makesure TeaTypeOptional contain a value
//                long lifeCycleWeeks = teaType.getLifecycleWeeks();
//
//                if(ageofPlantation < lifeCycleWeeks) {   // check whether if the plantation completed its Plantation Journey or not
//                    System.out.println(plantation.getPlantationName() + " Plantation is Still going");
//
//
//                    String fertilizerScheduleJson = teaType.getFertilizerSchedule();    // Retrieve fertilizerSchedule associated with current TeaType Object
//
//                    Map<String, Map<String, Object>> fertilizerSchedule = objectMapper.readValue(fertilizerScheduleJson, new TypeReference<Map<String, Map<String, Object>>>() {
//                    });
//
//                    System.out.println(fertilizerScheduleJson);
//                    System.out.println("++++++++++++++++++++++++++++++++++++++++++++");
//                    System.out.println(fertilizerSchedule);
//
//
//
//                }
//
//            }

//            System.out.println("                                         ");
//            System.out.println("                                         ");
//            System.out.println("                                         ");
        }

    }

    private void markInstruction(Long instructionId, Long plantationId, LocalDateTime executedTime) {
        InstructionExecution instructionExecution = new InstructionExecution(instructionId,plantationId, executedTime);
        instructionExecutionRepository.save(instructionExecution);
    }

    private void executeInstruction(Plantation plantation,String plantationName, String action, String details, List<String> userTokens) {
        System.out.println("--------------Instruction Execution---------------");
        System.out.println("Plantation Name : "+plantationName);
        System.out.println("Action : "+ action);
        System.out.println("Details : "+details);



        // Loop through each token and send the notification
        for (String token : userTokens) {
            String response = firebaseInstructionService.sendInstructionNotification(token, plantationName, action, details);
            System.out.println("Response: " + response);
        }
    }
    //dqZ8jf9tQ7C0rsSlv3TO5L:APA91bEy0kSax2zyNfYjvtpv-X7g0FZg1sZUAbThaHqGvXZebf5LvWeVqxFyD4i4Y4Xn-UiYM13uCn39P5EBbLXuV21F88DegV7feZxf66UZ6VNFPjr30QY


    private boolean isExecutedBefore(Long plantationId, Long instructionId,int requringWeek , LocalDateTime currentTime) {

        Plantation plantation = plantationRepository.findById(plantationId)
                .orElseThrow(() -> new EntityNotFoundException("Plantation not found for id: " + plantationId));

        Instruction instruction = instructionRepository.findById(instructionId)
                .orElseThrow(() -> new EntityNotFoundException("Instruction not found for id: " + instructionId));

        Optional<InstructionExecution> instructionExecutionOptional =
                instructionExecutionRepository.findTopByPlantationAndInstructionOrderByExecutionDateDesc(plantation,instruction);


        if(instructionExecutionOptional.isPresent()){
            InstructionExecution instructionExecution = instructionExecutionOptional.get();

            Duration timeDifference = Duration.between(instructionExecution.getExecutionDate(), currentTime);
            long timeDiffereceBydays = timeDifference.toDays();

            if(timeDiffereceBydays >= requringWeek){
//                System.out.println("return false for" + plantation.getPlantationName());
                return false;
            }
            else{
//                System.out.println("Time differce "+timeDiffereceBydays+" "+"require week "+requringWeek+"return true for "+ plantation.getPlantationName());
                return true;
            }


        }
        else {
            return false;

        }
    }

    private List<String> getUserTokenForPlantation(Plantation plantation) {
        // Fetch the user associated with the plantation
        User user = plantation.getUserId();  // Adjust according to your system's design

        // Fetch the devices associated with the user (Assuming UserDevice has a relationship with User)
        List<UserDevice> userDevices = userDeviceRepository.findByUser(user);  // Ensure a method exists to get devices by user

        List<String> tokens = new ArrayList<>();
        if (userDevices != null && !userDevices.isEmpty()) {
            for (UserDevice userDevice : userDevices) {
                tokens.add(userDevice.getFcmToken()); // Add each device's FCM token to the list
            }
        } else {
            throw new RuntimeException("No devices found for user: " + user.getEmail());
        }
        return tokens;
    }



    @Scheduled(fixedRate = 6000)
    public void scanPlantations() throws JsonProcessingException{
        scanPlantationsForInstructing();
        System.out.println("scan plantation running ==========================");
    }





//    @Scheduled(fixedRate = 1000)
//    @Override
//    public void scheduledWateringCheck(){
//        System.out.println("Scheduled triggered");
//        checkForWatering();
//    }

//    @Override
//    public void triggermanually(){
//        scheduledWateringCheck();
//    }

}

