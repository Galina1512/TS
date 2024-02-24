export interface User {
    id: number;
    firstname: string;
    surname: string;
    age: number;
  }
  
  export abstract class Users<T extends User> {
    protected userList: T[] = [];
  
    public add = (user: T): void => {
      this.userList.push(user);
    };
  
    public remove = (id: number): boolean => {
      const index: number = this.userList.findIndex((user) => user.id === id);
      if (index <= 0) return false;
  
      this.userList.splice(index, 1);
      return true;
    };
  
    public get =(id: number): T | null => {
      return this.userList.find((user) => user.id === id) || null;
    }
  
    public sorted(sortType: "increase" | "decreasing" = "increase"): T[] {
      return this.userList.sort((a, b) =>
        sortType === "increase" ? a.id - b.id : b.id - a.id
      );
    }
  }