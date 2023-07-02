package com.hamitmizrak.data.repository;

import com.hamitmizrak.data.entity.BlogEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository // Spring >=2.1 yazmana gerek yoktur.
//CrudRepository, JpaRepository , PagingAndSortingRepository
public interface IBlogRepository extends JpaRepository<BlogEntity, Long> {

    // Delivered Query
    List<BlogEntity> findByHeader(String header);

    // Query (karmaşık sorgular için)
    //@Query("select b from BlogEntity b")
    //List<BlogEntity> mySpecialContent(String content);
}
