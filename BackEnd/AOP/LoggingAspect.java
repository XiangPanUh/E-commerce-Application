package com.mercury.AOP;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {
    //    Regular Expression * no matter what to return,  * all,     .. zero para or many
    @Around("execution (* com.mercury.controller.*.getAll(..))")
//                           it will block the functions, so we must to use try/catch to let it go
    public Object LogSomething(ProceedingJoinPoint pjp) {
        System.out.println("======= Before =======");

        Object o = null;
        try {
            o = pjp.proceed();
//            it doesn't know getAll() will throw what kind of exception, so it throws throwable
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        System.out.println("======= After =======");
        return o;
    }
}