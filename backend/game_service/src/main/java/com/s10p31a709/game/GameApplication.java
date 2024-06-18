package com.s10p31a709.game;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@EnableFeignClients
@EnableScheduling
public class GameApplication {

	@Value("${server.domain}")
	private String domain;

	@Value("${server.port}")
	private String port;

	@Value("${server.servlet.contextPath}")
	private String contextPath;

	public static void main(String[] args) {
		SpringApplication.run(GameApplication.class, args);
	}

	@Bean
	public OpenAPI customOpenAPI() {
		return new OpenAPI()
				.addServersItem(new Server().url(domain+":"+port+contextPath).description("종범 서버"))
				.addServersItem(new Server().url("http://localhost:"+port+contextPath).description("로컬 서버"))
				.info(new Info()
						.title("Game-Service")
						.version("1.0")
						.description("게임 기능")
						.contact(new Contact().name("김종범").email("")));
	}

}
