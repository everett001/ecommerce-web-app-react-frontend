import HomeCarousel from "../components/HomeCarousel";
import Header from "../components/Header";
import Product from "../components/Product";
import classes from './Home.module.css';

const DUMMY_DATA = [
    {
        id: '111',
        img: 'https://media.gq.com/photos/599a64b2d48ec673e16de47d/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-jordan.jpg',
        title: 'Air Jordan 1 x Virgil Abloh',
        color: 'Red',
        price: '299'
    },
    {
        id: '222',
        img: 'https://media.gq.com/photos/599a64b138899e6ab3b11aee/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-zoom-vaporfly.jpg',
        title: 'Nike Zoom Vaporfly x Virgil Abloh',
        color: 'White',
        price: '299'
    },
    {
        id: '333',
        img: 'https://media.gq.com/photos/599a64b08aaf3516506b9655/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-blazer.jpg',
        title: 'Nike Blazer x Virgil Abloh',
        color: 'White',
        price: '299'
    },
    {
        id: '444',
        img: 'https://media.gq.com/photos/599a64b06b4c0e160ac51606/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-vapor-max.jpg',
        title: 'Nike Air VaporMax x Virgil Abloh',
        color: 'Black',
        price: '299'
    },
    {
        id: '555',
        img: 'https://media.gq.com/photos/599a64b0d48ec673e16de479/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-max-90.jpg',
        title: 'Nike Air Max 90 x Virgil Abloh',
        color: 'White',
        price: '299'
    },
    {
        id: '666',
        img: 'https://media.gq.com/photos/599a64afd9e6b31cec0323d2/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-chuck-taylor.jpg',
        title: 'Converse Chuck Taylor x Virgil Abloh',
        color: 'White',
        price: '299'
    },
    {
        id: '777',
        img: 'https://media.gq.com/photos/599a64b1d48ec673e16de47b/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-react-hyperfly.jpg',
        title: 'Nike React Hyperdunk 2017 x Virgil Abloh',
        color: 'White',
        price: '299'
    },
    {
        id: '888',
        img: 'https://media.gq.com/photos/599a64af38899e6ab3b11aec/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-max-97.jpg',
        title: 'Nike Air Max 97 x Virgil Abloh',
        color: 'White',
        price: '299'
    },
    {
        id: '999',
        img: 'https://media.gq.com/photos/599a64b101e054755c42cb0d/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-presto.jpg',
        title: 'Nike Air Presto x Virgil Abloh',
        color: 'Black',
        price: '299'
    },
    {
        id: '101010',
        img: 'https://media.gq.com/photos/599a64af8aaf3516506b9653/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-force-one.jpg',
        title: 'Nike Air Force 1 Low x Virgil Abloh',
        color: 'White',
        price: '299'
    },
]

function HomePage() {
    return (
        <>
            <Header />
            <div className={classes.home}>
                <HomeCarousel />
                <div className={classes.home__container}>
                    <h1 className={classes.title}>Best Sellers</h1>
                    <div className={classes.products__container}>
                        {DUMMY_DATA.map((item) => <Product key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} color={item.color}/>)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;