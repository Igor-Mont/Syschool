import { Gender } from '../../../../../@types/Gender';
import { Office } from '../../../../../@types/Office';
import { Employee } from '../../../../domain/entities/Employee';
import { IEmployeesRepository } from '../../repositories/IEmployeesRepository';
import { ICreateEmployeeDTO } from '../dtos/ICreateEmployee';

class CreateEmployee {
  constructor(private employeesRepository: IEmployeesRepository) {}

  async execute({ name, office, birth_date, gender }: ICreateEmployeeDTO) {
    const employee = await this.employeesRepository.create({
      name,
      office,
      birth_date,
      gender,
    });

    return employee;
  }
}

export { CreateEmployee };
