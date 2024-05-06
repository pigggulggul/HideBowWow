package com.s10p31a709.game.api.socket.repository;

import com.s10p31a709.game.api.socket.entity.GameResult;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface GameResultRepository extends ElasticsearchRepository<GameResult, Integer> {
}
