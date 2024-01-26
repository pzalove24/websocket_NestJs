import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [MessagesModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
