import { UserDto } from '../user/User.dto';

export interface AuthResponseDto {
  token: string;
  user: UserDto;
}
