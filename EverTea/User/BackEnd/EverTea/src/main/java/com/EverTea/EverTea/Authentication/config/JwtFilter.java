package com.EverTea.EverTea.Authentication.config;

import com.EverTea.EverTea.Authentication.services.JwtService;
import com.EverTea.EverTea.Authentication.services.MyUserDetailService;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//SLF4J (via LoggerFactory) for logging the errors instead of printing them to the console.
// This provides a more secure and controlled way of tracking errors without exposing internal details to the user.

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);

    @Autowired
    JwtService jwtService;

    @Autowired
    ApplicationContext applicationContext;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");     //get the request and authorization
        String token = null;
        String email = null;

        if(authHeader != null && authHeader.startsWith("Bearer")){
            token = authHeader.substring(7);    //extract the token
            email = jwtService.extractEmail(token);   // extract the Email
        }

        if(email != null && SecurityContextHolder.getContext().getAuthentication()==null){

            try{
                if(jwtService.validateToken(token)){
                    UserDetails userDetails = applicationContext.getBean(MyUserDetailService.class).loadUserByUsername(email);

//            if(jwtService.validateToken(token, userDetails)){
//                UsernamePasswordAuthenticationToken authenticationToken =
//                        new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());

                // Create the authentication token only if the token is valid
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());


                     authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                     SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
                else{
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid or expired token");
                    return; // Return early if token is invalid
                }
            }
            catch (SignatureException e) {
                // Handle invalid signature
                logger.error("JWT Signature mismatch: Token is invalid", e);
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT signature");
                return;
            } catch (ExpiredJwtException e) {
                // Handle expired token
                logger.error("JWT Token has expired", e);
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token has expired");
                return;
            } catch (MalformedJwtException e) {
                logger.error("Malformed JWT token", e);
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Malformed JWT token");
                return;
            }
            catch (Exception e) {
                // Handle other exceptions
                logger.error("Unexpected error occurred during token validation", e);
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Unexpected error during token validation");
                return;
            }
        }

        filterChain.doFilter(request,response);
    }
}
