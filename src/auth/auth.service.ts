import { Injectable } from '@nestjs/common';
import { RoomsService } from 'src/rooms/rooms.service';
import { Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from '../users/dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private roomsService: RoomsService,
    private usersService: UsersService,
   // private jwtService: JwtService
  ) {
  }

  async handleDisconnect(socketId: string): Promise<any> {
    const res = await this.roomsService.removeUserBySocketId(socketId);
    return res;
  }

  async validateUserInRoom({ roomId, userName, password, socketId }): Promise<any> {
    const isPasswordValid = await this.roomsService.validatePassword(roomId, password);
    console.log('IS USER VALID', isPasswordValid, { roomId, userName, password, socketId })
    if (isPasswordValid) {
      const users = await this.roomsService.addUserToRoom(userName, socketId, roomId);
      // if (users.find(u => u.userName === userName)) userName += `1`;
      return { success: true, users, userName }
    } else {
      return { success: false };
    }
  }


  async validateUser(loginDto: LoginDto): Promise<any> {
    const user = await this.usersService.findOne(loginDto.email);
    if (user) {
      const { password, ...result } = user;
      if (await bcrypt.compare(loginDto.password, password)) {
        return result;
      }
    }
    return null;
  }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
//}

}
