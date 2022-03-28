import { v4 as uuidV4 } from 'uuid';

export abstract class Entity<T> {
  protected _id: string;
  public props: T;

  constructor(props: T, _id?: string) {
    this.props = props;
    this._id = _id ?? uuidV4();
  }
}
