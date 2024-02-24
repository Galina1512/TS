"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    userList = [];
    add = (user) => {
        this.userList.push(user);
    };
    remove = (id) => {
        const index = this.userList.findIndex((user) => user.id === id);
        if (index <= 0)
            return false;
        this.userList.splice(index, 1);
        return true;
    };
    get = (id) => {
        return this.userList.find((user) => user.id === id) || null;
    };
    sorted(sortType = "increase") {
        return this.userList.sort((a, b) => sortType === "increase" ? a.id - b.id : b.id - a.id);
    }
}
exports.Users = Users;
