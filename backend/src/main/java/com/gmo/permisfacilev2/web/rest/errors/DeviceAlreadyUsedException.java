package com.gmo.permisfacilev2.web.rest.errors;

public class DeviceAlreadyUsedException extends BadRequestAlertException {

    private static final long serialVersionUID = 1L;

    public DeviceAlreadyUsedException() {
        super(ErrorConstants.LOGIN_ALREADY_USED_TYPE, "Votre compte est deja enregistre sur un autre appareil!", "userManagement", "userexists");
    }
}
