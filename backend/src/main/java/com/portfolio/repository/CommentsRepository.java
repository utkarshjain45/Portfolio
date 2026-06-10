package com.portfolio.repository;

import com.portfolio.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface CommentsRepository extends JpaRepository<Comment, UUID> {
    List<Comment> findAllByOrderByCreatedAtDesc();
}
