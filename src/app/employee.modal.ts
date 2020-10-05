export class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: number,
    public dateOfJoin: Date,
    public city: string,
    public state: string,
    public id?: string) {
  }
}
