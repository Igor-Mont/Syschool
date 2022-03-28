import { IEmployeesRepository } from '../../src/core/modules/repositories/IEmployeesRepository';
import { Employee } from '../../src/domain/entities/Employee';

type Office = 'cargo1' | 'cargo2' | 'cargo3';
type Gender = 'F' | 'M' | 'O';

interface EmployeeProps {
  name: string;
  office: Office;
  gender: Gender;
  birth_date: Date;
  created_at?: Date;
}

class InMemoryEmployeesRepository implements IEmployeesRepository {
  public employees: Employee[] = [];

  async create({
    name,
    office,
    gender,
    birth_date,
  }: EmployeeProps): Promise<Employee> {
    const employee = Employee.create({
      name,
      office,
      gender,
      birth_date,
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
