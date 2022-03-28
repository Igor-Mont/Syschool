import { Gender } from '../../../../@types/Gender';
import { Office } from '../../../../@types/Office';
import { Employee } from '../../../domain/entities/Employee';
import { ICreateEmployeeDTO } from '../employee/dtos/ICreateEmployee';

interface IEmployeesRepository {
  create({
    name,
    office,
    gender,
    birth_date,
  }: ICreateEmployeeDTO): Promise<Employee>;
  findById(id: string): Promise<Employee | null>;
}

export { IEmployeesRepository };
