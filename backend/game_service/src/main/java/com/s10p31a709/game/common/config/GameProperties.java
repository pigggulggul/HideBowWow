package com.s10p31a709.game.common.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "game")
@Data
public class GameProperties {

    private Time time;
    private int maxCapacity;
    private Object object;
    private int fps;
    private Map map;

    @Data
    public static class Time {
        private int waiting;
        private int hide;
        private int seek;
        private int result;
    }

    @Data
    public static class Object {
        private int maxSeekerIdx;
        private int maxHiderIdx;
    }

    @Data
    public static class Map {
        private RichRoom richRoom;
    }

    @Data
    public static class RichRoom {
        private StartPoint startPoint;
    }

    @Data
    public static class StartPoint {
        private double x;
        private double y;
        private double z;
    }

}
