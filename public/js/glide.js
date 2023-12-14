
new Glide('.glide' , { 
    type: 'carousel',
    startAt: 0,
    perView:3,
    gap: 5,
    breakpoint: {
        990: {
            perView:2
        },
        770: {
            perView: 1
        }
    }
 }
).mount()
