import { Entity } from '../../core/domain/Entity';

type Office = 'cargo1' | 'cargo2' | 'cargo3';
type Gender = 'F' | 'M' | 'O';

interface EmployeeProps {
  name: string;
  office: Office;
  gender: Gender;
  birth_date: Date;
  created_at?: Date;
}

class Employee extends Entity<EmployeeProps> {
  private constructor(props: EmployeeProps, _id?: string) {
    super(props, _id);
  }

  get id() {
    return this._id;
  }

  static create(props: EmployeeProps, _id?: string) {
    const employee = new Employee(
      {
        ...props,
        created_at: props.created_at ?? new Date(),
      },
      _id
    );

    return employee;
  }
}

export { Employee };
