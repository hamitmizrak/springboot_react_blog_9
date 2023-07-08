package com.hamitmizrak.business.services;

import com.hamitmizrak.business.dto.BlogDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Map;

//
public interface IBlogServices<D,E> {

    // Model Mapper
    public D EntityToDto(E e);
    public E DtoToEntity(D d);

    ////////////////////////////////////////////
    // ALL CREATE
    public List<D> speedData(Long data);

    // ALL DELETE
    public String allDelete();

    ////////////////////////////////////////////
    // CREATE
    public D blogServiceCreate(D d);

    // LIST
    public List<D> blogServiceList();

    // FIND ID
    public D blogServiceFindById(Long id);

    // DELETE
    public Map<String,Boolean> blogServiceDeleteId(Long id);

    // UPDATE
    public D blogServiceUpdateId(Long id, D d);
}
