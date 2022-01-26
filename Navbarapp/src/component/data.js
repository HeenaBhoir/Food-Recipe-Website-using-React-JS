import img1 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Foods\\Butter_chicken.jfif'
import img2 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Foods\\Chicken Lollipop.jfif'
import img3 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Foods\\Chicken_biryani.jfif'
import img4 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Foods\\Dal_fry.jpg'
import img5 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Foods\\Mutter_paneer.jfif'
import img6 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Foods\\Mutton_curry.jfif'
import img7 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Foods\\paneer chilly.jpg'
import img8 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Foods\\Tandoori-Roti.jpg'
import img9 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Drinks\\Chocolate_milkshake.jfif'
import img10 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Drinks\\badam-milkshake.jpg'
import img11 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Drinks\\Dalgona_Coffee.jfif'
import img12 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Drinks\\Falooda.jfif'
import img13 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Drinks\\Hot_coffee.jfif'
import img14 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Drinks\\mango-milkshake-recipe.jpg'
import img15 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Drinks\\Masala tea.jpg'
import img16 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Drinks\\Strawberry-Milkshake.jpg'
import img17 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Cakes\\Black_Forest_cake.jpg'
import img18 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Cakes\\chocolate_cake.jfif'
import img19 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Cakes\\Kitkat_cake.jfif'
import img20 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Cakes\\Mix fruit cake.jfif'
import img21 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Cakes\\pineapple cake.jpeg'
import img22 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Cakes\\Red_velvet_Cake.jpg'
import img23 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Cakes\\simple_white_cake.jpg'
import img24 from 'D:\\Heena Docs\\project Heena\\navbarapp\\src\\images\\Cakes\\apple-cake.jpg'


const data = {
    foods:[
        {
            id:1,
            itemname: 'Butter Chicken',
            recipelink: 'https://cafedelites.com/butter-chicken/',
            itemimage: img1,
            videolink: 'https://youtu.be/a03U45jFxOI',
            ingredient: '(800g) boneless and skinless chicken thighs or breasts cut into bite-sized , 1/2 cup plain yogurt,1 1/2 tablespoons minced garlic'
        },
        {
            id:2,
            itemname: 'Chicken Lollipop',
            recipelink: 'https://tasty.co/recipe/chicken-lollipop/',
            itemimage: img2,
            videolink: 'https://tasty.co/recipe/chicken-lollipop/',
            ingredient: '600 gm chicken, 1 tablespoon garam masala powder, 1 teaspoon saffron, 1 tablespoon bay leaf, 1 black cardamom'
        },
        {
            id:3,
            itemname: 'Chicken Biryani',
            recipelink:'https://www.cubesnjuliennes.com/chicken-biryani-recipe/',
            itemimage: img3,
            videolink: 'https://youtu.be/LR1rufVtzSQ',
            ingredient: '600 gm chicken, 1 tablespoon garam masala powder, 1 teaspoon saffron, 1 tablespoon bay leaf, 1 black cardamom'
        },
        {
            id:4,
            itemname: 'Dal Fry',
            recipelink: 'https://www.vegrecipesofindia.com/dal-fry-how-to-make-prepare-dal-fry-recipe//',
            itemimage: img4,
            videolink: 'https://youtu.be/xEeoZYpa5wY',
            ingredient: '½ cup tuvar dal (tur dal, arhar dal, pigeon pea lentils) or ¼ cup each of tuvar dal and masoor dal'
        },
        {
            id:5,
            itemname: 'Mutter Paneer',
            recipelink: 'https://hebbarskitchen.com/matar-paneer-recipe-restaurant-style//',
            itemimage: img5,
            videolink: 'https://youtu.be/SbOA2GcJOf0',
            ingredient: '1 kg - mutton, 2 - onions big, sliced, 2 - tomatoes, sliced, 2-3 slit - green chillies, 2 tsp - ginger-garlic paste'
        },
        {
            id:6,
            itemname: 'Mutton Curry',
            recipelink: 'https://www.indianhealthyrecipes.com/mutton-curry-recipe-mutton-gravy//',
            itemimage: img6,
            videolink: 'https://youtu.be/uEl7cLuhWHM',
            ingredient: '1 kg - mutton, 2 - onions big, sliced, 2 - tomatoes, sliced, 2-3 slit - green chillies, 2 tsp - ginger-garlic paste'
        },
        {
            id:7,
            itemname: 'Paneer Chilly',
            recipelink: 'https://www.indianhealthyrecipes.com/chilli-paneer-recipe//',
            itemimage: img7,
            videolink: 'https://youtu.be/lr6AMBsjxrY',
            ingredient: '250 grams paneer cut into cubes, 3 tablespoons cornstarch; 3 tablespoons all purpose flour, 1/2 teaspoon salt'
        },
        {
            id:8,
            itemname: 'Tandoori Roti',
            recipelink: 'https://hebbarskitchen.com/tandoori-roti-recipe-on-tawa//',
            itemimage: img8,
            videolink: 'https://youtu.be/5-YhV1gmoo8',
            ingredient: '2½ cup wheat flour, 1 tsp sugar, 1 tsp baking powder, ¼ tsp baking soda, ½ tsp salt, ½ cup curd'
        },
        {
            id:9,
            itemname: 'Chocolate Milkshake',
            recipelink: 'https://www.thespruceeats.com/chocolate-milkshake-4587581/',
            itemimage: img9,
            videolink: 'https://youtu.be/EA4yMzlHo9U',
            ingredient: '1½ -2 tablespoons Chocolate Syrup, 1 cup Chilled Milk, 3/4 Cup Vanilla or Chocolate Ice Cream'
        },
        {
            id:10,
            itemname: 'Badam Milkshake',
            recipelink: 'https://www.sanjeevkapoor.com/recipe/Badam-Milk.html/',
            itemimage: img10,
            videolink: 'https://youtu.be/E-7rGboE-UQ',
            ingredient: '2 glasses full cream milk, 10-15 almonds/badam,2 tablespoon sugar/4 tablespoon full condensed milk,3-4 saffron strands'
        },
        {
            id:11,
            itemname: 'Dalgona Coffee',
            recipelink: 'https://www.indianhealthyrecipes.com/dalgona-coffee/',
            itemimage: img11,
            videolink: 'https://youtu.be/9SjCEOWd3PU',
            ingredient: '2 tbsp. granulated sugar, 2 tbsp. instant coffee , 2 tbsp. cold water'
        },
        {
            id:12,
            itemname: 'Rose Falooda',
            recipelink: 'https://rakskitchen.net/rose-falooda-recipe-easy-rose-falooda//',
            itemimage: img12,
            videolink: 'https://youtu.be/0EJxE72VkcI',
            ingredient: '3 cups Cold Milk, 2 teaspoon Sabja/Sweet Basil Seeds, 6 tablespoon Rose Syrup'
        },
        {
            id:13,
            itemname: 'Hot Coffee',
            recipelink: 'https://www.vegrecipesofindia.com/hot-coffee-recipe-cafe-style//',
            itemimage: img13,
            videolink: 'https://youtu.be/qfk8lOzwo2Q',
            ingredient: 'Coffee2 tsp, Sugar1 tbsp, Milk'
        },
        {
            id:14,
            itemname: 'Mango Milkshake',
            recipelink: 'https://www.indianhealthyrecipes.com/mango-milk-shake-recipe//',
            itemimage: img14,
            videolink: 'https://youtu.be/WYaVWmxqRIs',
            ingredient: '2 mangoes, 1.5 cups milk, 2 tablespoons sugar'
        },
        {
            id:15,
            itemname: 'Masala Tea',
            recipelink: 'https://www.vegrecipesofindia.com/masala-chai-recipe-masala-tea//',
            itemimage: img15,
            videolink: 'https://youtu.be/f70zqr8ELnE',
            ingredient: '2 cup water, 4 tsp tea powder, ½ tsp chai masala (prepared), 1 cup milk'
        },
        {
            id:16,
            itemname: 'Strawberry Milkshake',
            recipelink: 'https://foodviva.com/strawberry-recipes/strawberry-milkshake-recipe//',
            itemimage: img16,
            videolink: 'https://youtu.be/nphZfdZEPgw',
            ingredient: '250 grams strawberries, 2 cups milk cold, 2 to 3 scoops strawberry ice cream'
        },
        {
            id:17,
            itemname: 'Black Forest Cake',
            recipelink: 'https://www.allrecipes.com/recipe/8095/black-forest-cake-i//',
            itemimage: img17,
            videolink: 'https://youtu.be/qIX_CUsANpw',
            ingredient: '1 tin (400 gms)Nestlé MILKMAID, 1¾ cup (175 gms)Maida (All-purpose Flour), 3-4 heaped tbsp (25gms)Cocoa Powder, 1 tspBaking Powder'
        },
        {
            id:18,
            itemname: 'Chocolate Cake',
            recipelink: 'https://www.hersheyland.com/recipes/hersheys-perfectly-chocolate-chocolate-cake.html/',
            itemimage: img18,
            videolink: 'https://youtu.be/J7bjH5IdMjc',
            ingredient: '3/4 cups all purpose flour, or (plain flour), 3/4 cup unsweetened cocoa powder, (2.6 oz | 75 g) or regular Hersheys cocoa powder'
        },
        {
            id:19,
            itemname: 'Kitkat Cake',
            recipelink: 'https://www.taste.com.au/recipes/kit-kat-cake/9f091425-c878-4dde-8633-8a185810b6d2/',
            itemimage: img19,
            videolink: 'https://youtu.be/wfUd5r_AYHo',
            ingredient: '3 cups all-purpose flour, 1/3 cup +1 tbsp unsweetened cocoa, 2 cups sugar, 2 tsp baking soda'
        },
        {
            id:20,
            itemname: 'Mix Fruit Cake',
            recipelink: 'https://merryboosters.com/super-moist-fruit-cake-recipe//',
            itemimage: img20,
            videolink: 'https://youtu.be/RxctEoy6-ec',
            ingredient: 'Plain flour: 228g or 1 and 3/4 cups(loosely packed), Mixed spice: 1 tsp, Cinnamon powder:1 tsp, Baking powder:1 tsp'
        },
        {
            id:21,
            itemname: 'Pineapple Cake',
            recipelink: 'https://www.allrecipes.com/recipe/15857/easy-pineapple-cake//',
            itemimage: img21,
            videolink: 'https://youtu.be/Gnl4npJ5RXg',
            ingredient: '3/4 cup maida3/4 cup powdered sugar3/4 tsp vanilla essence3/4 tsp baking powder'
        },
        {
            id:22,
            itemname: 'Red Velvet',
            recipelink: 'https://www.livewellbakeoften.com/the-best-red-velvet-cake//',
            itemimage: img22,
            videolink: 'https://youtu.be/vGE-RfP6KRE',
            ingredient: '½ cups buttermilk, 1¼ cups warm water, 1/2 cup vegetable oil, 1 teaspoon vanilla extract'
        },
        {
            id:23,
            itemname: 'Simple White Cakes',
            recipelink: 'https://www.allrecipes.com/recipe/17481/simple-white-cake//',
            itemimage: img23,
            videolink: 'https://youtu.be/TdehvhjWerU',
            ingredient: '2/3 cups (433g) cake flour (spoon & leveled), 1 teaspoon salt, 2 teaspoons baking powder, 3/4 teaspoon baking soda'
        },
        {
            id:24,
            itemname: 'Apple Cake',
            recipelink: 'https://www.bettycrocker.com/recipes/homemade-apple-cake/5427daa2-21ac-4b09-bb6e-4c24437500ce/',
            itemimage: img24,
            videolink: 'https://youtu.be/EI2eSkTJZGA',
            ingredient: 'teaspoon vanilla extract, 3 tablespoons dark rum, 2 baking apples, peeled, cored and cut into 1/2-inch cubes'
        }
    ]
}
export default data;