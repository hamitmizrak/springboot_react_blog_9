package com.hamitmizrak.business.services.impl;

import com.hamitmizrak.bean.ModelMapperBean;
import com.hamitmizrak.business.dto.BlogDto;
import com.hamitmizrak.business.services.IBlogServices;
import com.hamitmizrak.data.entity.BlogEntity;
import com.hamitmizrak.data.repository.IBlogRepository;
import com.hamitmizrak.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

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
        return modelMapperBean.modelMapperMethod().map(blogEntity, BlogDto.class);
    }

    @Override
    public BlogEntity DtoToEntity(BlogDto blogDto) {
        return modelMapperBean.modelMapperMethod().map(blogDto, BlogEntity.class);
    }

    ///////////////////////////////////////////////////////////////////////////////
    // ALL CREATE
    @Override
    public List<BlogDto> speedData(Long data) {
        BlogDto blogDto;
        List<BlogDto> list = new ArrayList<>();
        for (int i = 1; i <= data; i++) {
            blogDto = BlogDto.builder()
                    .header("header " + UUID.randomUUID().toString())
                    .content("content " + UUID.randomUUID().toString())
                    .build();
            list.add(blogDto);
            BlogEntity entity = iBlogRepository.save(DtoToEntity(blogDto));
            blogDto.setId(entity.getId());
        }
        return list;
    }

    // ALL DELETE
    @Override
    public String allDelete() {
        iBlogRepository.deleteAll();
        return "Bütün veriler Silindi";
    }

    //////////////////////////////////////////////////////////////////////////////
    // CREATE
    @Override
    @Transactional // Create, Delete, Update
    public BlogDto blogServiceCreate(BlogDto blogDto) {
        if (blogDto != null) {
            BlogEntity blogEntity = iBlogRepository.save(DtoToEntity(blogDto));
            blogDto.setId(blogEntity.getId());
            blogDto.setSystemDate(blogEntity.getSystemDate());
        } else if (blogDto == null)
            throw new NullPointerException("Blog Dto Null");
        return blogDto;
    }

    // LIST
    @Override
    public List<BlogDto> blogServiceList() {
        Iterable<BlogEntity> blogEntitiesList = iBlogRepository.findAll();
        List<BlogDto> blogDtoList = null;
        if (blogEntitiesList != null) {
            blogDtoList = new ArrayList<>();
            for (BlogEntity entity : blogEntitiesList) {
                BlogDto blogDto = EntityToDto(entity);
                blogDtoList.add(blogDto);
            }
        } else if (blogEntitiesList == null)
            throw new NullPointerException("Blog Dto Null");
        return blogDtoList;
    }

    // FIND BY ID
    @Override
    public BlogDto blogServiceFindById(Long id) {
        BlogEntity blogEntity = null;
        if (id != null) {
            blogEntity = iBlogRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + " Nolu Id yoktur"));
        } else if (id == null)
            throw new NullPointerException("Blog Dto Null");
        return EntityToDto(blogEntity);
    }

    // DELETE
    @Override
    @Transactional // Create, Delete, Update
    public Map<String, Boolean> blogServiceDeleteId(Long id) {
        // Find
        BlogDto blogDtoFind = blogServiceFindById(id);
        // Map
        Map<String, Boolean> mapDelete = new HashMap<>();
        if (blogDtoFind != null) {
            BlogEntity entity = DtoToEntity(blogDtoFind);
            iBlogRepository.delete(entity);
            mapDelete.put(entity + " Silindi", Boolean.TRUE);
        } else if (id == null)
            throw new NullPointerException("Blog Dto Null");
        return mapDelete;
    }

    // UPDATE
    @Override
    @Transactional // Create, Delete, Update
    public BlogDto blogServiceUpdateId(Long id, BlogDto blogDto) {
        // Find
        BlogDto blogDtoFind = blogServiceFindById(id);
        if (blogDto != null) {
            BlogEntity blogEntity = DtoToEntity(blogDtoFind);
            blogEntity.setHeader(blogDto.getHeader());
            blogEntity.setContent(blogDto.getContent());
            blogEntity.setImage(blogDto.getImage());
            iBlogRepository.save(blogEntity);
            // Dönüşte ID, DATE
            blogDto.setId(blogEntity.getId());
            blogDto.setSystemDate(blogEntity.getSystemDate());
        } else if (id == null)
            throw new NullPointerException("Blog Dto Null");
        return blogDto;
    }
} //end class
