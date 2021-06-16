import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from '../users/users.service';
import { LoginModule } from '../login/login.module';
import { RegisterController } from '../register/register.controller';
import { RoomsService } from '../rooms/rooms.service';
import { AppGateway } from '../app.gateway';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { RoomsModule } from '../rooms/rooms.module';

@Module({
    imports: [UsersModule, forwardRef(() => RoomsModule)],
    controllers: [RegisterController],
    providers: [AuthService]
})

export class AuthModule {}
