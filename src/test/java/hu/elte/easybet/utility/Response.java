package hu.elte.easybet.utility;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Response<T> {
    
    private String message;
    private T data;

    public static <T> Response<T> ok(T data) {
        return new Response<T>(null, data);
    }

    public static <T> Response<T> error(String message) {
        return new Response<T>(message, null);
    } 
}