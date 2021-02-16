import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from 'src/auth/dto/auth.credentials.dto';
import { Response } from 'express';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(
    authCredentialDto: AuthCredentialDto,
    res: Response,
  ): Promise<void> {}
}
