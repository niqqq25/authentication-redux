class Database {
    users = [{ email: "frontend@isawesome.com", password: "cool", fullName: "Hoo Lee Sheet"}];

    find(key, value) {
        return this.users.find((user) => user[key] === value);
    }
}

export default Database;
