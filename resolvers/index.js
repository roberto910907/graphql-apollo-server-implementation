import slugify from 'slugify';

export const resolvers = {
    Query: {
        me: () => {
            return {
                username: 'roberto.rielo.v',
                firstname: 'Roberto',
                lastname: 'Rielo',
            };
        },
        users: (parent, args, { users }) => {
            return Object.values(users);
        },
        user: (parent, { id }, { users }) => {
            return users[id];
        },
    },
    User: {
        fullname: (user) => `${user.firstname} ${user.lastname}`,
        username: (user) => slugify(`${user.firstname} ${user.lastname}`, { replacement: '.', lower: true }),
    },
};