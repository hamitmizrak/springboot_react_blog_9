package com.hamitmizrak.util;

import lombok.Getter;

@Getter // sadece get olur set olmaz ki dışardan biris değiştirmesin
public enum ERoles {
    SuperAdmin(1, "super_admin"),ADMIN(2, "admin"), WRITER(3, "writer"),USER(4, "user");

    // final: parametreli constructor zorlamak içindir
    private final int enumKey;
    private final String enumValue;

    // Constructor eğer final private olursa dışardan değiştirilmeye izin vermez.
    private ERoles(int enumKey, String enumValue) {
        this.enumKey = enumKey;
        this.enumValue = enumValue;
    }

    // PSVM
    public static void main(String[] args) {
        System.out.println(ERoles.SuperAdmin.toString());
        System.out.println(ERoles.SuperAdmin.getEnumKey());

        // ERoles enumVariable=ERoles.ADMIN;
        // System.out.println(enumVariable);
        // System.out.println("Sıra: "+enumVariable.ordinal());
        // System.out.println("Values: "+enumVariable.values()[0]);
        // String str=ERoles.ADMIN.toString();
        // System.out.println("toString ==> "+str);
        // for( ERoles temp  :ERoles.values()){
        //    System.out.print(temp+" ");
        // }
    } //end PSVM
}// end Enum
