package com.hamitmizrak.business.services;

import java.util.List;
import java.util.Map;

//
public interface IBlogServices<D,E> {

    // Model Mapper
    public D EntityToDto(E e);
    public E DtoToEntity(D d);

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
