import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from '../auth/auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('register')
export class RegisterController {
    constructor(private authService: AuthService) {}

    @Post()
    register(@Body() registerData: RegisterDto) {
        return registerData
    }
}