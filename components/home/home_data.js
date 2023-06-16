export const Categories = [
    {
        name: 'Fast Foods',
        image: require('../assets/home_main/home/category/fast2.png'),
    },

    {
        name: 'Desi',
        image: require('../assets/home_main/home/category/desi2.png'),
    },
    {
        name: 'BBQ',
        image: require('../assets/home_main/home/category/bbq2.png'),
    },
    {
        name: 'Sea Foods',
        image: require('../assets/home_main/home/category/fish2.png'),
    },

    {
        name: 'Chineese',
        image: require('../assets/home_main/home/category/chineese2.png'),
    },
    {
        name: 'Deserts',
        image: require('../assets/home_main/home/category/desert2.png'),
    },

    {
        name: 'Drinks',
        image: require('../assets/home_main/home/category/drink2.png'),
    },
    {
        name: 'BBQ',
        image: require('../assets/home_main/home/category/bbq2.png'),
    },
    {
        name: 'Sea Foods',
        image: require('../assets/home_main/home/category/fish2.png'),
    },

    {
        name: 'Chineese',
        image: require('../assets/home_main/home/category/chineese2.png'),
    },
    {
        name: 'Deserts',
        image: require('../assets/home_main/home/category/desert2.png'),
    },

    {
        name: 'Drinks',
        image: require('../assets/home_main/home/category/drink2.png'),
    },



]

export const offers = [
    {
        id: 1,
        logo: require('../assets/home_main/home/loc.png'),
        title: 'Flash Offer',
        des: 'We are here with the best deserts intown.',
        image: require('../assets/home_main/home/burger.png'),
        colors: ['#FF9F06', '#FFE1B4']
    },
    {
        id: 2,
        logo: require('../assets/home_main/home/loc.png'),
        title: 'New Arrival',
        des: 'We are here with the best deserts intown.',
        image: require('../assets/home_main/home/burger.png'),
        colors: ['#00D756', '#018AC5']
    },
    {
        id: 3,
        logo: require('../assets/home_main/home/loc.png'),
        title: 'Flash Offer',
        des: 'We are here with the best deserts intown.',
        image: require('../assets/home_main/home/burger.png'),
        colors: ['#FF9F06', '#FFE1B4']
    },
    {
        id: 4,
        logo: require('../assets/home_main/home/loc.png'),
        title: 'Flash Offer',
        des: 'We are here with the best deserts intown.',
        image: require('../assets/home_main/home/burger.png'),
        colors: ['#FF9F06', '#FFE1B4']
    },

]
export const Restaurants = [
    {
        id: 'Resturant1',
        name: 'Ambrosia Hotel',
        images: [require('../assets/home_main/home/biryani.png'), require('../assets/home_main/home/salan.png')],
        location: 'XYZ1',
        rating: '3.0',
        noOfRatings: '100',
        likes: '10',
        views: '1000',
        reviews: [
            {
                customerName: 'Someone',
                comment: 'All '
            }
        ],
        timings: {
            0: '9:00 AM - 9:00 PM',
            1: '9:00 AM - 9:00 PM',
            2: '9:00 AM - 9:00 PM',
            3: '9:00 AM - 9:00 PM',
            4: '9:00 AM - 9:00 PM',
            5: '9:00 AM - 9:00 PM',
        },
        foodCategory: [
            {
                category: 'Fast Foods',
                types: [
                    {
                        name: 'Burgers',
                        items: [
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Burger1',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Burger2',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                        ]
                    },
                    {
                        name: 'Pizzas',
                        items: [
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Pizza1',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Pizza2',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                        ]
                    },


                ]
            }
        ],
    },
    {
        id: 'Resturant1',
        name: 'Ambrosia Hotel',
        images: [require('../assets/home_main/home/salan.png')],
        location: 'XYZ1',
        rating: '3.0',
        noOfRatings: '100',
        likes: '10',
        views: '1000',
        reviews: [
            {
                customerName: 'Someone',
                comment: 'All '
            }
        ],
        timings: {
            0: '9:00 AM - 9:00 PM',
            1: '9:00 AM - 9:00 PM',
            2: '9:00 AM - 9:00 PM',
            3: '9:00 AM - 9:00 PM',
            4: '9:00 AM - 9:00 PM',
            5: '9:00 AM - 9:00 PM',
        },
        foodCategory: [
            {
                category: 'Fast Foods',
                types: [
                    {
                        name: 'Burgers',
                        items: [
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Burger1',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Burger2',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                        ]
                    },
                    {
                        name: 'Pizzas',
                        items: [
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Pizza1',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Pizza2',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                        ]
                    },


                ]
            }
        ],
    },
    {
        id: 'Resturant1',
        name: 'Ambrosia Hotel',
        images: [require('../assets/home_main/home/biryani.png'), require('../assets/home_main/home/salan.png')],
        location: 'XYZ1',
        rating: '3.0',
        noOfRatings: '100',
        likes: '10',
        views: '1000',
        reviews: [
            {
                customerName: 'Someone',
                comment: 'All '
            }
        ],
        timings: {
            0: '9:00 AM - 9:00 PM',
            1: '9:00 AM - 9:00 PM',
            2: '9:00 AM - 9:00 PM',
            3: '9:00 AM - 9:00 PM',
            4: '9:00 AM - 9:00 PM',
            5: '9:00 AM - 9:00 PM',
        },
        foodCategory: [
            {
                category: 'Fast Foods',
                types: [
                    {
                        name: 'Burgers',
                        items: [
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Burger1',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Burger2',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                        ]
                    },
                    {
                        name: 'Pizzas',
                        items: [
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Pizza1',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                            {
                                resId: 'Resturant1',
                                id: 'Resturant1Pizza2',
                                name: 'Beaf Burger',
                                images: require('../assets/home_main/home/category/fast2.png'),
                                rating: '3.0',
                                noOfRatings: '100',
                                likes: '10',
                            },
                        ]
                    },


                ]
            }
        ],
    },
]
