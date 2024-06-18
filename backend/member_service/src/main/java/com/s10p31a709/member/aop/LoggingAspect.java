package com.s10p31a709.member.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

@Component
@Aspect
@Slf4j
public class LoggingAspect {

    @Pointcut("execution(* com.s10p31a709..*.*(..))")
    public void allMethods() {
    }


    @Before("allMethods()")
    public void logBefore(JoinPoint joinPoint) throws Throwable {
        String file = joinPoint.getSignature().getDeclaringType().getSimpleName();
        String method = joinPoint.getSignature().getName();
        StringBuilder args = new StringBuilder();
        String returnType = ((MethodSignature) joinPoint.getSignature()).getReturnType().getSimpleName();
        Object[] list = joinPoint.getArgs();
        for (Object o : list) {
            if (o != null){
                args.append(o.getClass().getSimpleName()).append(",");
            }
        }
        if (!args.isEmpty()) {
            args.deleteCharAt(args.length() - 1);
        }

        log.trace("{} {}.{}({}) <= {}", returnType, file, method, args, list);
    }


    @AfterReturning(pointcut = "allMethods()", returning = "result")
    public void logAfter(JoinPoint joinPoint, Object result) throws Throwable {
        String file = joinPoint.getSignature().getDeclaringType().getSimpleName();
        String method = joinPoint.getSignature().getName();
        StringBuilder args = new StringBuilder();
        String returnType = ((MethodSignature) joinPoint.getSignature()).getReturnType().getSimpleName();
        Object[] list = joinPoint.getArgs();
        for (Object o : list) {
            if (o != null){
                args.append(o.getClass().getSimpleName()).append(",");
            }
        }
        if (!args.isEmpty()) {
            args.deleteCharAt(args.length() - 1);
        }
        log.trace("{} {}.{}({}) => {}", returnType, file, method, args, result);
    }


    @AfterThrowing(pointcut = "allMethods()", throwing = "exception")
    public void afterThrowingAdvice(JoinPoint joinPoint, Exception exception) {
        String file = joinPoint.getSignature().getDeclaringType().getSimpleName();
        String method = joinPoint.getSignature().getName();
        log.error("{}.{}() => {}", file, method, exception.toString());
    }

}
