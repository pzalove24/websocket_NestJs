import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { EventsService } from './events.service';

@WebSocketGateway()
export class EventsGateway {
  constructor(private readonly eventsService: EventsService) {}
  
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello World';
  }
}
