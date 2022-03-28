import { Employee } from '../../../domain/entities/Employee';

type Office = 'cargo1' | 'cargo2' | 'cargo3';
type Gender = 'F' | 'M' | 'O';

interface EmployeeProps {
  name: string;
  office: Office;
  gender: Gender;
  birth_date: Date;
  created_at?: Date;
}

interface IEmployeesRepository {
  create({
    name,
    office,
    gender,
    birth_date,
  }: EmployeeProps): Promise<Employee>;
  findById(id: string): Promise<Employee | null>;
}

export { IEmployeesRepository };
