import slugify from 'slugify';
import _ from 'lodash';

export const resolvers = {
    Query: {
        me: () => {
            return {
                name: 'Roberto Rielo',
                username: 'roberto.rielo.v',
                firstname: 'Roberto',
                lastname: 'Rielo',
            };
        },
        users: (parent, { limit }, { users }) => {
            return limit ? users.slice(0, limit) : users;
        },
        user: (parent, { id }, { users }) => {
            return users[id - 1];
        },
    },
    Mutation: {
        createUser: (parent, { name, username, firstname, lastname }, { users }) => {
            const newUser = {
                id: users.length + 1,
                name: name,
                username: username,
                firstname: firstname,
                lastname: lastname,
            };

            users.push(newUser);

            return newUser;
        },
    },
    User: {
        username: (user) => slugify(`${user.firstname} ${user.lastname}`, { replacement: '.', lower: true }),
    },
};