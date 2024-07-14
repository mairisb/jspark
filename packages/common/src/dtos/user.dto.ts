import { AutoMap } from '@automapper/classes';

export class UserDto {
  @AutoMap()
  id: number;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;
}
