package com.mercury.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mercury.bean.Account;
import com.mercury.http.Response;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SecurityUtils {
    // json converter
    private static final ObjectMapper mapper = new ObjectMapper();

    public static void sendResponse(HttpServletResponse response, int status, String message, Exception exception,
                                    Account u) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        // writer write message in function body,
        writer.write(mapper.writeValueAsString(new Response(exception == null ? true : false, status, message, u)));
        response.setStatus(status);
        writer.flush();
        writer.close();
    }

}