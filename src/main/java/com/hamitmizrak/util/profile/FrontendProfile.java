package com.hamitmizrak.util.profile;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

//@Component ==> Spring nesnesi olamaıs için
@Component
@Profile("frontend")
public class FrontendProfile implements IChooiseProfile {
    @Override
    public String message(String name) {
        return "NAME: " + name;
    }
}