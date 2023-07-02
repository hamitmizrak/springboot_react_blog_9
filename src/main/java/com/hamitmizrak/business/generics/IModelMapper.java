package com.hamitmizrak.business.generics;

// D=Dto
// E=Entity
public interface IModelMapper <D,E>{

    // Model Mapper
    public D EntityToDto(E e);
    public E DtoToEntity(D d);

}
