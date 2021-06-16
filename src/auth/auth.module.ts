import { Module } from "@nestjs/common";
import { UsersService } from '../users/users.service';
import { LoginModule } from '../login/login.module';
import { RegisterController } from '../register/register.controller';
import { RoomsService } from '../rooms/rooms.service';
import { AppGateway } from '../app.gateway';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';

@Module({
    imports: [UsersModule],
    controllers: [RegisterController],
    providers: [UsersService, RoomsService, AuthService]
})

export class AuthModule {}