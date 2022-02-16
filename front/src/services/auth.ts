import { AuthResponseDto, SigninDto, SignupDto } from '@/dtos/auth';
import Api from '@/services/api';
import { AxiosResponse } from 'axios';

export default {
  signin(payload: SigninDto): Promise<AxiosResponse<AuthResponseDto>> {
    return Api().post('signin', payload);
  },

  signup(payload: SignupDto): Promise<AxiosResponse<AuthResponseDto>> {
    return Api().post('signup', payload);
  },
};
