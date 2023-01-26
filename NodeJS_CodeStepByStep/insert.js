const dbConnect = require('./MongoDB2-1');
const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [
            {name: 'Sam458', brand: 'Samsung', price: 320, category: 'Mobile'},
            {name: 'iPhone', brand: 'Samsung', price: 430, category: 'Mobile'},
            {name: 'minote5pro', brand: 'Samsung', price: 1320, category: 'Mobile'}
        ]
    );
    if (result.acknowledged) {
        console.log('Data is inserted');
    }
}
insert();