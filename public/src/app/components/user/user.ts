export class User {

  constructor(
    public _id: number = Math.floor(Math.random() * 100),
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public editable: boolean = false
  ) {

  }
}
