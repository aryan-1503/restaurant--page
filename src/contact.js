function createContactUs() {
    const contactContent = document.createElement('div');
    contactContent.id = 'contact';

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');
    headingDiv.innerHTML = "Contact Us";
    contactContent.append(headingDiv);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const Phone = document.createElement('div');
    Phone.innerHTML = "📞 123-456-789-0";
    contactInfo.append(Phone);

    const Location = document.createElement('div');
    Location.innerHTML = "🏠 Baratie,East-Blue,OnePiece World";
    contactInfo.append(Location);

    contactContent.append(contactInfo);

    const Email = document.createElement('div');
    Email.innerHTML = "📧 baratie@onepiece.com";
    contactInfo.append(Email);

    const mapImage = document.createElement('div');
    mapImage.classList.add('map-image');

    const image = document.createElement('img');
    image.src = "./../dist/images/map.jpeg";
    image.alt = "map";

    mapImage.append(image);

    contactContent.append(mapImage);

    return contactContent;
}

export default createContactUs;