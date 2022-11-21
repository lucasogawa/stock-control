export class User {
  id!: number;
  name!: string;
  username!: string;
  password!: string;

  constructor(name: string, username: string, password: string) {
    this.id = Math.round(Math.random() * 1000);
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
