function createMenu() {
    const menuContent = document.createElement('div');
    menuContent.id = 'menu';

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');
    headingDiv.innerHTML = "Menu";
    menuContent.append(headingDiv);

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    const food1 = createFoodCard('./../dist/images/Fried_Rice.jpeg','fried rice',"Fried Rice","5");
    const food2 = createFoodCard('./../dist/images/lasagna.jpeg','Lasagna',"Lasagna","10");
    const food3 = createFoodCard('./../dist/images/oshiruko.jpeg','Oshiruko',"Oshiruko","8");
    const food4 = createFoodCard('./../dist/images/Oden.jpeg','Oden',"Oden","12");
    const food5 = createFoodCard('./../dist/images/Ramen.jpeg','Ramen',"Ramen","10");
    const food6 = createFoodCard('./../dist/images/cola.jpg','Franky Cola',"Franky Cola","1");

    gridContainer.append(food1);
    gridContainer.append(food2);
    gridContainer.append(food3);
    gridContainer.append(food4);
    gridContainer.append(food5);
    gridContainer.append(food6);

    menuContent.append(gridContainer);

    return menuContent
}

function createFoodCard(imagePath,imageAlt,Name,Price){
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card');
    const foodImg = document.createElement('div');
    foodImg.classList.add('food-img');
    const Image = document.createElement('img');
    Image.src = imagePath;
    Image.alt = imageAlt;
    foodImg.append(Image);
    foodCard.append(foodImg)

    const foodInfo = document.createElement('div');
    foodInfo.classList.add('food-info');
    const foodName = document.createElement('div');
    foodName.innerHTML = Name;
    foodInfo.append(foodName);
    const foodPrice = document.createElement('div');
    foodPrice.innerHTML = "Price : $"+Price;
    foodInfo.append(foodPrice)
    foodCard.append(foodInfo)

    return foodCard;
}

export default createMenu;