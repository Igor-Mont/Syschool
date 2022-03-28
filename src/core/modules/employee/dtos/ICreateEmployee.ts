import { Gender } from '../../../../../@types/Gender';
import { Office } from '../../../../../@types/Office';

interface ICreateEmployeeDTO {
  name: string;
  office: Office;
  gender: Gender;
  staff?: boolean;
  birth_date: Date;
  created_at?: Date;
}

export { ICreateEmployeeDTO };
