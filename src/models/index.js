export let users = [
    {
        id: 1,
        firstname: 'Jon',
        lastname: 'Snow',
        name: 'Jon Snow',
        friends: [
            {
                id: 2,
                firstname: 'Sansa',
                lastname: 'Stark',
                name: 'Sansa Stark',
            },
            {
                id: 3,
                firstname: 'Daenerys',
                lastname: 'Targaryen',
                name: 'Daenerys Targaryen',
            }
        ],
    }, {
        id: 2,
        firstname: 'Sansa',
        lastname: 'Stark',
        name: 'Sansa Stark',
        friends: [
            {
                id: 1,
                firstname: 'Jon',
                lastname: 'Snow',
                name: 'Jon Snow',
            },
            {
                id: 3,
                firstname: 'Daenerys',
                lastname: 'Targaryen',
                name: 'Daenerys Targaryen',
            }
        ],
    },
    {
        id: 3,
        firstname: 'Daenerys',
        lastname: 'Targaryen',
        name: 'Daenerys Targaryen',
        friends: [
            {
                id: 1,
                firstname: 'Jon',
                lastname: 'Snow',
                name: 'Jon Snow',
            },
            {
                id: 2,
                firstname: 'Sansa',
                lastname: 'Stark',
                name: 'Sansa Stark',
            }
        ],
    },
];