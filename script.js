const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { text: "We become what we think about.", author: "Earl Nightingale" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { text: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
  { text: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" },
  { text: "It is never too late to be what you might have been.", author: "George Eliot" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" }
];

function getRandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = `"${random.text}" — ${random.author}`;
}

document.getElementById("newQuote").addEventListener("click", getRandomQuote);

// Show one on load
window.addEventListener("load", getRandomQuote);
