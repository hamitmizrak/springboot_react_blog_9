package com.hamitmizrak.bean;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// LOMBOK
@RequiredArgsConstructor // Injection
@Log4j2

@Configuration
public class UserCommandLineRunner {

    // 1.YOL
    @Bean
    CommandLineRunner createLogin() { //UserRegisterServiceImpl service
        return (args) -> {
        };
    } //end CommandLineRunner
} //end class
