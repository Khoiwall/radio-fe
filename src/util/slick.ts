const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};
const settingsArtist = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 900,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 769,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 500,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
}
export{settings,settingsArtist}