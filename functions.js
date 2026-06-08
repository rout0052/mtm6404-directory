// INSTRUCTION: Create a list function. It will take one argument (an array of clients) and return an HTML string. The string will contain a list item template (shown below) for each client in the array. The map() method with an arrow function should be used.


// Uses the map function to map the clients array into the template literal list item structure, then joins the mapped array into one string to inject into the list. 
const list = clients => clients.map(client => `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">${client.name} <strong>$${client.balance}</strong></li>`).join('');


// INSTRUCTION: Create an order function. It will take two arguments (an array of clients, a string of a property in the client object) and return an array of clients sorted by a specified property. The sort() method with an arrow function should be used.

// This function takes the clients array, and the property to sort by, then splits into an if statement depending on the property.
const order = (clients, property) => {
    // If the property is index or balance, aka a numerical value, it sorts using numerical sort. 
    if (property === "index" || property === "balance") {
        // Bracket notation is used to get the object's variable as opposed to dot notation so we can pass the property name into the object to simplify the statement.
        clients.sort((clientA, clientB) => clientA[property] - clientB[property])
    
    // For the name property, it is sorted using alphabetical sort. Since it was sorting by an array of object's property, I could not use the built in JS sort functionality which sorts alphabetically by default. Instead, I wrote out the long form of alphabetical sort which uses greater / less than sorts, and added in the bracket notation property part to compare the name value for each client. 
    } else if (property === "name") {
        clients.sort((clientA, clientB) => {
            if (clientA[property] < clientB[property]) {
                return -1;
            } else if (clientA[property] > clientB[property]) {
                return 1;
            }
            return 0;
        });
    }
    // Returns the sorted clients array
    return clients;
}


// INSTRUCTION: Create an total function. It will take one argument (an array of clients) and return a number. The number will be total sum of the balances from every client. The reduce() method with an arrow function should be used.

// Totals the balances of every client using the reduce method, and adding each balance to the total, which of course starts at 0
const total = clients => clients.reduce((total, client) => {return total + client.balance}, 0);

// INSTRUCTION: Create an info function. It will take one argument (a number matching the index of the desired client) and return an object containing the desired clients information. The find() method with an arrow function should be used.

// This function looks through the array to find the client associated with a given index. 
const info = index => clients.find(client => client.index === index)

// INSTRUCTION: Create an search function. It will take one argument (a string containing the search query) and return an array of clients that includes the query in their name. The filter() method with an arrow function should be used. Hint: To avoid issues with case, use toLowerCase() on the query and client's name.

// This function takes the search query, and filters each client in the array by whether their name property (turned to all lower case letters) includes the search query (in all lower case letters) 
const search = query => clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()))
