package com.hamitmizrak.audit;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

// LOMBOK
@Data

// Auditing atabase hangi kullanıcı ne zaman => ne ekledi veya ne güncelledi
abstract public class AuditingAwareBaseDto  implements Serializable {

    //Serileştirme
    public static final Long serialVersionUID = 1L;

    // ID
    private Long id;

    // DATE
    private Date systemDate;

    @JsonIgnore // backentte giden veriyi saklar
    protected String createdUser;

    @JsonIgnore // backentte giden veriyi saklar
    protected Date createdDate;

    @JsonIgnore // backentte giden veriyi saklar
    protected String updatedUser;

    @JsonIgnore // backentte giden veriyi saklar
    protected Date updatedDate;
}