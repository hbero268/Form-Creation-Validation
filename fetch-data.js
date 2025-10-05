// Define the async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Create a list to hold user names
        const userList = document.createElement('ul');

        // Loop through each user and display their name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle fetch errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData after the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

