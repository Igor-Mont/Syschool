import { InMemoryEmployeesRepository } from '../../../../../tests/repositories/in-memory-employees-repository';
import { CreateEmployee } from '../usecases/create-employee';

describe('Create employee use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const employeesRepository = new InMemoryEmployeesRepository();

    const sut = new CreateEmployee(employeesRepository);

    const response = await sut.execute({
      name: 'user-test',
      office: 'office1',
      gender: 'M',
      birth_date: new Date(),
    });

    console.log(response);

    expect(response).toHaveProperty('_id');
    expect(response).toHaveProperty('props.created_at');
  });
});
