package com.portfolio.service;

import com.portfolio.model.Comment;
import com.portfolio.repository.CommentsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CommentService {

    private final CommentsRepository commentsRepository;

    public Comment createComment(String name, String msg, String profileImage){
        Comment comment = Comment.builder()
                .name(name)
                .message(msg)
                .profileImage(profileImage)
                .build();

        commentsRepository.save(comment);
        return comment;
    }

    public List<Comment> getAllComment(){
        List<Comment> comment = commentsRepository.findAllByOrderByCreatedAtDesc();
        return comment;
    }
}
