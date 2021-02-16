import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { UserRepository } from 'src/entities/User/user.repository';
import { AuthCredentialDto } from './dto/auth.credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async signUp(
    authCredentialDto: AuthCredentialDto,
    res: Response,
  ): Promise<void> {
    return this.userRepository.signUp(authCredentialDto, res);
  }
}
