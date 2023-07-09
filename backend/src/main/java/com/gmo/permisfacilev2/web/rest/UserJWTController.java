package com.gmo.permisfacilev2.web.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
<<<<<<< HEAD
import com.gmo.permisfacilev2.security.jwt.JWTFilter;
import com.gmo.permisfacilev2.security.jwt.TokenProvider;
import com.gmo.permisfacilev2.service.UserDeviceService;
import com.gmo.permisfacilev2.web.rest.errors.BadRequestAlertException;
import com.gmo.permisfacilev2.web.rest.vm.LoginVM;
=======
import com.gmo.permisfacilev2.domain.User;
import com.gmo.permisfacilev2.repository.UserRepository;
import com.gmo.permisfacilev2.security.jwt.JWTFilter;
import com.gmo.permisfacilev2.security.jwt.TokenProvider;
import com.gmo.permisfacilev2.service.UserDeviceService;
import com.gmo.permisfacilev2.service.UserService;
import com.gmo.permisfacilev2.web.rest.errors.DeviceAlreadyUsedException;
import com.gmo.permisfacilev2.web.rest.vm.LoginVM;

>>>>>>> 7252264bffd98b0401cb3858aebcd1110f1ecef4
import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
<<<<<<< HEAD
=======
import org.springframework.http.ResponseCookie;
>>>>>>> 7252264bffd98b0401cb3858aebcd1110f1ecef4
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

<<<<<<< HEAD
=======
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

>>>>>>> 7252264bffd98b0401cb3858aebcd1110f1ecef4
/**
 * Controller to authenticate users.
 */
@RestController
@RequestMapping("/api")
public class UserJWTController {

    private final TokenProvider tokenProvider;

    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    private final UserDeviceService userDeviceService;
<<<<<<< HEAD

    public UserJWTController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder, UserDeviceService userDeviceService) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.userDeviceService = userDeviceService;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JWTToken> authorize(@Valid @RequestBody LoginVM loginVM) {
=======
    private final UserRepository userRepository;

    private final UserService userService;

    public UserJWTController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder, UserDeviceService userDeviceService,
                             UserRepository userRepository, UserService userService) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.userDeviceService = userDeviceService;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JWTToken> authorize(@Valid @RequestBody LoginVM loginVM, @CookieValue(name="recordedDevice", required=false) String recordedDeviceCookie){
>>>>>>> 7252264bffd98b0401cb3858aebcd1110f1ecef4
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
            loginVM.getUsername(),
            loginVM.getPassword()
        );

<<<<<<< HEAD
        if(StringUtils.isNotBlank(loginVM.getDeviceId())) {
            if(!userDeviceService.checkOrSave(loginVM.getDeviceId(), loginVM.getUsername())) {
                throw new BadRequestAlertException("Your device Id is already use!", "", "");
            }
        }
=======
        HttpHeaders httpHeaders = new HttpHeaders();
        ResponseCookie cookie = null;

        if(StringUtils.isEmpty(recordedDeviceCookie)) {
            Optional<User> userOptional = userRepository.findOneByLogin(loginVM.getUsername());
            if(userOptional.isPresent()) {
                User user = userOptional.get();
                if(user.isRecordedDevice()) {
                    throw new DeviceAlreadyUsedException();
                }else {
                    //create new recordedDevice
                    cookie = ResponseCookie.from("recordedDevice", "recordedDevice-true")
                            .maxAge(60 * 60 * 24 * 365)
                            .path("/")
                            .build();
                    httpHeaders.add(HttpHeaders.SET_COOKIE, cookie.toString());
                    userService.setrecordeddevice(user, true);
                }
            }
        }


        /*if(StringUtils.isNotBlank(loginVM.getDeviceId())) {
            if(!userDeviceService.checkOrSave(loginVM.getDeviceId(), loginVM.getUsername())) {
                throw new BadRequestAlertException("Your device Id is already use!", "", "");
            }
        }*/
>>>>>>> 7252264bffd98b0401cb3858aebcd1110f1ecef4

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.createToken(authentication, loginVM.isRememberMe());
<<<<<<< HEAD
        HttpHeaders httpHeaders = new HttpHeaders();
=======
>>>>>>> 7252264bffd98b0401cb3858aebcd1110f1ecef4
        httpHeaders.add(JWTFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);
        return new ResponseEntity<>(new JWTToken(jwt), httpHeaders, HttpStatus.OK);
    }

    /**
     * Object to return as body in JWT Authentication.
     */
    static class JWTToken {

        private String idToken;

        JWTToken(String idToken) {
            this.idToken = idToken;
        }

        @JsonProperty("id_token")
        String getIdToken() {
            return idToken;
        }

        void setIdToken(String idToken) {
            this.idToken = idToken;
        }
    }
<<<<<<< HEAD
=======

>>>>>>> 7252264bffd98b0401cb3858aebcd1110f1ecef4
}
