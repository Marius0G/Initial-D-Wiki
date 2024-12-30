const quotes = [
    "There's no holding back when you're in the downhill. -Takumi Fujiwara",
    "Drift is the quickest way to clear a corner. -Keisuke Takahashi",
    "Cars are not about their looks; it's all about the performance. -Ryosuke Takahashi",
    "I drive to feel alive. -Takumi Fujiwara",
    "You won't know your limits unless you push them. -Keisuke Takahashi",
    "I don’t care about winning or losing, as long as I drive my best. -Takumi Fujiwara",
    "Speed isn’t everything. Precision and control win the race. -Ryosuke Takahashi",
    "The perfect drift is about balance, control, and timing. -Bunta Fujiwara",
    "You can’t call yourself a racer until you’ve raced at night. -Takeshi Nakazato",
    "Racing isn’t just about the car; it’s about the driver. -Ryosuke Takahashi",
    "Practice isn't just about repeating; it's about improving. -Keisuke Takahashi",
    "A car becomes an extension of yourself when you understand it completely. -Bunta Fujiwara",
    "This isn't just a race. It’s a battle of pride. -Ryosuke Takahashi",
    "The mountain roads teach you lessons you can’t learn on a track. -Bunta Fujiwara",
    "When you drive, don’t let fear control you. -Takumi Fujiwara",
    "In racing, the moment you hesitate is the moment you lose. -Ryosuke Takahashi",
    "You’re fast, but being fast isn’t everything. -Takeshi Nakazato",
    "A race isn’t over until you’ve crossed the finish line. -Keisuke Takahashi",
    "True skill is when you can make the impossible look effortless. -Bunta Fujiwara",
    "The best driver isn’t the one who never makes mistakes but the one who learns from them. -Takumi Fujiwara",
    "Every car has a soul. You just have to find it. -Bunta Fujiwara",
    "Racing is a dialogue between the car and the driver. -Ryosuke Takahashi",
    "When you race on the mountain, it’s not about horsepower; it’s about technique. -Takumi Fujiwara",
    "Racing at night sharpens your senses and tests your courage. -Keisuke Takahashi",
    "You only lose when you give up. -Takumi Fujiwara",
    "A skilled driver can make any car shine. -Bunta Fujiwara",
    "There’s a difference between reckless and fearless. -Ryosuke Takahashi",
    "Every corner is an opportunity to prove your skill. -Takumi Fujiwara",
    "Master the road, and you’ll master the race. -Bunta Fujiwara",
    "It’s not just driving; it’s art. -Ryosuke Takahashi",
    "On the mountain, respect your opponent, but fear no one. -Keisuke Takahashi",
    "Drifting isn’t just a technique; it’s a mindset. -Bunta Fujiwara",
    "You don’t need the fastest car to win, just the best strategy. -Ryosuke Takahashi",
    "A true driver can feel the car’s heartbeat. -Bunta Fujiwara",
    "The most dangerous driver is the one who knows no limits. -Takeshi Nakazato",
    "Stay calm under pressure, and victory will follow. -Ryosuke Takahashi",
    "The road ahead is always uncertain; that's what makes it exciting. -Takumi Fujiwara",
    "Your skills improve when you face stronger opponents. -Keisuke Takahashi",
    "Sometimes, winning isn’t about speed; it’s about endurance. -Ryosuke Takahashi"
];

window.addEventListener("load", function() {
    h1Element = document.querySelector("h1");
    pElementQuote = document.createElement("p");
    pElementQuote.id = "quote";
    h1Element.insertAdjacentElement("afterend", pElementQuote);
    setRandomQuote();
    this.setInterval(setRandomQuote, 5000);
});

function setRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    let quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = quote;
}