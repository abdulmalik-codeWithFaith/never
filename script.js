const chats = [
    {
        id: 1,
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        time: '10:30 AM',
        avatar: 'https://via.placeholder.com/40'
    },
    {
        id: 2,
        name: 'Jane Smith',
        lastMessage: 'Don't forget our meeting.',
        time: 'Yesterday',
        avatar: 'https://via.placeholder.com/40'
    },
    {
        id: 3,
        name: 'Family Group',
        lastMessage: 'What's for dinner?',
        time: 'Sunday',
        avatar: 'https://via.placeholder.com/40'
    },
    {
        id: 4,
        name: 'Work Colleagues',
        lastMessage: 'Project deadline is Friday.',
        time: 'Last Week',
        avatar: 'https://via.placeholder.com/40'
    }
];

function renderChats() {
    const chatsContainer = document.querySelector('.chats');
    chatsContainer.innerHTML = ''; // Clear existing chats

    chats.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');
        chatItem.innerHTML = `
            <div class="avatar">
                <img src="${chat.avatar}" alt="${chat.name} Avatar">
            </div>
            <div class="chat-info">
                <h4>${chat.name}</h4>
                <p>${chat.lastMessage}</p>
            </div>
            <div class="chat-time">
                <span>${chat.time}</span>
            </div>
        `;
        chatsContainer.appendChild(chatItem);
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', renderChats);
