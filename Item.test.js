const Item = require("./Item")



describe('Items', () => {
    test('Items have a name', () => {
        const item = new Item('Sirloin steak', 13)

        expect(item.name).toBe('Sirloin steak')
    })
    test('Items have a price', () => {
        const item = new Item('Sirloin steak', 13) 
        expect(item.price).toBe(13)
    })
    
})