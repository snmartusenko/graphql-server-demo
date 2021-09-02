import {users} from "./db";

const resolvers = {
    Query: {
        hello: () => "Hello World!",
        user: (parent, {id}, context, info) => {
            return users.find(user => user.id === Number.parseInt(id, 10));
        },
        users: (parent, args, context, info) => {
            return users;
        }
    },

    Mutation: {
        createUser(parent, {id, name, email, age}, context, info) {
            const newUser = {id, name, email, age};
            users.push(newUser);

            return newUser;
        },
        updateUser(parent, {id, name, email, age}, context, info) {
            const user = users.find(user => user.id === Number.parseInt(id, 10));
            if (!user) throw new Error("User not found.");

            user.name = name;
            user.email = email;
            user.age = age;

            return user;
        },
        deleteUser(parent, {id}, context, info) {
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex === -1) throw new Error("User not found.");
            
            const deletedUsers = users.splice(userIndex, 1);

            return deletedUsers[0];
        }
    }
};

export default resolvers;