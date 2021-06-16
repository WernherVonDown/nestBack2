import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { LoginController } from './login.controller';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { RoomsService } from '../rooms/rooms.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'jwtSecret',
            signOptions: { expiresIn: '1d' }
        }),
        UsersModule
    ],
    controllers: [LoginController],
    providers: [AuthService, UsersService, RoomsService]
})

export class LoginModule { }