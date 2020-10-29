// # Warmup - Serge Says
//
// Create a function so Serge can respond!
//
// ## Examples
//
// - Serge answers 'Sure.' if you ask him a question.
//
// - He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// - He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// - He answers 'Whatever.' to anything else.
//
// - Create a function that takes an input and returns Serge's response.

const serge = function(ask) {
  if (ask === undefined || ask.trim() === '' ) {
      return 'Fine. Be that way!';
  } else if (ask[ask.length - 1] === '?') {
      return 'Sure.';
  } else if (ask === ask.toUpperCase() ) {
      return 'Woah, chill out!';
  } else {
      return 'Whatever.';
  }

};
