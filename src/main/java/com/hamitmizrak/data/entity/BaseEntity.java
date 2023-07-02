package com.hamitmizrak.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hamitmizrak.audit.AuditingAwareBaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

@Getter @Setter // LOMBOK
@JsonIgnoreProperties(value = {"created_date,updated_date"},allowGetters = true) // Json'a emir veriyoruz bunları takip etme
@EntityListeners(AuditingEntityListener.class) //Auditing
@MappedSuperclass // Super
abstract public class BaseEntity extends AuditingAwareBaseEntity {

    // ID
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //unique id
    @Column(name="id")
    private Long id;

    // DATE
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date systemDate;
    //private LocalDate systemDate;

    //Constructor
    public BaseEntity() {
        //this.systemDate=LocalDate.now();
    }
}