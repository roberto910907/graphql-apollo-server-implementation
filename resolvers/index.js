import slugify from 'slugify';
import _ from 'lodash';

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
            return users;
        },
        user: (parent, { id }, { users }) => {
            return users[id];
        },
    },
    User: {
        username: (user) => slugify(`${user.firstname} ${user.lastname}`, { replacement: '.', lower: true }),
    },
};