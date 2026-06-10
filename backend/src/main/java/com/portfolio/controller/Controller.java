package com.portfolio.controller;


import com.portfolio.dto.CommentRequest;
import com.portfolio.dto.MessageRequest;
import com.portfolio.model.Comment;
import com.portfolio.model.Message;
import com.portfolio.service.CloudinaryService;
import com.portfolio.service.CommentService;
import com.portfolio.service.MessageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin
@RequestMapping("/api/v1/portfolio")
public class Controller {

    private final CommentService commentService;
    private final MessageService messageService;
    private final CloudinaryService cloudinaryService;

    @GetMapping("/health")
    public ResponseEntity<String> healthcheck(){
        return ResponseEntity.ok("Working!!");
    }

    @PostMapping(value = "/comment", consumes = {"multipart/form-data"})
    public ResponseEntity<Comment> createComment(@ModelAttribute CommentRequest request){
        String profileImageUrl = null;
        if (request.getImage() != null && !request.getImage().isEmpty()) {
            profileImageUrl = cloudinaryService.uploadFile(request.getImage());
        }
        var cmnt = commentService.createComment(request.getName(), request.getMessage(), profileImageUrl);

        if (cmnt == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(cmnt);
    }

    @PostMapping("/message")
    public ResponseEntity<Message> createMessage(@RequestBody MessageRequest request){
        var msg = messageService.createMessage(request.getName(), request.getEmail(), request.getMessage());

        if (msg == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(msg);
    }

    @GetMapping("/message")
    public ResponseEntity<List<Message>> getAllMessages(){
        var msg = messageService.getAllMessages();

        if (msg == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(msg);
    }

    @GetMapping("/message/{email}")
    public ResponseEntity<Message> getMessageByEmail(@PathVariable String email){
        var msg = messageService.getMessageByEmail(email);

        if (msg == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(msg);
    }

    @GetMapping("/comment")
    public ResponseEntity<List<Comment>> getAllComments(){
        var cmnts = commentService.getAllComment();

        if (cmnts == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        return ResponseEntity.ok(cmnts);
    }
}
