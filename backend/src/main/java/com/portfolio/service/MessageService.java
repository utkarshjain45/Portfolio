package com.portfolio.service;

import com.portfolio.model.Message;
import com.portfolio.repository.MessageRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;

    public Message createMessage(String name, String email, String message){
        Message msg = Message.builder()
                .name(name)
                .email(email)
                .message(message)
                .build();

        return messageRepository.save(msg);
    }

    public List<Message> getAllMessages(){
        List<Message> allMessages = messageRepository.findAll();

        return allMessages;
    }

    public Message getMessageByEmail(String email){
        Optional<Message> message = messageRepository.findByEmail(email);

        if (message.isEmpty()){
            throw new NoSuchFieldError("Message not found with this email");
        }
        return message.get();
    }
}
