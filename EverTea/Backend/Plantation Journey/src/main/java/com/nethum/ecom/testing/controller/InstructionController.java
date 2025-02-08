package com.nethum.ecom.testing.controller;

import com.nethum.ecom.testing.Exceptions.IDNotFoundException;
import com.nethum.ecom.testing.model.Instruction;
import com.nethum.ecom.testing.service.InstructionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ever-tea/instructions/")
@CrossOrigin
public class InstructionController {

    @Autowired
    private InstructionService instructionService;  //Autowired to InstructionService

    //EndPoint to get instructions for tea type
    /**
     *
     * @param teaTypeId
     * @return List<instruction>
     * @throws IDNotFoundException
     */
    @GetMapping("get-instructions/tea-type/{teaTypeId}")
    public List<Instruction> getInstructionsByTeaTypeId(@PathVariable Long teaTypeId) throws IDNotFoundException{
        return instructionService.getInstructionByTeaTypeId(teaTypeId);
    }

    //EndPoint to add new instructions for tea type
    /**
     *
     * @param instruction
     * @return Instruction
     */
    @PostMapping("post-instructions")
    public Instruction setInstructionsByTeaTypeId(@RequestBody Instruction instruction){
        return instructionService.saveInstructions(instruction);
    }
}
