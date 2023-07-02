package com.hamitmizrak.data.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

//LOMBOK
@Getter
@Setter

@Entity
@Table(name = "blog")
public class BlogEntity extends BaseEntity implements Serializable {

    // Serileştirme
    public static final Long serialVersionUID = 1L;

    // Validation

    // HEADER
    @Column(name = "header", columnDefinition = "varchar(255) default 'header girmediniz")
    private String header;

    // CONTENT
    @Column(name = "header", columnDefinition = "varchar(255) default 'content girmediniz")
    private String content;

    // IMAGE
    @Lob
    @Column(columnDefinition = "varchar(255) default 'picture.png")
    private String image;

    // DATE
    @Builder.Default
    private Date systemDate = new Date(System.currentTimeMillis());
} //end class
