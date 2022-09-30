import icon from './assets/icons/doug.jpg';
export const moments = [
    {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1,
            name: 'Nate',
            avatar: icon
        },
        comments: [
            { from: 'Ari', text: 'Me too!' }
        ]
    },

    {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
            id: 1,
            name: 'Ari',
            avatar: icon
        },
        comments: [
            { from: 'Nate', text: 'I am so jealous!' }
        ]
    }
]