package com.hamitmizrak.bean;

import com.hamitmizrak.business.dto.BlogDto;
import com.hamitmizrak.data.entity.BlogEntity;
import com.hamitmizrak.data.repository.IBlogRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

// LOMBOK
@RequiredArgsConstructor // Injection
@Log4j2

@Configuration
public class BlogCommandLineRunner {

    private final ModelMapperBean modelMapperBean;

    // 1.YOL
    @Bean
    CommandLineRunner createLogin(IBlogRepository iBlogRepository) { //UserRegisterServiceImpl service
        return (args) -> {
            BlogDto blogDto;
            List<BlogDto> list = new ArrayList<>();
            for (int i = 1; i <= 5; i++) {
                blogDto = BlogDto.builder()
                        .header("header " + UUID.randomUUID().toString())
                        .content("content " + UUID.randomUUID().toString())
                        .build();
                list.add(blogDto);
                BlogEntity entity = iBlogRepository.save(modelMapperBean.modelMapperMethod().map(blogDto, BlogEntity.class));
                blogDto.setId(entity.getId());
            }
            ; // end for
        }; //end return
    } //end CommandLineRunner
} //end class
