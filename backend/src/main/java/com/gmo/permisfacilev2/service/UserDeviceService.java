package com.gmo.permisfacilev2.service;

import com.gmo.permisfacilev2.domain.UserDevice;
import com.gmo.permisfacilev2.repository.UserDeviceRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class UserDeviceService {


    UserDeviceRepository userDeviceRepository;

    public Boolean checkOrSave(String devideId, String username) {

        if(StringUtils.isEmpty(devideId)) {
            throw new IllegalArgumentException("deviceId is null");
        }
        if(StringUtils.isEmpty(username)) {
            throw new IllegalArgumentException("deviceId is null");
        }

        Optional<UserDevice> userDeviceOpt = userDeviceRepository.findOneByLogin(username);


        if(!userDeviceOpt.isPresent()) { // first time login
            UserDevice userDevice = new UserDevice();
            userDevice.setDeviceId(devideId);
            userDevice.setLogin(username);
            userDevice.setDateRegistration(LocalDate.now());
            userDevice.setLastUpdate(LocalDate.now());
            userDeviceRepository.save(userDevice);
            return true;
        }

        if(userDeviceOpt.isPresent()) {
            if(devideId.equals(userDeviceOpt.get().getDeviceId())){
                return true;
            }else{
                return false;
            }
        }
        return  false;
    }
}
