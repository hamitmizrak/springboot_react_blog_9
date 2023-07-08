package com.hamitmizrak.controller.api;

import com.hamitmizrak.business.dto.BlogDto;
import com.hamitmizrak.business.services.impl.BlogServicesImpl;
import com.hamitmizrak.error.ApiResult;
import com.hamitmizrak.exception.ResourceBadRequestException;
import com.hamitmizrak.exception.ResourceNotFoundException;
import com.hamitmizrak.util.FrontendURL;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

// LOMBOK
@Log4j2
@RequiredArgsConstructor


// API
@RestController
@RequestMapping("/blog/api/v1/")
@CrossOrigin(origins = FrontendURL.FRONTEND_URL)
public class BlogApiImpl implements IBlogApi<BlogDto>{

    // INJECTION
    private final BlogServicesImpl blogServices;

    // ERROR
    private ApiResult apiResult;

    /////////////////////////////////////////////////////////////////////
    // ALL CREATE
    // http://localhost:2222/blog/api/v1/speed/10
    @Override
    @GetMapping("/speed/{data}")
    public ResponseEntity<List<BlogDto>> speedData(@PathVariable(name = "data") Long data) {
        return ResponseEntity.ok(blogServices.speedData(data));
    }

    // ALL DELETE
    // http://localhost:2222/blog/api/v1/delete/all
    @Override
    @DeleteMapping("/delete/all")
    public ResponseEntity<String> allDelete() {
        return  ResponseEntity.ok(blogServices.allDelete());
    }

    /////////////////////////////////////////////////////////////////////
    // CREATE
    // http://localhost:2222/blog/api/v1/create
    @Override
    @PostMapping("/create")
    public ResponseEntity<?> blogServiceCreate(@Valid @RequestBody BlogDto blogDto) {
        if(blogDto==null){
            throw new ResourceNotFoundException(" Blog Dto null ");
        }
        return ResponseEntity.ok(blogServices.blogServiceCreate(blogDto));
    }

    // LIST
    // http://localhost:2222/blog/api/v1/list
    @Override
    @GetMapping("/list")
    public ResponseEntity<List<BlogDto>> blogServiceList() {
        return ResponseEntity.ok(blogServices.blogServiceList());
    }

    // FIND BY ID
    // http://localhost:2222/blog/api/v1/find
    // http://localhost:2222/blog/api/v1/find/0
    // http://localhost:2222/blog/api/v1/find/1
    @Override
    @GetMapping("/find/{id}")
    public ResponseEntity<BlogDto> blogServiceFindById(@PathVariable(name = "id") Long id) {
        // id=0 id=null
        return ResponseEntity.ok(blogServices.blogServiceFindById(id));
    }

    // DELETE
    @Override
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> blogServiceDeleteId
        (@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(blogServices.blogServiceDeleteId(id));
    }

    // UPDATE
    @Override
    @PutMapping("/update/{id}")
    public ResponseEntity<BlogDto> blogServiceUpdateId
       (@PathVariable(name = "id") Long id, @Valid @RequestBody BlogDto blogDto) {
        return ResponseEntity.ok(blogServices.blogServiceUpdateId(id,blogDto));
    }
} //end class
