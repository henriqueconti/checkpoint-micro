package com.servico.ativo.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.servico.ativo.dto.EmailDto;
import com.servico.ativo.model.EmailModel;
import com.servico.ativo.service.EmailService;

@RestController
public class EmailController {

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@PostMapping("/send-email")
	public ResponseEntity<EmailModel> sendEmail(@RequestBody EmailDto model){
		EmailModel email = modelMapper.map(model, EmailModel.class);
		emailService.sendEmail(email);
		
		return new ResponseEntity<EmailModel>(email, HttpStatus.OK);
	}
	
}
