package com.hamitmizrak.controller.api;

import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

// D: Dto
public  interface IBlogApi <D>{


    public ResponseEntity<List<D>> speedData(Long id);
    public ResponseEntity<String> allDelete();
    //////////////////////////////////////
    // CREATE
    public ResponseEntity<?>  blogServiceCreate(D d);

    // LIST
    public ResponseEntity<List<D>> blogServiceList();

    // FIND ID
    public ResponseEntity<D> blogServiceFindById(Long id);

    // DELETE
    public ResponseEntity<Map<String,Boolean>> blogServiceDeleteId(Long id);

    // UPDATE
    public ResponseEntity<D> blogServiceUpdateId(Long id, D d);
}
