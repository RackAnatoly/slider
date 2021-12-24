let prev = document.getElementById('show-prev');
let next = document.getElementById('show-next');
let image = document.getElementById('slide-image')


prev.addEventListener('click', prevf)
next.addEventListener('click', nextf)

imagesArr = [];

imagesArr.push('https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp');
imagesArr.push('https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp');
imagesArr.push('https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg');
imagesArr.push('https://elitetraveler.com/wp-content/uploads/2019/07/Screenshot-2020-05-12-at-15.10.34.png');

let curentImage = 0;
image.src = imagesArr[curentImage];
prev.disabled = true;


function prevf() {
    curentImage--;
    prev.disabled = false;
    image.src = imagesArr[curentImage];
    prev.disabled = false;

    if (curentImage === 0) {
        prev.disabled = false;
    }
}

function nextf() {
    curentImage++;
    image.src = imagesArr[curentImage];

    if (curentImage === (imagesArr.length - 1)) {
        next.disabled = true;
    }

}