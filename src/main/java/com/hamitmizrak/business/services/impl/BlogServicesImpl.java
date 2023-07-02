package com.hamitmizrak.business.services.impl;

import com.hamitmizrak.bean.ModelMapperBean;
import com.hamitmizrak.business.dto.BlogDto;
import com.hamitmizrak.business.services.IBlogServices;
import com.hamitmizrak.data.entity.BlogEntity;
import com.hamitmizrak.data.repository.IBlogRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

// LOMBOK
@RequiredArgsConstructor
@Log4j2

@Service
public class BlogServicesImpl implements IBlogServices<BlogDto, BlogEntity> {

    // INJECTION
    private final IBlogRepository iBlogRepository;
    private final ModelMapperBean modelMapperBean;

    ///////////////////////////////////////////////////////////////////////////////
    // MODEL MAPPER
    @Override
    public BlogDto EntityToDto(BlogEntity blogEntity) {
        return modelMapperBean.modelMapperMethod().map(blogEntity,BlogDto.class);
    }

    @Override
    public BlogEntity DtoToEntity(BlogDto blogDto) {
        return modelMapperBean.modelMapperMethod().map(blogDto,BlogEntity.class);
    }

    //////////////////////////////////////////////////////////////////////////////
    // CREATE
    @Override
    @Transactional // Create, Delete, Update
    public BlogDto blogServiceCreate(BlogDto blogDto) {
        return null;
    }

    // LIST
    @Override
    public List<BlogDto> blogServiceList() {
        return null;
    }

    // FIND BY ID
    @Override
    public BlogDto blogServiceFindById(Long id) {
        return null;
    }

    // DELETE
    @Override
    @Transactional // Create, Delete, Update
    public Map<String, Boolean> blogServiceDeleteId(Long id) {
        return null;
    }

    // UPDATE
    @Override
    @Transactional // Create, Delete, Update
    public BlogDto blogServiceUpdateId(Long id, BlogDto blogDto) {
        return null;
    }
} //end class
