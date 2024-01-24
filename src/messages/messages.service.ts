import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  message: Message[] = [
    {
      name: 'Peeratchai',
      text: 'Hello',
    },
  ];

  clientToUser = {};

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    console.log(this.clientToUser);

    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  create(createMessageDto: CreateMessageDto, clientId:string) {
    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text
    }
    this.message.push(createMessageDto); //TODO: improve
    return message;
  }

  findAll() {
    return this.message;
  }
}
