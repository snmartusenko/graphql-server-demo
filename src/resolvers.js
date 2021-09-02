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
    }
};

export default resolvers;