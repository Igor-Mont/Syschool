import { Employee } from '../../../../domain/entities/Employee';
import { IEmployeesRepository } from '../../repositories/IEmployeesRepository';

type Office = 'cargo1' | 'cargo2' | 'cargo3';
type Gender = 'F' | 'M' | 'O';

interface CreateEmployeeRequest {
  name: string;
  office: Office;
  gender: Gender;
  birth_date: Date;
}

class CreateEmployee {
  constructor(private employeesRepository: IEmployeesRepository) {}

  async execute({ name, office, birth_date, gender }: CreateEmployeeRequest) {
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
