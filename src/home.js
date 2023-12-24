function createHome() {
    const homeContent = document.createElement('div');
    // homeContent.classList.add('active');
    homeContent.id = 'home';

    const headingDiv = document.createElement('div');
    headingDiv.className = 'heading';
    headingDiv.innerHTML = 'Welcome To Baratie';

    const imagesDiv = document.createElement('div');
    imagesDiv.className = 'imgs';
    const sanjiImage = document.createElement('img');
    sanjiImage.src = './images/sanji1.jpg';
    sanjiImage.alt = 'sanji';


    imagesDiv.appendChild(sanjiImage);

    const contentsDiv = document.createElement('div');
    contentsDiv.className = 'contents';
    contentsDiv.innerHTML = `
    At Baratie, we bring the flavors of the Grand Line to your table. Immerse yourself in a culinary journey inspired by the high seas and curated by our world-renowned chef, the "Black-Leg," Vinsmoke Sanji. Known for his passion for cooking and chivalry, Sanji has crafted a menu that combines exquisite taste with the thrill of adventure.<br><br>
    Join us at Baratie for an unparalleled dining experience. Embark on a culinary adventure where the sea meets the senses, and every dish tells a tale of the great pirate era.
    <br><br>
    Reserve your table now and set sail for a gastronomic journey like no other!`;

    homeContent.append(headingDiv, imagesDiv, contentsDiv);
    return homeContent;
}


export default createHome;