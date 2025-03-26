// script.js

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// List of all 20 image filenames
const allImages = [
    'image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png',
    'image6.png', 'image7.png', 'image8.png', 'image9.png', 'image10.png',
    'image11.png', 'image12.png', 'image13.png', 'image14.png', 'image15.png',
    'image16.png', 'image17.png', 'image18.png', 'image19.png', 'image20.png'
];

// Shuffle images and select 10
shuffleArray(allImages);
const selectedImages = allImages.slice(0, 10);

// Get the container and display images
const bingoGrid = document.getElementById('bingo-grid');
bingoGrid.innerHTML = '';

selectedImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    imgElement.classList.add('bingo-image');
    bingoGrid.appendChild(imgElement);
});

