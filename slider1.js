let slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById('show-prev'),
    showNextBtn: document.getElementById('show-next'),
    slideImage: document.getElementById('slide-image'),

    start: function () {
        let that = this;
        ////
        //subscribe to events
        this.showPrevBtn.addEventListener('click', function (e){
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function (e){
            that.onShowNextBtnClick()
        });

        //create image array
        this.imagesUrls.push('https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp');
        this.imagesUrls.push('https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp');
        this.imagesUrls.push('https://i.insider.com/550cbf03ecad04de2c7c008a?width=1200&format=jpeg');
        this.imagesUrls.push('https://elitetraveler.com/wp-content/uploads/2019/07/Screenshot-2020-05-12-at-15.10.34.png');

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        // this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        //disable prev button if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn = true;
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        //disable next button if need

        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }

};

slider1.start();
