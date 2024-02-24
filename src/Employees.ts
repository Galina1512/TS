import { User, Users } from "./User";

interface Employ extends User {
  post: string;
}

export class Employees extends Users<Employ> {}