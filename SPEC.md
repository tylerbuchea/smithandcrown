# PART 1

Choose 2 popular Javascript SPA frameworks (React, Ember, Angular, Vue, etc.) and compare/contrast their strengths and weaknesses. Then, pick 1 approach and explain why it's your favorite choice for starting a new project. Your whole response should be fairly short, only a couple of paragraphs.

## Angular

Angular is strong candidate for a new project because it is an all in one solution and is very opinionated about which router and state management system you should use. There are clear libraries and version pairings for different libraries that work with Angular.

Some negatives are that Angular doesn't 

## React

React uses a virtual DOM so UI updates aren't janky like in Angular because they are batched together. In Angular this can cause undesirable content flashes and dynamic content rendering at the wrong time. React on the other hand makes it easier for you state changes to be smoothly represented in the UI since the UI is nothing more than a pure function of the state.

I choose React because for me it makes architecting applications in a performant and appealing way much easier. By having truly encapsulated components and providing them with smart lifecycle methods it become easy to reason about each portion of your app independently in all of it's different states. While still allowing you to visualize the entire tree.

# PART 2

* basic metrics of Github repositories
* target the top 6 cryptocurrency/blockchain projects by total market capitalization
  * Bitcoin (BTC)
    * https://github.com/bitcoin/bitcoin
  * Ethereum (ETH)
    * https://api.github.com/repos/ethereum/go-ethereum
  * Ripple (XRP)
    * https://github.com/ripple/rippled
  * Bitcoin Cash (BCH)
    * https://github.com/Bitcoin-ABC/bitcoin-abc
  * EOS (EOS)
    * https://github.com/EOSIO/eos
  * Stellar (XLM)
    * https://github.com/stellar/stellar-core
* Display a card for each repository
  * name
  * description
  * organization.avatar_url (as image)
  * language
  * open_issues
  * forks 
  * homepage

## GraphQL Attempt

Turns out the GraphQL endpoint does not have all the attributes I needed. This is how I would of done it though. Sure there is a way but I don't have enough time to figure it out.

```graphql
query { 
  bitcoin: repository(owner:"bitcoin" name:"bitcoin") {
    name
  	description
  	organization {
      avatar_url
    }
  	language
  	open_issues
  	forks 
  	homepage
  }
  ethereum: repository(owner:"ethereum" name:"go-ethereum") {
    name
  	description
  	organization {
      avatar_url
    }
  	language
  	open_issues
  	forks 
  	homepage
  }
}
```