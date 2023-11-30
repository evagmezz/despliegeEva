db.createUser({
    user: 'admin',
    pwd: 'admin1234',
    roles: [
        {
            role: 'readWrite',
            db: 'example',
        },
    ],
});