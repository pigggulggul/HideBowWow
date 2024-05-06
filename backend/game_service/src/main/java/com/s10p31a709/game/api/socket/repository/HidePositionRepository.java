package com.s10p31a709.game.api.socket.repository;

import com.s10p31a709.game.api.socket.entity.HidePosition;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface HidePositionRepository extends ElasticsearchRepository<HidePosition, Integer> {

}
