// if (!/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
//     // Code to be executed on the desktop version
//     // ...
  
// const nodes = document.querySelectorAll('.node');
// const canvas = document.getElementById('connections');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const layers = Array.from({ length: 5 }, (_, i) => Array.from({ length: 8 }, (_, j) => nodes[i * 8 + j]));

// let connections = [];

// layers.forEach((layer, i) => {
//     const x = (i + 1) * (window.innerWidth / 5); // Adjust the positions as needed
//     const ySpacing = canvas.height / (layer.length + 1);

//     layer.forEach((node, j) => {
//         const y = (j + 1) * ySpacing;
//         const nodeX = x;
//         const nodeY = y;

//         if (i < layers.length - 1) {
//             layers[i + 1].forEach((nextNode, k) => {
//                 const nextX = (i + 2) * (window.innerWidth / 5); // Adjust the positions as needed
//                 const nextYSpacing = canvas.height / (layers[i + 1].length + 1);
//                 const nextY = (k + 1) * nextYSpacing;

//                 connections.push({
//                     nodeX, nodeY, nextX, nextY,
//                     color: '#777777'
//                 });

//                 // Calculate the intersection point
//                 const intersectionX = nodeX + (nextX - nodeX) / 2;
//                 const intersectionY = nodeY + (nextY - nodeY) / 2;

//                 node.style.left = `${intersectionX - node.offsetWidth / 2}px`;
//                 node.style.top = `${intersectionY - node.offsetHeight / 2}px`;
//             });
//         } else {
//             // For the last layer, nodes are at the computed positions
//             node.style.left = `${nodeX - node.offsetWidth / 2}px`;
//             node.style.top = `${nodeY - node.offsetHeight / 2}px`;
//         }
//     });
// });

// function drawConnections() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     connections.forEach(({ nodeX, nodeY, nextX, nextY, color }) => {
//         ctx.beginPath();
//         ctx.moveTo(nodeX, nodeY);
//         ctx.lineTo(nextX, nextY);
//         ctx.strokeStyle = color;
//         ctx.lineWidth = 2;
//         ctx.stroke();
//     });
// }

// setInterval(() => {
//     const randomConnection = connections[Math.floor(Math.random() * connections.length)];
//     randomConnection.color = '#ffdf00'; // Change to the "light up" color
//     drawConnections();
//     setTimeout(() => {
//         randomConnection.color = '#ffffff'; // Change back to the original color
//         drawConnections();
//     }, 500); // Change back after 500ms
// }, 1000); // Change a random connection every 1000ms
// }

// Check if not on mobile
if (!/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
    // Get nodes and canvas
    const nodes = document.querySelectorAll('.node');
    const canvas = document.getElementById('connections');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create layers
    const layers = Array.from({ length: 5 }, (_, i) => Array.from({ length: 8 }, (_, j) => nodes[i * 8 + j]));

    // Initialize connections
    let connections = [];

    // Create connections
    layers.forEach((layer, i) => {
        const x = (i + 1) * (window.innerWidth / 5); // Adjust the positions as needed
        const ySpacing = canvas.height / (layer.length + 1);

        layer.forEach((node, j) => {
            const y = (j + 1) * ySpacing;
            const nodeX = x;
            const nodeY = y;

            if (i < layers.length - 1) {
                layers[i + 1].forEach((nextNode, k) => {
                    const nextX = (i + 2) * (window.innerWidth / 5); // Adjust the positions as needed
                    const nextYSpacing = canvas.height / (layers[i + 1].length + 1);
                    const nextY = (k + 1) * nextYSpacing;

                    connections.push({
                        nodeX, nodeY, nextX, nextY,
                        color: '#777777'
                    });

                    // Calculate the intersection point
                    const intersectionX = nodeX + (nextX - nodeX) / 2;
                    const intersectionY = nodeY + (nextY - nodeY) / 2;

                    node.style.left = `${intersectionX - node.offsetWidth / 2}px`;
                    node.style.top = `${intersectionY - node.offsetHeight / 2}px`;
                });
            } else {
                // For the last layer, nodes are at the computed positions
                node.style.left = `${nodeX - node.offsetWidth / 2}px`;
                node.style.top = `${nodeY - node.offsetHeight / 2}px`;
            }
        });
    });

    // Function to draw connections
    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        connections.forEach(({ nodeX, nodeY, nextX, nextY, color }) => {
            ctx.beginPath();
            ctx.moveTo(nodeX, nodeY);
            ctx.lineTo(nextX, nextY);
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }

    // Change the color of a random connection every 1000ms
    setInterval(() => {
        const randomConnection = connections[Math.floor(Math.random() * connections.length)];
        randomConnection.color = '#ffdf00'; // Change to the "light up" color
        drawConnections();
        setTimeout(() => {
            randomConnection.color = '#ffffff';
            drawConnections();
        }, 500); // Change to white after 500ms
    }, 1000);
}
