import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  message: Message[] = [
    {
      name: 'Peeratchia',
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

  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    this.message.push(createMessageDto); //TODO: improve
    return message;
  }

  findAll() {
    return this.message;
  }
}
