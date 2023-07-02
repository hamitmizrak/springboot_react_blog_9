package com.hamitmizrak.audit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;

// LOMBOK
@Data

//SUPER CLASS
@MappedSuperclass
@JsonIgnoreProperties(value = {"created_date,updated_date"},allowGetters = true) // Json'a emir veriyoruz bunları takip etme
abstract public class AuditingAwareBaseEntity {
    // Auditing: Database hangi kullanıcı ne zaman
    // ne ekledi veya ne güncelledi

    // KİM EKLEDİ
    @CreatedBy
    @Column(name="created_user")
    protected String createdUser;

    // KİM NE ZAMAN EKLEDİ
    @CreatedDate
    @Column(name="created_date")
    protected Date createdDate;

    // KİM GÜNCELLEDİ
    @LastModifiedBy
    @Column(name="updated_user")
    protected String updatedUser;

    // KİM NE ZAMAN GÜNCELLEDİ
    @LastModifiedDate
    @Column(name="updated_date")
    protected Date updatedDate;
} //end class