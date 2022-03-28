import { Entity } from '../../core/domain/Entity';
import { ICreateEmployeeDTO } from '../../core/modules/employee/dtos/ICreateEmployee';

class Employee extends Entity<ICreateEmployeeDTO> {
  private constructor(props: ICreateEmployeeDTO, _id?: string) {
    super(props, _id);
  }

  get id() {
    return this._id;
  }

  static create(props: ICreateEmployeeDTO, _id?: string) {
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
