import { ICreateEmployeeDTO } from '../../src/core/modules/employee/dtos/ICreateEmployee';
import { IEmployeesRepository } from '../../src/core/modules/repositories/IEmployeesRepository';
import { Employee } from '../../src/domain/entities/Employee';

class InMemoryEmployeesRepository implements IEmployeesRepository {
  public employees: Employee[] = [];

  async create({
    name,
    office,
    gender,
    staff,
    birth_date,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = Employee.create({
      name,
      office,
      gender,
      birth_date,
      staff: true,
    });

    return employee;
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = this.employees.find(elem => elem.id === id);

    if (!employee) return null;

    return employee;
  }
}

export { InMemoryEmployeesRepository };
