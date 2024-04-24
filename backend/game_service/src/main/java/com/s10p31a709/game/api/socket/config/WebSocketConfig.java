package com.s10p31a709.game.api.socket.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
@RequiredArgsConstructor
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

//	private final SubscriptionInterceptor subscriptionInterceptor;

	@Override
	public void registerStompEndpoints(StompEndpointRegistry endpointRegistry) {
		endpointRegistry.addEndpoint("/ws")
				.setAllowedOriginPatterns("*");
	}

	@Override
	public void configureMessageBroker(MessageBrokerRegistry brokerRegistry) {
		brokerRegistry.enableSimpleBroker("/sub");
		brokerRegistry.setApplicationDestinationPrefixes("/");
	}

}
