package bean;

import io.restassured.response.Response;
import lombok.Getter;
import lombok.Setter;

public class ServiceBean {
    @Getter
    @Setter
    private static Response response;
}
