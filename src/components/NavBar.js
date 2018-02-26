import React from 'react';

export function NavBar(user) {
    return (
        <div>
            <h1>Some page</h1>
            <p>{user.name}</p>
            <button>Logout</button>
        </div>
    );
};