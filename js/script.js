var resort = {
    // Object properties
    name: 'Laguna Resort',
    bungalows: 45,
    booked: 24,

    checkAvailablity: function() {
        return this.bungalows - this.booked;
    }
};

var elName = document.getElementById('resortName');
elName.textContent = resort.name;

var elBungalows = document.getElementById('bungalows');
elBungalows.textContent = resort.checkAvailablity();

alert('Register NOW And Use Our Coupon Code For 20% Off Your First Stay!');
