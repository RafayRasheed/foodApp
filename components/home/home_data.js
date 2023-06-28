export const Categories = [
  {
    id: 'cat1',
    name: 'Fast Foods',
    image: require('../assets/home_main/home/category/fast2.png'),
  },

  {
    id: 'cat2',
    name: 'Desi',
    image: require('../assets/home_main/home/category/desi2.png'),
  },
  {
    id: 'cat3',
    name: 'BBQ',
    image: require('../assets/home_main/home/category/bbq2.png'),
  },
  {
    id: 'cat4',
    name: 'Sea Foods',
    image: require('../assets/home_main/home/category/fish2.png'),
  },

  {
    id: 'cat4',
    name: 'Chineese',
    image: require('../assets/home_main/home/category/chineese2.png'),
  },
  {
    id: 'cat5',
    name: 'Deserts',
    image: require('../assets/home_main/home/category/desert2.png'),
  },

  {
    id: 'cat6',
    name: 'Drinks',
    image: require('../assets/home_main/home/category/drink2.png'),
  },
  {
    id: 'cat7',
    name: 'BBQ',
    image: require('../assets/home_main/home/category/bbq2.png'),
  },
  {
    id: 'cat8',
    name: 'Sea Foods',
    image: require('../assets/home_main/home/category/fish2.png'),
  },

  {
    id: 'cat9',
    name: 'Chineese',
    image: require('../assets/home_main/home/category/chineese2.png'),
  },
  {
    id: 'cat10',
    name: 'Deserts',
    image: require('../assets/home_main/home/category/desert2.png'),
  },

  {
    id: 'cat11',
    name: 'Drinks',
    image: require('../assets/home_main/home/category/drink2.png'),
  },
];

export const offers = [
  {
    id: 1,
    logo: require('../assets/home_main/home/loc.png'),
    title: 'Flash Offer',
    des: 'We are here with the best deserts intown.',
    image: require('../assets/home_main/home/burger.png'),
    colors: ['#FF9F06', '#FFE1B4'],
  },
  {
    id: 2,
    logo: require('../assets/home_main/home/loc.png'),
    title: 'New Arrival',
    des: 'We are here with the best deserts intown.',
    image: require('../assets/home_main/home/burger.png'),
    colors: ['#00D756', '#018AC5'],
  },
  {
    id: 3,
    logo: require('../assets/home_main/home/loc.png'),
    title: 'Flash Offer',
    des: 'We are here with the best deserts intown.',
    image: require('../assets/home_main/home/burger.png'),
    colors: ['#FF9F06', '#FFE1B4'],
  },
  {
    id: 4,
    logo: require('../assets/home_main/home/loc.png'),
    title: 'Flash Offer',
    des: 'We are here with the best deserts intown.',
    image: require('../assets/home_main/home/burger.png'),
    colors: ['#FF9F06', '#FFE1B4'],
  },
];
export const Restaurants = [
  {
    id: 'Resturant1',
    name: 'Ambrosia Hotel',
    icon: require('../assets/home_main/home/resI.jpg'),
    images: [
      require('../assets/home_main/home/res.png'),
      require('../assets/home_main/home/salan.png'),
      require('../assets/home_main/home/res.png'),

    ],
    location: 'XYZ1',
    rating: '3.0',
    noOfRatings: '100',
    likes: '10',
    views: '1000',
    reviews: [
      {
        customerName: 'Someone',
        comment: 'All ',
      },
    ],
    timmings: [
      {
        day: 'Sunday',
        times: ["9:00 AM - 10:19 AM . Morning Menu", "10:20 AM - 11:59 PM . Afternoon Menu", "12:00 AM - 01:30 PM . Afternoon Menu"]
      },
      {
        day: 'Monday - Saturday',
        times: ["9:00 AM - 10:19 AM . Morning Menu", "10:20 AM - 11:59 PM . Afternoon Menu", "12:00 AM - 01:30 PM . Afternoon Menu"]
      },
    ],

    foodCategory: [
      {
        name: 'Deals',
        catName: 'Fast Food',
        items: [
          {
            resId: 'Resturant1',
            price: 'Rs 300',
            id: 'Resturant1Pizza1',
            name: 'Beaf Burger1',
            images: [require('../assets/home_main/home/category/fast2.png')],
            rating: '3.0',
            noOfRatings: '100',
            likes: '10',
          },
          {
            resId: 'Resturant1',
            price: 'Rs 3000',
            id: 'Resturant1Pizza1',
            name: 'Beaf Burger100',
            images: [require('../assets/home_main/home/category/fast2.png')],
            rating: '3.0',
            noOfRatings: '100',
            likes: '10',
          },
          {
            resId: 'Resturant1',
            price: 'Rs 500',
            id: 'Resturant1Pizza2',
            name: 'Beaf Burger2',
            images: [require('../assets/home_main/home/category/fast2.png')],
            rating: '3.0',
            noOfRatings: '100',
            likes: '10',
          },
        ],
      },
      {
        name: 'Burger',
        items: [
          {
            resId: 'Resturant1',
            id: 'Resturant1Burger1',
            price: 'Rs 600',
            name: 'Beaf Burger3',
            images: [require('../assets/home_main/home/category/fast2.png')],
            rating: '3.0',
            noOfRatings: '100',
            likes: '10',
          },
          {
            resId: 'Resturant1',
            id: 'Resturant1Burger2',
            price: 'Rs 700',
            name: 'Beaf Burger4',
            images: [require('../assets/home_main/home/category/fast2.png')],
            rating: '3.0',
            noOfRatings: '100',
            likes: '10',
          },
        ],
      },



    ],
  },
];
