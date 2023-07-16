var quote = [
    {
        Author: " Oscar Wilde",
        Quote: "“Be yourself; everyone else is already taken.”",
        image: "https://images.gr-assets.com/authors/1605640483p8/7715.jpg"

    },
    {
        Author: " Albert Einstein",
        Quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        image: "https://images.gr-assets.com/authors/1193930952p5/61105.jpg"
    },
    {
        Author: "Pablo Neruda",
        Quote: "“I love you as certain dark things are to be loved,in secret, between the shadow and the soul.”",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1651474656i/4026._UX200_CR0,35,200,200_.jpg"
    },
    {
        Author: " Dr. Seuss",
        Quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        image: "https://images.gr-assets.com/authors/1429114964p5/9810.jpg"
    },
    {
        Author: "  Robert Frost",
        Quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        image: "https://images.gr-assets.com/authors/1673611182p5/3565.jpg"
    },
    {
        Author: "  Charles M. Schulz",
        Quote: "“All you need is love. But a little chocolate now and then doesn't hurt.”",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198590750i/209672._UY200_CR51,0,200,200_.jpg"
    },
    {
        Author: "Andre Gide, Autumn Leaves",
        Quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1424119198i/7617._UX200_CR0,29,200,200_.jpg"
    },
    {
        Author: "  Maya Angelou",
        Quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1379017377i/3503._UX200_CR0,6,200,200_.jpg"
    },
    {
        Author: "  J.K. Rowling",
        Quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg"
    },
    {
        Author: "  Albert Camus",
        Quote: "“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1686463588i/957894._UY200_CR46,0,200,200_.jpg"
    }

]

function changeQuote() {
    var temp = Math.floor(Math.random() * quote.length);
    document.getElementById('photo').src = quote[temp].image;
    document.getElementById('Quote').innerHTML = quote[temp].Quote;
    document.getElementById('Author').innerHTML = quote[temp].Author;
}