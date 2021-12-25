const customers = [
  {
    _id: 1,
    lastName: "khoa",
    firstname: "vo duc",
    email: "khoa28101998@gmail.com",
    address: "Da nang",
    note: "Student at Duy Tan",
  },
  {
    _id: 2,
    lastName: "Ny",
    firstname: "Nguyen Ngoc",
    email: "nguyenngocny@gmail.com",
    address: "Da nang",
    note: "Student at Duy Tan",
  },
];

const size_volumes = [
  {
    _id: 1,
    length: "4580",
    width: "1795",
    height: "1450",
    standard_long: "2700",
    weight: "1700",
  },
  {
    _id: 2,
    length: "4500",
    width: "1600",
    height: "1350",
    standard_long: "2600",
    weight: "1600",
  },
  {
    _id: 3,
    length: "4570",
    width: "1495",
    height: "1150",
    standard_long: "2500",
    weight: "1800",
  },
  {
    _id: 4,
    length: "4680",
    width: "1595",
    height: "1400",
    standard_long: "2600",
    weight: "1400",
  },
  {
    _id: 5,
    length: "4380",
    width: "1595",
    height: "1450",
    standard_long: "2700",
    weight: "1700",
  },
  {
    _id: 6,
    length: "4580",
    width: "1795",
    height: "1350",
    standard_long: "2900",
    weight: "1600",
  },
  {
    _id: 7,
    length: "4480",
    width: "1795",
    height: "1550",
    standard_long: "2700",
    weight: "1400",
  },
  {
    _id: 8,
    length: "4280",
    width: "1695",
    height: "1450",
    standard_long: "2700",
    weight: "1300",
  },
  {
    _id: 9,
    length: "4500",
    width: "1700",
    height: "1450",
    standard_long: "2700",
    weight: "1500",
  },
  {
    _id: 10,
    length: "4780",
    width: "1790",
    height: "1450",
    standard_long: "2400",
    weight: "1600",
  },
  {
    _id: 11,
    length: "4480",
    width: "1790",
    height: "1450",
    standard_long: "2400",
    weight: "1700",
  },
  {
    _id: 12,
    length: "4780",
    width: "1390",
    height: "1450",
    standard_long: "1400",
    weight: "1600",
  },
  {
    _id: 13,
    length: "4280",
    width: "1790",
    height: "1430",
    standard_long: "2400",
    weight: "1600",
  },
  {
    _id: 14,
    length: "3780",
    width: "1290",
    height: "1450",
    standard_long: "2400",
    weight: "1400",
  },
  {
    _id: 15,
    length: "4080",
    width: "1790",
    height: "1450",
    standard_long: "2300",
    weight: "1600",
  },
  {
    _id: 16,
    length: "5780",
    width: "2790",
    height: "1450",
    standard_long: "3400",
    weight: "3600",
  },
  {
    _id: 17,
    length: "4780",
    width: "1790",
    height: "1450",
    standard_long: "2400",
    weight: "1600",
  },
  {
    _id: 18,
    length: "2780",
    width: "790",
    height: "450",
    standard_long: "400",
    weight: "600",
  },
  {
    _id: 19,
    length: "4780",
    width: "1790",
    height: "1350",
    standard_long: "2400",
    weight: "1600",
  },
  {
    _id: 20,
    length: "2780",
    width: "1790",
    height: "1450",
    standard_long: "2400",
    weight: "2600",
  },
];

const exteriors = [
  {
    _id: 1,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 2,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 3,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 4,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 5,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 6,
    headlight: "LED",
    parking_light: "LED",
    daylight: "Có",
  },
  {
    _id: 7,
    headlight: "LED",
    parking_light: "LED",
    daylight: "Có",
  },
  {
    _id: 8,
    headlight: "LED",
    parking_light: "LED",
    daylight: "Có",
  },
  {
    _id: 9,
    headlight: "LED",
    parking_light: "LED",
    daylight: "Có",
  },
  {
    _id: 10,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 11,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 12,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 13,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 14,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 15,
    headlight: "Halogen",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 16,
    headlight: "LED",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 17,
    headlight: "LED",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 18,
    headlight: "LED",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 19,
    headlight: "LED",
    parking_light: "Halogen",
    daylight: "Có",
  },
  {
    _id: 20,
    headlight: "LED",
    parking_light: "Halogen",
    daylight: "Có",
  },
];

const furniture = [
  {
    _id: 1,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 2,
    steering_wheel: "Có",
    display: "Không",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 3,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 4,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 5,
    steering_wheel: "Có",
    display: "Không",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 6,
    steering_wheel: "Có",
    display: "Không",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Không",
  },
  {
    _id: 7,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 8,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 9,
    steering_wheel: "Có",
    display: "Không",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 10,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 11,
    steering_wheel: "Có",
    display: "Có",
    technology: "Không",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 12,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 13,
    steering_wheel: "Có",
    display: "Có",
    technology: "Không",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 14,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 15,
    steering_wheel: "Có",
    display: "Có",
    technology: "Không",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 16,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 17,
    steering_wheel: "Có",
    display: "Có",
    technology: "Không",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 18,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 19,
    steering_wheel: "Có",
    display: "Có",
    technology: "Không",
    sound_connect: "Có",
    equipment: "Có",
  },
  {
    _id: 20,
    steering_wheel: "Có",
    display: "Có",
    technology: "Có",
    sound_connect: "Có",
    equipment: "Có",
  },
];

const engine_transmissions = [
  {
    _id: 1,
    engine: "Động cơ xăng",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1496",
    maximum_power: "110 Hp / 6000 rpm",
    maximum_speed: "300",
  },
  {
    _id: 2,
    engine: "Động cơ điện",
    transmission: "Động cơ 4 cấp",
    cylinder_capacity: "500",
    maximum_power: "50 Hp / 6000 rpm",
    maximum_speed: "100",
  },
  {
    _id: 3,
    engine: "Động cơ diesel",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1500",
    maximum_power: "120 Hp / 6000 rpm",
    maximum_speed: "299",
  },
  {
    _id: 4,
    engine: "Động cơ diesel",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1399",
    maximum_power: "100 Hp / 6000 rpm",
    maximum_speed: "250",
  },
  {
    _id: 5,
    engine: "Động cơ xăng",
    transmission: "Động cơ 8 cấp",
    cylinder_capacity: "200",
    maximum_power: "200 Hp / 8000 rpm",
    maximum_speed: "500",
  },
  {
    _id: 6,
    engine: "Động cơ điện",
    transmission: "Động cơ 4 cấp",
    cylinder_capacity: "1500",
    maximum_power: "50 Hp / 4000 rpm",
    maximum_speed: "150",
  },
  {
    _id: 7,
    engine: "Động cơ xăng",
    transmission: "Động cơ 8 cấp",
    cylinder_capacity: "2000",
    maximum_power: "200 Hp / 6000 rpm",
    maximum_speed: "400",
  },
  {
    _id: 8,
    engine: "Động cơ diesel",
    transmission: "Động cơ 8 cấp",
    cylinder_capacity: "1600",
    maximum_power: "222 Hp / 6000 rpm",
    maximum_speed: "444",
  },
  {
    _id: 9,
    engine: "Động cơ xăng",
    transmission: "Động cơ 4 cấp",
    cylinder_capacity: "1200",
    maximum_power: "110 Hp / 6000 rpm",
    maximum_speed: "255",
  },
  {
    _id: 10,
    engine: "Động cơ xăng",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1300",
    maximum_power: "120 Hp / 4000 rpm",
    maximum_speed: "255",
  },
  {
    _id: 11,
    engine: "Động cơ xăng",
    transmission: "Động cơ 4 cấp",
    cylinder_capacity: "1200",
    maximum_power: "140 Hp / 4000 rpm",
    maximum_speed: "255",
  },
  {
    _id: 12,
    engine: "Động cơ điện",
    transmission: "Động cơ 4 cấp",
    cylinder_capacity: "600",
    maximum_power: "50 Hp / 3000 rpm",
    maximum_speed: "150",
  },
  {
    _id: 13,
    engine: "Động cơ diesel",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1200",
    maximum_power: "120 Hp / 3000 rpm",
    maximum_speed: "220",
  },
  {
    _id: 14,
    engine: "Động cơ diesel",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1300",
    maximum_power: "120 Hp / 4000 rpm",
    maximum_speed: "255",
  },
  {
    _id: 15,
    engine: "Động cơ xăng",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1400",
    maximum_power: "220 Hp / 5000 rpm",
    maximum_speed: "255",
  },
  {
    _id: 16,
    engine: "Động cơ xăng",
    transmission: "Động cơ 4 cấp",
    cylinder_capacity: "1300",
    maximum_power: "110 Hp / 3000 rpm",
    maximum_speed: "255",
  },
  {
    _id: 17,
    engine: "Động cơ xăng",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1200",
    maximum_power: "150 Hp / 4000 rpm",
    maximum_speed: "255",
  },
  {
    _id: 18,
    engine: "Động cơ diesel",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1500",
    maximum_power: "140 Hp / 4000 rpm",
    maximum_speed: "245",
  },
  {
    _id: 19,
    engine: "Động cơ diesel",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "1300",
    maximum_power: "120 Hp / 4000 rpm",
    maximum_speed: "255",
  },
  {
    _id: 20,
    engine: "Động cơ xăng",
    transmission: "Động cơ 6 cấp",
    cylinder_capacity: "2300",
    maximum_power: "300 Hp / 4000 rpm",
    maximum_speed: "300",
  },
];

const car_models = [
  {
    _id: 1,
    name: "Toyota",
  },
  {
    _id: 2,
    name: "Chevrolet",
  },
  {
    _id: 3,
    name: "Ford",
  },
  {
    _id: 4,
    name: "Honda",
  },
  {
    _id: 5,
    name: "Hyundai",
  },
  {
    _id: 6,
    name: "Isuzu",
  },
  {
    _id: 7,
    name: "Suzuki",
  },
  {
    _id: 8,
    name: "Kia",
  },
  {
    _id: 9,
    name: "Mitsubishi",
  },
  {
    _id: 10,
    name: "Lexus",
  },
  {
    _id: 11,
    name: "Mazda",
  },
  {
    _id: 12,
    name: "Nissan",
  },
  {
    _id: 13,
    name: "Audi",
  },
  {
    _id: 14,
    name: "Lamborghini",
  },
  {
    _id: 15,
    name: "Rover",
  },
  {
    _id: 16,
    name: "Peugeot",
  },
  {
    _id: 17,
    name: "Aston Martin",
  },
  {
    _id: 18,
    name: "Porsche",
  },
  {
    _id: 19,
    name: "Mercedes Benz",
  },
  {
    _id: 20,
    name: "BMW",
  },
];

const cars = [
  {
    _id: 1,
    name: "Toyota Camry",
    year: 2019,
    image: "file_1",
    prices: "1200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 1,
    car_detail: 1,
  },
  {
    _id: 2,
    name: "Chevrolet UV-1",
    year: 2018,
    image: "file_2",
    prices: "2400000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 2,
    car_detail: 2,
  },
  {
    _id: 3,
    name: "Ford Ecosport",
    year: 2019,
    image: "file_3",
    prices: "2200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 3,
    car_detail: 3,
  },
  {
    _id: 4,
    name: "Chevrolet Colorado",
    year: 2016,
    image: "file_4",
    prices: "3200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 4,
    car_detail: 4,
  },
  {
    _id: 5,
    name: "Honda HRV",
    year: 2018,
    image: "file_5",
    prices: "1500000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 5,
    car_detail: 5,
  },
  {
    _id: 6,
    name: "Hyundai Elantra 2021",
    year: 2021,
    image: "file_6",
    prices: "1200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 6,
    car_detail: 6,
  },
  {
    _id: 7,
    name: "Isuzu D-Max LS 1.9 Prestige",
    year: 2019,
    image: "file_7",
    prices: "1300000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 7,
    car_detail: 7,
  },
  {
    _id: 8,
    name: "Kia Morning",
    year: 2017,
    image: "file_8",
    prices: "700000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 8,
    car_detail: 8,
  },
  {
    _id: 9,
    name: "Lexus LS - Luxury Sedan",
    year: 2019,
    image: "file_9",
    prices: "4200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 9,
    car_detail: 9,
  },
  {
    _id: 10,
    name: "Mitsubishi Attrage",
    year: 2017,
    image: "file_10",
    prices: "3200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 10,
    car_detail: 10,
  },
  {
    _id: 11,
    name: "Mazda CX-5",
    year: 2017,
    image: "file_11",
    prices: "2200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 11,
    car_detail: 11,
  },
  {
    _id: 12,
    name: "Nissan Terra",
    year: 2017,
    image: "file_12",
    prices: "1200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 12,
    car_detail: 12,
  },
  {
    _id: 13,
    name: "Audi A4",
    year: 2017,
    image: "file_13",
    prices: "3200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 13,
    car_detail: 13,
  },
  {
    _id: 14,
    name: "Lamborghini Aventador S",
    year: 2018,
    image: "file_14",
    prices: "4200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 14,
    car_detail: 14,
  },
  {
    _id: 15,
    name: "Rover Defender",
    year: 2019,
    image: "file_15",
    prices: "1200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 15,
    car_detail: 15,
  },
  {
    _id: 16,
    name: "Peugeot Traveller",
    year: 2019,
    image: "file_16",
    prices: "1300000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 16,
    car_detail: 16,
  },
  {
    _id: 17,
    name: "Aston Martin DB11",
    year: 2017,
    image: "file_17",
    prices: "2800000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 17,
    car_detail: 17,
  },
  {
    _id: 18,
    name: "Porsche 718 Boxster",
    year: 2015,
    image: "file_18",
    prices: "2500000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 18,
    car_detail: 18,
  },
  {
    _id: 19,
    name: "Mercedes V-Class",
    year: 2019,
    image: "file_19",
    prices: "5200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 19,
    car_detail: 19,
  },
  {
    _id: 20,
    name: "BMW X7",
    year: 2020,
    image: "file_20",
    prices: "5200000000",
    note: "Sản xuất tại Việt Nam, được đánh giá cao từ khách hàng",
    car_model: 20,
    car_detail: 20,
  },
];

const car_details = [
  {
    _id: 1,
    size_volume: 1,
    engine_transmission: 1,
    furniture: 1,
    exterior: 1,
  },
  {
    _id: 2,
    size_volume: 2,
    engine_transmission: 2,
    furniture: 2,
    exterior: 2,
  },
  {
    _id: 3,
    size_volume: 3,
    engine_transmission: 3,
    furniture: 3,
    exterior: 3,
  },
  {
    _id: 4,
    size_volume: 4,
    engine_transmission: 4,
    furniture: 4,
    exterior: 4,
  },
  {
    _id: 5,
    size_volume: 5,
    engine_transmission: 5,
    furniture: 5,
    exterior: 5,
  },
  {
    _id: 6,
    size_volume: 6,
    engine_transmission: 6,
    furniture: 6,
    exterior: 6,
  },
  {
    _id: 7,
    size_volume: 7,
    engine_transmission: 7,
    furniture: 7,
    exterior: 7,
  },
  {
    _id: 8,
    size_volume: 8,
    engine_transmission: 8,
    furniture: 8,
    exterior: 8,
  },
  {
    _id: 9,
    size_volume: 9,
    engine_transmission: 9,
    furniture: 9,
    exterior: 9,
  },
  {
    _id: 10,
    size_volume: 10,
    engine_transmission: 10,
    furniture: 10,
    exterior: 10,
  },
  {
    _id: 11,
    size_volume: 11,
    engine_transmission: 11,
    furniture: 11,
    exterior: 11,
  },
  {
    _id: 12,
    size_volume: 12,
    engine_transmission: 12,
    furniture: 12,
    exterior: 12,
  },
  {
    _id: 13,
    size_volume: 13,
    engine_transmission: 13,
    furniture: 13,
    exterior: 13,
  },
  {
    _id: 14,
    size_volume: 14,
    engine_transmission: 14,
    furniture: 14,
    exterior: 14,
  },
  {
    _id: 15,
    size_volume: 15,
    engine_transmission: 15,
    furniture: 15,
    exterior: 15,
  },
  {
    _id: 16,
    size_volume: 16,
    engine_transmission: 16,
    furniture: 16,
    exterior: 16,
  },
  {
    _id: 17,
    size_volume: 17,
    engine_transmission: 17,
    furniture: 17,
    exterior: 17,
  },
  {
    _id: 18,
    size_volume: 18,
    engine_transmission: 18,
    furniture: 18,
    exterior: 18,
  },
  {
    _id: 19,
    size_volume: 19,
    engine_transmission: 19,
    furniture: 19,
    exterior: 19,
  },
  {
    _id: 20,
    size_volume: 20,
    engine_transmission: 20,
    furniture: 20,
    exterior: 20,
  },
];

const files = [
  {
    _id: "file_1",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_2",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_3",
    file_src: "../api/assets/img/3.png",
    file_name: "3.png",
    car_id: "3"
  },
  {
    _id: "file_4",
    file_src: "../api/assets/img/4.png",
    file_name: "4.png",
    car_id: "4"
  },
  {
    _id: "file_5",
    file_src: "../api/assets/img/5.png",
    file_name: "5.png",
    car_id: "5"
  },
  {
    _id: "file_6",
    file_src: "../api/assets/img/6.png",
    file_name: "6.png",
    car_id: "6"
  },
  {
    _id: "file_7",
    file_src: "../api/assets/img/7.png",
    file_name: "7.png",
    car_id: "2"
  },
  {
    _id: "file_8",
    file_src: "../api/assets/img/8.png",
    file_name: "8.png",
    car_id: "8"
  },
  {
    _id: "file_9",
    file_src: "../api/assets/img/9.png",
    file_name: "9.png",
    car_id: "9"
  },
  {
    _id: "file_10",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_11",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_12",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_13",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_14",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_15",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_16",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_17",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_18",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_19",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  },
  {
    _id: "file_20",
    file_src: "../api/assets/img/1.png",
    file_name: "1.png",
    car_id: "2"
  }
]
exports.customers = customers;
exports.size_volumes = size_volumes;
exports.exteriors = exteriors;
exports.furniture = furniture;
exports.engine_transmissions = engine_transmissions;
exports.car_models = car_models;
exports.cars = cars;
exports.car_details = car_details;
exports.files = files;
